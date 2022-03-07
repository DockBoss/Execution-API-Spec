# Execution Layer API Considerations

## Table of Contents
  - [Background](#background)
  - [Default Block Parameter vs Block Parameter](#default-block-parameter-vs-block-parameter)
  - [Error Messages](#error-messages)
## Disclaimer
I am just starting out my career in Computer Science/Software Engineering. I have realized that I am not very good at organization of information as most of you Devs are. I am working to improve this skill, but in the meantime please bear with me as you read through this somewhat disorganized document.
## Purpose
The purpose of this document is to summarize the notable "*features*" and inconsistencies found while writing the JSON-RPC API specification. The current draft of the specification can be found [here](https://github.com/DockBoss/Execution-API-Spec/blob/main/spec/EthereumExecitonLayerAPISpec.md) and the PR with the discussion can be found [here](https://github.com/ethereum/execution-apis/pull/149). The overwhelming but necessary spread sheet showcasing the inconsistencies can be found [here](https://docs.google.com/spreadsheets/d/1qo3ICiBl2_vV-Co4KSjtAnIzhwp4L9J_USQQzKYi3KA/edit?usp=sharing).
I strongly feel that all the Ethereum Execution Layer JSON-RPC API **MUST** behave in the exact same way regardless of client. I have found that the clients have subtle differences in how they behave. I would like to get a consensus on what the expected behavior **MUST** be so I can add it to the spec and inform client teams on what they need to change to meet the spec.
## Background
The specification was written using Geth as the "source of all truth". All behavior described in the document correlates to how Geth currently operates. I would've described what the expected behavior **should** be, but I didn't think I had the experience to make those calls. Plus this way the spec can be used as check list to showcase undesired behavior that still needs to be changed within Geth.

---
## Discussion Points
### Default Block Parameter vs Block Parameter
I have always seen it written as the default block parameter, but Micah brought up the point that the `default` seems unnecessary. Though in my honest opinion default block parameter has a better ring than just block parameter, but I understand that this is probably not a great determining factor.
### Error Messages
JSON-RPC 2.0 Specification reserves codes -32000 to -32099 for custom errors. Though I have gotten a -32005 before a vast majority if not all of the non-standard errors return -32000. Though they do have different error messages for the  different situations. In [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474) an earlier version of the RPC spec has a table of error codes that I used in hopes that the clients based the error messages off of the EIP, but it doesn't seem to be the case.
### Transaction types
I have found that transactions are not determined by their transaction `type`. After asking around I found that `type` is not even a field in Geth when sending transactions. [Geth issue](https://github.com/ethereum/go-ethereum/issues/24179).
### Required parameters
What should the specified behavior be when a required parameter is an empty string?
  #### Geth
  * eth_signTransaction
    * [ESNT-10] when `gas` is an empty string it will default to `0x0`.
    * [ESNT-13] when `gasPrice`, `maxFeePerGas`, or `maxPriorityFeePerGas` is an empty string it will default to `0x0`. 
    * [ESNT-17] when `nonce` is an empty string it will default to `0x0`.
### Verifying Contract `Data`/`Input`
I have found that some endpoints like eth_estimateGas verifies the given `data`(geth only) and errors when the `data` uses invalid opcodes or causes EVM errors. While other endpoints do not verify the `data` at all, this causes some interesting and unexpected behavior.  EX.
* eth_fillTransaction **Does Not** verify the `data` when the `gas` is specified, but does not verify the `data` when it has to estimate the `gas`.
* eth_signTransaction **Does Not** verify the `data` allowing you to sign a transaction contains EVM errors or invalid opcodes.
* eth_sendRawTransaction **Does Not** verify the `data` allowing you to deploy contract containing EVM errors or invalid opcodes. This results in a contract with no code.
* eth_sendTransaction **Does Not** verify the `data` when the `gas` is specified allowing you to deploy contract containing EVM errors or invalid opcodes. This results in a contract with no code.
### Additional endpoints
* getHeaderByHash
  * Geth and erigon have it, would it be useful to make it a standard endpoint?
* getHeaderByNumber
  * Geth and erigon have it, would it be useful to make it a standard endpoint?
* eth_fillTransaction
  * geth has it
### Default addresses
* erigon uses ` 0xfffffffffffffffffffffffffffffffffffffffe`
  * This address has no eth, so when using endpoints like eth_estimateGas and eth_call they will not work unless you specify an account with eth.
* the other clients use `0x0000000000000000000000000000000000000000`

### Default block
When A param that is expecting a block number is missing should it error, or default to "latest"?

### TODO: Erigon didn't return contract for eth_code 
### JSON-RPC 2.0 Specification
We currently are not meeting the JSON-RPC 2.0 specification. I know these are not super critical, but Id rather note them then not.
* JSON-RPC 2.0 specification requires that *"A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0"."*
* JSON-RPC 2.0 specification requires that *An identifier established by the Client that MUST contain a String, Number, or NULL value if included. If it is not included it is assumed to be a notification. The value SHOULD normally not be Null and Numbers SHOULD NOT contain fractional parts*
  * Also it returns when there is no id and considered a notification.

## Decisions to be Made
# TODO: write a list of descisions that need to be made
# EXTRA INFO ComPILE before publishing
## network syncing
Should we have the same behaviors for endpoints when they are not synced to the network.
EX

## Deprecated endponts 
I found a few endpoints that are deprecated in Erigon
* eth_accounts
* eth_sign
Is this erigon only or something that all clients will do?
## eth_call
* Address length?
  * Nethermind allows `to` to be 39 bits long without error
    * Is there any reason for this or is it a bug?
* when the `from` parameter is not specified what address should be used?
  * Geth uses 0x0...
  * Nethermind uses 0x0...fffffffffffffffffffffffffffffffffffffffe
  * Ganache uses the generated coinbase
  * Hardhat uses first generated address not generated coinbase
* What accounts should be allowed to make a call?
  * are we going to apply EIP-3607 to eth_call?
  * Right now I can use my Metamask addresses to make calls to mainnet on infura, so can everyone else then. Should you be able to make calls from a unknown address?
    * I don't really see a an issue with this, but why does eth call need a `from` address?
    * does it get logged anywhere? 
* Should it error when `gas` is null and/or zero?
  * ganache allows it to be null
  * nethermind allows it to be zero
* Can `value` be null?
  * Geth and Ganache allow it 
* Do we need to check `from` balance when using eth_call?
  * I Think all clients implement this, but I am not sure why
  * I am assuming that it is to ensure that you can't make "computationally" expensive calls that could possibly flood a node?
    * but wouldn't worst case it just take one node down?
    * also if we make it a **MUST** that EIP-3607 is implemented on eth_call as well then this should'nt be as necessary right?
* should GP, MFPG, and MPFPG be allowed to be null?
  * Geth interpreted as 0 for GP and (MFPG and MPFPG)
  * Geth errors when just MFPG is null
  * Ganache interpreted as 0 for type 1 and 4a817c800 for type 2
* should MFPG be allowed to be zero?
  * Nethermind allows it  

# Inconsistencies per endpoint
## web3_clientVersion
* should web3_clientVersion collect extra params?
  * besu allows it
  * other clients error with -32602
## web3_sha3
* web3_sha3 empty string
  * nethermind errors with -32602
  * other clients return `"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"`
* web3_sha3 no 0x
  * nethermingd allows returns same as with 0x
  * others error -32602
* web3_sha3 `0x345`
  * nethermind returns the hash 
  * other clients error -32602
## net_version
* net_version extra params 
  * besu returns net version
  * other clients error -32602
## net_peerCount
* net_peerCount extra params 
  * besu returns peer count
  * other clients error -32602
## net_listening
* net_listening extra params 
  * besu returns returns true
  * other clients error -32602
## eth_protocolVersion
* eth_protocolVersion  
  * geth error -32601
  * others return `"0x42"`
* eth_protocoVersion extra params
  * besu return protocol version
  * others error -32602
## eth_gasPrice
* eth_gasPrice
  * geth: `"0x3b9aca07"`
  * nethermind: `"0x4190ab07"`
  * besu: `"0x3e8"` assuming gwei
  * erigon: `"0x3b9aca07"`
* eth_gasPrice extra params
  * besu return protocol version
  * others error -32602
## eth_maxPriorityFeePerGas
* eth_maxPriorityFeePerGas
  * geth: `"0x3b9aca00"`
  * nethermind: `"0x4190ab07"`
  * besu: error -32601
  * erigon: `"0x3b9aca00"`
* eth_maxPriorityFeePerGas extra params
  * besu error -32601
  * others error -32602
## eth_blockNumber
* eth_blockNumber extra params
  * besu return block number
  * others error -32602
## eth_getBalance
* when account is null
  * all clients error -32602
* when account is empty String
  * besu return 0x0 not sure what account it is using
  * others -32602
* account short uneven
  * geth and erigon -32602
  * nethermind and besu 0x0 not sure what account it is using
* account short even
  * besu return 0x0 not sure what account it is using
  * others -32602
* account long event
  * all clients error -32602
* account no 0x0
  * nethermind and besu return the balance
  * geth and erigon -32602
## eth_getTransactionCount
* empty params:
  * all clients error -32602
* empty address:
  * besu return 0x0 not sure what account it is using
  * others -32602
* null address:
  * all error -32602
* short even address:
  * besu return 0x0 not sure what account it is using
  * others -32602
* short uneven address:
  * besu and nethermind return 0x0 not sure what account it is using
  * geth and erigon -32602
* no 0x address:
  * besu and nethermind return value
  * geth and erigon -32602
* with no block parameter
  * nethermind uses latest?
  * others error -32602
* when block Null:
  * besu and nethermind error -32602
  * geth and erigon error -32000
* when block empty string:
  * all clients error -32602
* with block #40000 at about # 52000
  * geth -32000
  * others return value
* same block number no 0x
  * all clients error -32602
* block ahead of chain
  * besu and geth -32000
  * nethermind -32001
  * erigon value at latest
* using block hash:
  * geth -32000
  * others return value
* using block hash no 0x
  * besu return value
  * others -32602
## eth_getBlockByHash
* only one parameter
  * nethermind return latest
  * the rest error -32602
* Null block hash
  * nethermind and besu error -32602
  * geth and erigon return latest
* Boolean for block hash
  * all return latest
* text 'true' for boolean
  * nethermind  and besu return
  * geth and erigon -32602
* with block number `0x781ab`
  * erigon return
  * others -32602
* with block tag latest
  * erigon return
  * others -32602
* with short and long even hash
  * all clients error -32602
* with short odd hash
  * nethermind returns Null
  * others -32602
* block hash no 0x
  * nethermind and besu return
  * erigon and geth -32602
  ## eth_getBlockByNumber
  * one parameter
    * nethermind returns
    * others error -32602
  * null hydrated tx
    * geth and erigon return
    * nethermind and besu -32602
  * when hydrated "true"
    * nethermind and besu return
    * geth and erigon -32602
  * with blockHash
    * nethermind return
    * others -32602
  * with block tag
    * all return
  * with block ahead of chain
    * all return null
  * bock with no 0x
    * all clients error -32602
  ## get_transactionByBlockHashAndIndex
  * no 0x for both
    * nethermind and besu return
    * geth and erigon -32602
  * index with no transaction
    * nethermind error -32602
    * others return null
  * block short odd
    * nethermind error -32601
    * others error -32602
  * with tx hash fir blockHash
    * nethermind -32001
    * others return null
  * with block number
    * all clients error -32602
  * with block tags
    * all clients error -32602
## get_transactionByBlockNumberAndIndex
* no index
  * all clients error -32602
* null blockNumber
  * erigon return null
  * other clients error -32602
* index no 0x
  * nethermind and besu return
  * geth and erigon -32602
* block number no 0x
  * all clients error -32602
* index with no tx
  * nethermind error -32602
  * others return null
* with txt hash for blockNumber
  * nethermind -32001
  * others error -32602
* with block hash
  * nethermind return
  * others -32602
* with block tag
  * nethermind clients error -32602
  * others return null
## eth_getTransactionReceipt
* no 0x
  * nethermind and besu return
  * others -32602
* tx hash short odd
  * nethermind returns null
  * others -32602
* with blockHash
  * all return null
* with blockNumber
  * all clients error -32602
## eth_getTransactionByHash
* no 0x
  * nethermind and besu returns
  * geth and erigon -32602
* tx hash short odd
  * nethermind returns null
  * others -32602
* block number
  * all clients error -32602
* block hash
  * all return null
## eth_getRawTransactionByHash
* nethermind and besu -32601 not implimented
* with block hash
    * return "0x"
## eth_getRawTransactionByBlockHashAndIndex
* Nethermind and besu -32601 not implimented
* Geth and Erigon
  * don't accept block tags or block numbers
## eth_getRawTransactionByBlockNumberAndIndex
* Besu and Nether -32601 not implimented
* Erigon allows block number to be null
* geth and erigon
  * allow block tags
## eth_getBlockTransactionCountByHash
* besu and Nethermind allow no 0x
  * Other clients error -32602
*  Nethermind allows a n-1 length hash
*  Nethermind -32001 when hash does not exist
   *  Others return null
## eth_getBlockTransactionCountByNumber
* No client allows a block number without 0x
* allows block tag
* Nethermind errors -32001 when block is ahead of chain
  * others return null
* Nethermind allows a block hash
  * others error -32602
## eth_getUncleCountByBlockHash
* nethermind and besu allow no 0x
  * others -32602
* None allow block tags
*  Nethermind allow a block hash of n-1 length
*  Nethermind errors -32001 when hash doesn't exist
   *  others return null
## eth_getUncleCountByBlock number
* NOne allow no 0x
* All allow block tags
* Nethermind allows block hashe
  * others -32602
* Nethermind -32001 when block is ahead of chain
  * others return null
## eth_getUncleByBlockHashAndIndex
* Nethermind and besu allow no 0x
  * others -32602
# TODO: Test This again for nethermind
* NEthermind -32602 when no uncle exists
  * others return null
* Nethermind allows n-1 length hash
  * others error -32602
* Nethermind -32001 when using tx hash/ when block does not exist
  * others return null.
* none except block tags
## eth_getUncleByBlockNumberAndIndex
* Erigon allows number to be null, returns null
  * others -32602
* No one allow block number without 0x
* Besu allows index without 0x
  * others -32602
# TODO: Test wit nethermind again
* Nethermind -32602 when uncle does not exist at slot
  * others return null
* Nethermind -32001 when using tx hash
  * others error -32602
* all clients error -32602 when using block hash
* Nethermind -32602 when using block tag(bc uncle does not exist at slot)
  * others return null
  ## eth_chainId
  * nethermind and besu return when passing Null
    * others -32602
  * Besu return when passing text "0x500"
    * other clients error -32602
  ## eth_feeHistory
  * erigon returns when only highestBlock is null
    * others -32602
  # TODO: check DB to make sure it doesn't return reward
  * Nehtermind -32602 when array is null
    * others returns without reward percentiles
  * Nethermind -32602 when array has null value
    * besu error -32603
    * others returns without reward percentiles
  * None allow num of blocks without 0x
    * all clients error -32602
  * Geth -32602 when block number has no 0x
    * others return
  * Besu returns when reward array is out of order
    * nethermind -32602
    * erigon and geth -32000
  * Nethermind and besu -32602 when num of blocks is 0
    * Geth and erigon return block 0x0 as oldest block 
  * Nethermind errors when reward percentiles has duplicate
    * others return
  * All accept block tag
  * All -32602 when passing block hash
## eth_mining
* besu returns when passed args
  * others -32602
## eth_hashrate
* besu returns when passed args
  * others -32602
## eth_coinbase
* besu returns when passed args
  * others -32602
* Nethermind didn't show same coinbase even thought I set it in the config
## eth_accounts
* Besu returns when passed args
  * others -32602
* Erigon -32000 when called with no arguments
  * is deprecated

## eth_estimateGas
* Nethermind uses `0xfffffffffffffffffffffffffffffffffffffffe` as default
  * besu ``
  * geth ``
  * erigon ``
# TODO: run again with sufficient eth in nethermind default address 
* All return 0xcf08 when passed an empty tx object
* Besu -32004 when from address has insufficient funds
  * others -32000
* besu and nethermind use default address when from is empty string
  * others error -32602
* All clients use default when from is null
* Besu allows value data, and to without 0x
  * others -32602
* All cleints do not check funds when estimating contract deployment
* Besu and erigon return different values when using input for contract deployment than data
  * I am assuming they only recognize data
* Nethermind -32015 when invalid opcodes used
  * geth and erigon -32000
  * Besu -32603
* Nethermind -32015 when odd hex is used for data
  * others -32602
* Besu returns when MFPG < MPFPG
  * unsure of nethermind
  * geth and error -32000
* Besu -32602 when both GP and or MFPG, MPFPG
  * geth and erigon -32000
  * unsure of nethermind
* Besu returns when addresses are incorrect length
  * others -32602
  * Except when nethermind is passed n-1 length then -32603 + some long message
* besu returns when to is empty
  * unsure of nethermind
  * geth and erigon -32602
*  All return when to is null 0xcf08
   *  need to test on nethermind again
* Nethermind -32602 when value is empty
  * others returns
* ALl return when value is null or nonexistent
* All return 0xcf08 when just data, and null or empty
## eth_getCode
* Need to look into, but looks like erigon's return has a newline to begine with
* Nethermind and Besu allow no 0x for address
  * geth and erigon -32602
* Besu and Erigon return 0x when calling before contract was created
  * geth -32000
  * Nethermind -32002
* Geth -32000 when calling with blockNumber
  * others return 
* Geth and Besu -32000 when number is ahead of chain
  * Nethermind -32001
  * Erigon return latest
* None allow blockNumber without 0x
  * all clients error -32602
* all -32602 when no block number exists
  * Besu returns returns latest? when there is no `,` comma just address
* Geth and error -32000 when blockNumber is null
  * Nethermind and Besu -32602
* Geth -32000 when calling fake contract block number 0x88bfa 
  * i think its a geth setting
  * other cleints return 0x
* All clients error -32602 when the address is too long
* Besu returns 0x when address is n-2
  * others -32602
* Nethermind and Besu return 0x when address is n-1
  * other -32602
## eth_getStorageAt
* Nethermind and Besu allow address with no 0x
  * geth and erigon -32602
* All clients return when slot has no 0x
* Geth -32000 when calling block before contract is created
  * Nehtermind -32603
  * Besu and erigon return 0x00000...
* All clients error -32602 when only address
* Geth and Besu -32000 when block is ahead of chain
  * Nethermind -32001
  * Erigon returns latest
* All clients error -32602 when blockNumber without 0x
* all clients error -32602 when blockNumber is empty and Null
* Nethermind returns latest when no block exists
  * others error -32602
* Nethermind -32602 when slot is empty
  * others return latest
* Nethermind and Besu -32602 when slot is null
  * geth and erigon return latest
# TODO: check nethermind's coinbase situation
## eth_call
* Nethermind returns 0x when no block number is passed `{}`
  * other clients error -32602
* All clients return 0x when passed `{}, latest`
* All clients error -32602 when blockNumber is empty
* Nethermind and Besu -32602 when block number is null
  * Geth and erigon -32000
* Nethermind uses 0xfff...e for caller
  * All others 0x000...0
* Besu -32004 when the account has insufficient funds
  * others -32000
* Nethermind and Besu use default account when from is empty
  * Geth and erigon -32602
* All clients use default account when from is null
* Geth and Nethermind return default account when calling msg.sender account
  * Besu and Erigon return 0x
* Nethermind gives precedence to `data` not `input` I think opcode 41 returns nethermind's coinbase not the blocks coinbase
  * Geth gives precedence to `input` not `data`
  * besu gives precedence to `data` not `input`
  * erigon gives precedence to `data` not `input`
* Nethermind and Besu allow data without 0x 
  * Geth and Erigon -32602
* Besu allows `to` and `value` no 0x 
  * Nethermind unsure
  * Geth and Erigon -32602
* Besu -32004 when insufficient funds
  * others -32000
* Nethermind and Besu return when `to` is empty
  * geth and erigon -32602
* All clients return when `to` is null or not specified
* Nethermind -32602 when `value` is empty
  * others return
* All clients return when `value` is null or not specified  
* Nethermind -32015 when invalid opcode is used
  * Besu -32603
  * geth and erigon -32000
* Nethermind -32015 when gas is too low
  * Besu -32003
  * geth and erigon -32000
* Nethermind -32015 when gas is exceeds cap
  * other clients return
* Nethermind uses 5f5117e as default `gas`
  * Geth and erigon use 2fa20fe
  * Besu uses 7fffffffffff307d
    * But uses 79427e when `gas` is null
#### gasPice Opcode 
* Nethermind returns 0x0...0 for `3a` gasPrice opcode when `"type": "0x2"` and `gasPrice` is used
  * Nethermind reruns the gasPrice when not `type` is not specified
  * other clients return `gasPrice`
* All clients return 7 for gasPrice opcode when `maxFeePerGas` is used
* Nethermind returns 0x00...0 for gasPrice opcode when only `maxPriorityFeePerGas` is used
  * Besu -32602
  * geth and erigon -32000
* All cleints return 100006 for gasPrice opcode when both `MFPG` and `MPFPG` are used
* Nethermind reruns `maxFeePerGas` for gasPrice opcode when `MPFPG` > `MFPG`
  * others -32000
* Nethermind -32602 when `MFPG` and `MPFPG` are empty
  * others use 0x0 for values
* All return when `MFPG` and `MPFPG` are null
* Nethermind and Besu -32602 when `mfpg` is empty and `mpfpg` is not
  * Geth and erigon -32000 mpfpg > mfpg
* Nethermind returns 0x0...0 when `mfpg` is null and `mpfpg` is not
  * geth and erigon -32000 mpfpg > mfpg
  * besu -32602
* Nethermind -32602 when `mpfpg` is empty and `mfpg` is not
  * others return 7
* All return 7 when `mpfpg`is null and `mpfpg` is not
* Nethermind returns 10006 when `mfpg` `mpfpg`, and `gp` are used
  * besu -32602
  * geth and erigon -32000
#### chain id opcode
* Nethermind -32602 when chain id is empty
  * others return
* besu -32602 when chain id is null
  * others return
#### calling simple storage return function
* All clients -32602 when block number has no 0x
* Erigon and Besu return 0x when block number is before contract deployment
  * geth -32000
  * nethermind -32002
* Erigon return 0x when block is ahead of chain
  * geth and besu -32000
  * nethermind -32001
* All clients ignore extra key value pairs that do no pertain to the call
# TODO: check general JSON-RPC test results again
## General JSON-RPC Tests
* All clients allow json-rpc other that 2.0
* Besu -32600 when name has WeIRD case
  * others return
* All allow id to be float
* Nehtermind returns when no ID - notification
  * others return `request/node error`
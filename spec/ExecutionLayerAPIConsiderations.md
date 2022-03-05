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


# TODO:
# Data Read Through
* should web3_clientVersion collect extra params?
  * besu allows it
  * other clients error with -32602
* web3_sha3 empty string
  * nethermind errors with -32602
  * other clients return `"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"`
* web3_sha3 no 0x
  * nethermingd allows returns same as with 0x
  * others error -32602
* web3_sha3 `0x345`
  * nethermind returns the hash 
  * other clients error -32602
* net_version extra params 
  * besu returns net version
  * other clients error -32602
* net_peerCount extra params 
  * besu returns peer count
  * other clients error -32602
* net_listening extra params 
  * besu returns returns true
  * other clients error -32602
* eth_protocolVersion  
  * geth error -32601
  * others return `"0x42"`
* eth_protocoVersion extra params
  * besu return protocol version
  * others error -32602
* eth_gasPrice
  * geth: `"0x3b9aca07"`
  * nethermind: `"0x4190ab07"`
  * besu: `"0x3e8"` assuming gwei
  * erigon: `"0x3b9aca07"`
* eth_gasPrice extra params
  * besu return protocol version
  * others error -32602
* eth_maxPriorityFeePerGas
  * geth: `"0x3b9aca00"`
  * nethermind: `"0x4190ab07"`
  * besu: error -32601
  * erigon: `"0x3b9aca00"`
* eth_maxPriorityFeePerGas extra params
  * besu error -32601
  * others error -32602
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
* 
# WIP 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.6.4 
## Working Draft: Updated November 22th 
---
### **Author:**
Jared Doro(jareddoro@gmail.com) [Is my Website still down?](jareddoro.me)

### **Editors:**
nobody yet

### **Abstract:**
This document provides a detailed description of the different types of Ethereum's Execution Layer API. This document also provides the minimum requirements and functionality that is needed for a piece of software to be considered a valid Ethereum Execution Layer API.
### **Keywords:**
The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as described in [[RFC2119](http://www.ietf.org/rfc/rfc2119.txt)] when, and only when, they appear in all capitals, as shown here.

-----
# Table of Contents
[1 Introduction](https://stackoverflow.com/questions/51221730/markdown-link-to-header) \
&nbsp;&nbsp;&nbsp;[1.1 Not Specified vs Null]() \
[4 Endpoints]() \
&nbsp;&nbsp;&nbsp;[4.1 Required Endpoints]() \
&nbsp;&nbsp;&nbsp;[4.2 eth_call]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.1 Network Considerations]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.2 Interacting With Contracts]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.3 Testing Contracts]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.4 gas, gasPrice, maxFeePerGas, and maxPriorityFeePerGas]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.5 Account Balance]() \

[Appendix A]() 

-----
# 1 Introduction 

The Ethereum execution layer API is one of the key components of Ethereum. It acts as an intermediary between the users of Ethereum and the execution layer where the transactions are received and executed. It provides a way for users to send transactions, request data, and execute smart contracts. 
## 1.1 Purpose and Intended Audience

The purpose of this document is to act as a centralized source of information regarding the functional and non-functional requirements for Ethereum's execution layer API. This document is intended for development teams that are planning on implementing a version of the execution layer API. This document would also be beneficial to but is not intended for anyone interested in learning how the user interacts with Ethereum clients and at the most basic level. 

## 1.2 Scope
 
The Ethereum execution layer API provides the basis for all external interactions with the Ethereum blockchain. The interactions with the Ethereum network can be divided into four categories. Transferring ETH, deploy contracts, executing contracts, and administrative tasks. The API also provides endpoints that returns historical network and block data. 

## 1.3 Definitions and Terms
just listing them here for now not sure exactly what ones I need or don't.
I would rather have a long list that I trim than having too little
* ETH
* ERC token?
* Smart contracts
* user
* client
* EVM
* Account
* block
* block-chain

### 1.3.1 Not Specified vs Null

when the term not specified is used, it is describing the case where the parameter is not a part of the call vs when the term null is used it describes the case where the parameter is part of the call and has not been given a value

An example where `to` is not specified and `value` is null
```
{
	"jsonrpc": "2.0",
	"method": "eth_call",
	"params": [{
		"from": "0x3a5509015e0193adf435a761a6ce160f900034b5",
		"value": ""
}, "latest"],
	"id": 1
}
```
### 1.3. Default Block Parameter
There are a few endpoints that need an extra `defaultBlockParameter` to specify the block that the data is being requested from.
The `defaultBlockParameter` allows the following options to specify a block:
* Block Number
* Block Hash
* Block Tag
  * earliest: for the earliest/genesis block
  * latest: for the latest mined block
  * pending: for the pending state/transactions


## 1.3.2 Input Parameters
 Input parameters for functions will be denoted by using the inline code feature of markdown and will look like `this`
## 1.4 References
* [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
* [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
* [JSON Standard](https://www.json.org/json-en.html)
* [HTTP/2](https://http2.github.io/)
---

# 2 Overall Description

## 2.1 Product Perspective
This is an open/public api 
the JSON -RPC API is part of a bigger program.
The JSON-RPC API must interface with an ethereum execution client to send and and receive data to the Ethereum network
The users of the API will interact with the api through HTTP requests or through a web socket connection

## 2.2 Product Features 
Here is a list of standard endpoints for the Ethereum execution layer API
### Web3
* web3_clientVersion
* web3_sha3
### Net
* net_version
* net_peerCount
* net_listening
### Eth
* eth_protocolVersion
* eth_syncing
* eth_coinbase
* eth_mining
* eth_getWork
* eth_gasPrice
* eth_accounts
* eth_blockNumber
* eth_getBalance
* eth_getStorageAt
* eth_getTransactionCount
* eth_getBlockTransactionCountByHash
* eth_getBlockTransactionCountByNumber
* eth_getUncleCountByHash 
* eth_getUncleCountByNumber 
* eth_getCode
* eth_feeHistory
* eth_sign
* eth_signTransaction
* eth_sendTransaction
* eth_sendRawTransaction
* eth_call
* eth_estimateGas
* eth_getBlockByHash
* eth_getBlockByNumber
* eth_getTransactionByHash
* eth_getTransactionByBlockHashAndIndex
* eth_getTransactionByBlockNumberAndIndex
* eth_getTransactionReceipt
* eth_getUncleByBlockHashAndIndex 
* eth_getUncleByBlockNumberAndIndex 
* eth_newFilter
* eth_newBlockFilter
* eth_newPendingTransactionFilter
* eth_uninstallFilter
* eth_getFilterChanges
* eth_getFilterLogs
* eth_getLogs
* eth_hashrate
* eth_submitHashrate
* eth_submitWork
___
## 2.3 User Classes and Characteristics

* smart contract developers
* client operators
* p 


## 2.4 Operating Environment how, where, under what conditions the system would be used.
a version of the Execution layer API **MUST** be implemented with each Ethereum Execution Client.
This means that there can be multiple versions of the execution layer JSON-RPC API with different features.
This also means that for each Ethereum node running there **SHOULD** be an instance of the Execution layer API running with it to allow users to interact with it.


This is what makes this document so important. This will detail what minium features are needed to be considered a useable API implementation.

## 2.5 Design Implementations and constraints
As of writing this document the Execution layer API is currently using the JSON-RPC 2.0 standard. 
The execution layer API also supports interaction using both HTTP2.0 and WebSockets. 
## 2.6 Assumptions and dependencies

# 3 System Features
## web3_clientVersion

* [WC] web3_clientVersion **MUST** return a string containing information about the client version.
* [WC] web3_clientVersion **SHOULD** return client version in the following format "ClientName/ClientVersion-StableOrUnstableRelease-8charsOfCommitHash/CurrentOpperatingSystem-CurrentArchitecture/LanguageNameAndVersion" [Nethermind uses version number for language and adds the release date to the end of client version], [Ganache uses name only]
## web3_sha3
* [WS-1] web3_sha3 **MUST** return the Keccak256 hash of the given.
* [WS-2] web3_sha3 **MUST** return the Keccak256 hash of null when given "0x"
## net_version
* [NV-1] net_version **MUST** return a string containing the network id of the network the client is currently connected to.
## net_peerCount
* [NP-1] net_peerCount **MUST** return the number peer nodes that the client is currently connected to. 
## net_listening
* [NL-1] net_listening **MUST** return a boolean indicating whether the client is currently listening for network connections.
## eth_protocolVersion
* [EP-1] eth_protocolVersion **MUST** return the current Ethereum Wire Protocol (eth protocol) version the network is using.
## eth_syncing
* [ESY-1] eth_syncing **MUST** return the syncing status of the client to the network.
* [ESY-2] eth_syncing **MUST** return false when the client is not syncing or already synced to the network.
* [ESY-3] eth_syncing **MUST** return an object containing the following:
   * The current block being synced on the client.
   * The current highest block known by the client.
   * The known states, and the pulled states.
   * And the block number that the client started syncing from.
## eth_coinbase
* [ECB-1] eth_coinbase **MUST** return an Ethereum address that the reward for successfully mining a block is sent to.
* [ECB-2] eth_coinbase **MUST** error with code -32000 when the client does not have an address for the block reward to be sent to.
## eth_mining
* [EM-1] eth_mining **MUST** return true when the client is actively mining for block rewards, otherwise it **MUST** return false.
## eth_gasPrice
* [EGP-1] eth_gasPrice **MUST** return the current price per unit of gas in wei
## eth_accounts
* [EA-1] eth_accounts **MUST** return the public addresses for each Ethereum account that the client has the private key for.
## eth_blockNumber
* [EBN-1] eth_blockNumber **MUST** return the block number for the most recent block mined.
* [EBN-2] eth_blockNumber **MUST** return "0x0" when the client is not synced to the network.
## eth_getBalance
* [EGB-1] eth_getBalance **MUST** return the account balance of the `address` at the given `defaultBlockParameter`.
* [EGB-2] eth_getBalance **MUST** return "0x0" when the client is not synced to the network.
## eth_getStorageAt
* [EGS-1] eth_getStorageAt **MUST** return the data stored within the `storage slot` of the given `address` at the time of the requested `block`
* [EGS-2] eth_getStorageAt **MUST**  error with code -32000 when the `block` requested is not within the 128 most recent blocks and is considered historical data, or when the client does not have the current state of the `block` requested.
## eth_getTransactionCount
* [EGTC-1] eth_getTransactionCount **MUST** return the number of transactions that the account with the given `address` has made at the block requested by the `defaultBlockParameter`. 
* [EGTC-2] eth_getTransactionCount **MUST NOT** return the nonce of the given address. The nonce starts at 0x0 so the transaction count **MUST** be account nonce + 1.
* [EGTC-3] eth_getTransactionCount **MUST** error with code -32000 when using a block hash for the `defaultBlockParameter` that does not correspond to a block. 
* [EGTC-4] eth_getTransactionCount **MUST** error with code -32000 when using a block number for the `defaultBlockParameter` that is ahead of the chain.
* [EGTC-5] eth_getTransactionCount **MUST** error with code -32000 when using a block number or block hash for the `defaultBlockParameter` when syncing to the network.
* [EGTC-5] eth_getTransactionCount **MUST** error with code -32000 when the client cannot pull or recreate the state required when using a block number or block hash for the `defaultBlockParameter` as a result of the chosen sync type when synced to the network. 
* [EGTC] eth_getTransactionCount **MUST** use the latest synced block when using block tag "latest" for the `defaultBlockParameter` when syncing to the network.
* [EGTC] eth_getTransactionCount **MUST** must return the actual number of transactions made by the `address` while syncing to the network when available, otherwise it **MUST** return 0x0.
* What happens when you are using pending while syncing 0x0 not sure what block its using
* Need to test block number and block hash return value for when sync is almost finished.
## eth_getBlockTransactionCountByHash
* [EGTCH-1] eth_getBlockTransactionCountByHash **MUST** return the number of transactions within the block with the given `block hash`.
* [EGTCH-2] eth_getBlockTransactionCountByHash **MUST** return null when the `block hash` does not correspond to a block.
* [EGTCH-3] eth_getBlockTransactionCountByHash **MUST** return null when the client has not finished syncing to the network.
## eth_getBlockTransactionCountByNumber
* [EGTCN-1] eth_getBlockTransactionCountByNumber **MUST** return the number of transactions within the block with the given `block number`.
* [EGTCN-2] eth_getBlockTransactionCountByNumber **MUST** return null when the `block number` does not correspond to a block.
* [EGTCN-3] eth_getBlockTransactionCountByNumber **MUST** return null when the client has not finished syncing to the network.
## eth_getUncleCountByHash
* [EGUCH-1] eth_getUncleCountByHash **MUST** return number of uncle blocks that the block corresponding to the given `block hash` has.
* [EGUCH-2] eth_getUncleCountByHash **MUST** return null when the `block hash` does not correspond to a mined block.
* [EGUCH-3] eth_getUncleCountByHash **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
## eth_getUncleCountByNumber
* [EGUCN-1] eth_getUncleCountByNumber **MUST** return number of uncle blocks that the block corresponding to the given `block number` or `block tag` has.
* [EGUCN-2] eth_getUncleCountByNumber **MUST** return null when the `block number` does not correspond to a mined block.
* [EGUCN-3] eth_getUncleCountByNumber **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
* [EGUCN-4] eth_getUncleCountByNumber **MUST** used the latest known block when using the "latest" tag while syncing. 
## eth_getUncleByBlockHashAndIndex 
* [EGUHI-1] eth_getUncleCountByHashAndIndex **MUST** return the uncle block information at the `Uncle index` of the block corresponding to the given `block hash`.
* [EGUHI-2] eth_getUncleCountByHashAndIndex **MUST** return null when the `block hash` does not correspond to a mined block.
* [EGUHI-3] eth_getUncleCountByHashAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUHI-4] eth_getUncleCountByHashAndIndex **MUST** return null when the requested information is not available due to the client is syncing to the network.
## eth_getUncleByBlockNumberAndIndex 
* [EGUNI-1] eth_getUncleByBlockNumberAndIndex **MUST** return the uncle block information at the `Uncle index` of the block corresponding to the given `block number` or `block tag`.
* [EGUNI-2] eth_getUncleByBlockNumberAndIndex **MUST** return null when the `block number` does not correspond to a mined block. [I tried 3 different public APIs all running geth and got 3 different results, one error -3200 "Geth/v1.10.6-stable-576681f2/linux-amd64/go1.15.2" LinkPool, one null infura, and one with literally no response obj "Geth/v1.10.12-stable-6c4dc6c3/linux-amd64/go1.17.2" https://api.mycryptoapi.com/eth]
* [EGUNI-3] eth_getUncleByBlockNumberAndIndex **MUST** return null when the client does not have requested information due to the client syncing to the network. 
* [EGUNI-4] eth_getUncleByBlockNumberAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUNI-5] eth_getUncleByBlockNumberAndIndex **MUST** used the latest known block when using the "latest" tag while syncing.
## eth_getCode
* [EGC] eth_getCode **MUST** return the deployed smart contract code at the given `address` and `block`.
*  [EGC] eth_getCode **MUST**  error with code -32002 when the `block` requested is not within the 128 most recent blocks and is considered historical data.
*  ^What about syncing?
## eth_feeHistory
* [EFH] eth_feeHistory **MUST** take the `blockCount`, `highestBlock`, and an array containing the desired `rewardPercentiles` as input parameters.
* [EFH] eth_feeHistory **MUST** return following information for number of blocks specified by the `blockCount` parameter stopping at the `highestBlock` parameter.
  * An array containing the base fee per gas for each block.
  * An array containing the ratio of the gas used by each block.
  * An array containing arrays with the requested `rewardPercentiles` for each block.
  * The oldest block used for the the request.
* [EFH] eth_feeHistory **MUST** ues the information of available blocks when the range requested by the `blockCount` parameter is not available.
* returns 1 more result than requested assuming this is a looping error
* also allows repeats in the reward percentile array
## eth_sign
* [ESN-1] eth_sign **MUST** return the ethereum specific signature detailed in [EIP-191](https://eips.ethereum.org/EIPS/eip-191) for the given unlocked `address` and `message`.
* [ESN-2] eth_sign **MUST** error with code -32000 when when the account corresponding to the `address` is not unlocked.
* [ESN-3] eth_sign **MUST** error with code -32000 when when the account corresponding to the `address` is not owned by the client.
## eth_signTransaction
* [ESNT-1] eth_signTransaction **MUST** return both the signed encoded and signed unencoded format of the `transaction` given.
* [ESNT-2] eth_signTransaction **MUST** return encoded legacy transactions in the RLP format.
* [ESNT-3] eth_signTransaction **MUST** return encoded [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) transactions as the transaction `type` concatenated with the transaction type's defined encoding method.
* [ESNT-4] eth_signTransaction **MUST** error with code -32000 when the `transaction` does not contain a `from` address.
* [ESNT-5] eth_signTransaction **MUST** error with code -32000 when the `from` address is not unlocked.
* [ESNT-6] eth_signTransaction **MUST** error with code -32000 when the `from` address is not owned by the client
* [ESNT-7] eth_signTransaction **MUST** error with code -32000 when the `gas` is not specified.
* [ESNT-8] eth_signTransaction **MUST** use 0x0 for `gas` when parameter is null.
* [ESNT-9] eth_signTransaction **MUST** error with code -32000 when the `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas` are not specified.
* [ESNT-10] eth_signTransaction **MUST** error with code -32000 when `gasPrice` is used with `maxFeePerGas` and/or `maxPriorityFeePerGas`.
* [ESNT-11] eth_signTransaction **MUST** use 0x0 for `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas` when the parameter is null. 
* [ESNT-12] eth_signTransaction **MUST** use null for `gasPrice` when using an [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) transaction. 
* [ESNT-13] eth_signTransaction **MUST** error with code -32000 when the `maxPriorityFeePerGas` has a larger value than the `maxFeePerGas`.
* [ESNT-14] eth_signTransaction **MUST** error with code -32000 when the `nonce` is not specified.
* [ESNT-15] eth_signTransaction **MUST** use 0x0 for `nonce` when parameter is null.
* * not sure how I should go about testing accessList
  * allows any fake key value pair to be added into the transaction, does not get turned int the signed tx though
* allows use of data or input as params
* error -32000 when `data` and `input` are both used and do not match
* allows `data` and `input` to be used if equal
  * gasprice on type 2 converts to legacy tx
  * * MFPG and MPFPG on legacy: converts to type 2
## eth_sendTransaction
* [EST] eth_sendTransaction **MUST** return the transaction hash of the `transaction` when the transaction is successfully sent to the network.
* [EST] eth_sendTransaction **MUST** error with code -32000 when the `from` address does not have enough Ether to pay for the transaction.
* [EST] eth_sendTransaction **MUST** error with code -32000 when nonce is too low.
* [EST] eth_sendTransaction **MUST** allow `to` address to be the same as `from` address
* [EST] eth_sendTransaction **MUST** allow user to enter extra key value pairs within the `transaction` object that are not used by the selected transaction.
* [EST] eth_sendTransaction **MUST NOT** add any extra key value pairs sent by the user to the signed transaction sent to the network.
* [EST] eth_sendTransaction **MUST** allow user to use duplicate parameters in the `transaction` object and **MUST** use the last of the duplicate parameters.
* [EST] eth_sendTransaction **MUST** allow user to use `value` parameter when deploying a contract.
* [EST] eth_sendTransaction **MUST NOT** send `value` to created contract when used during contract deployment
* [EST] eth_sendTransaction **MUST NOT** cost any extra when `value` is added during contract deployment.
* [EST] eth_sendTransaction **MUST** allow user to use `data` or `input` for contract deployment or contract interactions.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `data` and `input` are both used and are not equal.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `gas` is not enough to compleat the transaction.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `gas` exceeds block gas limit.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `gasPrice` causes transaction to exceed the transaction fee cap.
* [EST] eth_sendTransaction **MUST** allow users to send transaction where `gasPrice` is below network average, and **MAY** never be executed.
* [EST] eth_sendTransaction **MUST** allow users to send transaction where `maxFeePerGas` is below network average, and **MAY** never be executed.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `maxFeePerGas` causes transaction to exceed the transaction fee cap.
* [EST] eth_sendTransaction **MUST** error with code -32000 when `maxPriorityFeePerGas` is greater than `maxFeePerGas`.
* [EST] eth_sendTransaction **MUST** allow users to send transaction where `maxPriorityFeePerGas` is below network average, and **MAY** never be executed.
* [EST] eth_sendTransaction **MUST** use legacy transaction anytime `gasPrice` is used.
* [EST] eth_sendTransaction **MUST** use type 2 transaction anytime `maxFeePerGas` or `maxPriorityFeePerGas` is used.
* [EST] eth_sendTransaction **MUST** use type 2 transaction when `accessList` is used without `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas`.
* [EST] eth_sendTransaction **MUST** use type 2 transaction when `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas` are not specified.
* [EST] eth_sendTransaction **MUST** allow `data` to be used when `to` address is not a smart contract.
* [EST] eth_sendTransaction **MUST** calculate `data` into the gas estimate when `to` address is not a smart contract
* [EST] eth_sendTransaction **MUST** allow a transaction that contains no `value`, and **MUST** use 0x0 for `value`.
* [EST] eth_sendTransaction **MUST** error with code -32000 when deploying contract with no `data`/`input`.
* [EST] eth_sendTransaction **MUST** error with code -32000 when the user did not raise the `maxFeePerGas` enough when trying to replace a pending transaction.
* [EST] eth_sendTransaction **MUST NOT** replace pending transactions when sending transactions without specifying the `nonce`.
  
* [EST] eth_sendTransaction **MUST** use ___ for `maxPriorityFeePerGas` when only `maxFeePerGas` is specified.
* [EST] eth_sendTransaction **MUST** use `maxPriorityFeePerGas` + e for `maxFeePerGas` when only `maxPriorityFeePerGas` is specified.
  * Need to test these more, just tried on geth --dev and got different results.
* what happnes when MFPG and/or MPFPG is missing?: works for both, sets MPFPG to eth_gasPrice - 7? Sets MFPG to MPFPG + e?
  
* when submitting tx ahead of nonce then sending correct tx that also makes the second tx not possible because of insufficient funds
  * Removes second tx from pool without having to pay extra to cancel it.

I might have got it to use incorrect nonce, but not sure how. same behavior gave different response. I think I tried sending tx with 2 GP    
* not sure how I should go about testing accessList
## eth_sendRawTransaction
* [ESRT] eth_sendRawTransaction **MUST** error with code -32000 when the `from` address does not have enough Ether to pay for the transaction.
* [ESRT] eth_sendRawTransaction **MUST** error with code -32000 when nonce is too low.

## eth_estimateGas
* [EEG-1] eth_estimateGas **MUST** return the estimated amount of gas the given `transaction` will take to execute.
* [EEG-2] eth_estimateGas **MUST** check the `from` account balance when `value` is used to see if the account has enough Ether to execute the given `transaction`.
* [EEG-3] eth_estimateGas **MUST** error with code -32000 when the `from` address does not contain enough Ether to execute the given `transaction`.
* [EEG-4] eth_estimateGas **MUST** use 0x0000000000000000000000000000000000000000 for `from` when it is not specified.
* [EEG-5] eth_estimateGas **MUST** error with code -32000 when invalid opcodes are used while estimating contract deployment.
* Got execution reverted with -32000 when estimating contract creation?
  *  codes like 0x25, or using codes that require other values, cause stack underflow.
  *  need to test this more to figure out scope of what is happening.
## eth_getBlockByHash
* [EGBH-1] eth_getBlockByHash **MUST** return the block information for the block with the given `block hash`.
* [EGBH-2] eth_getBlockByHash **MUST** return null when the given `block hash` does not correspond to a block.
* [EGBH-3] eth_getBlockByHash **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBH-4] eth_getBlockByHash **MUST** return null when the block associated with the given `block hash` is not available due to the client is syncing to the network.
* [EGBH-5] eth_getBlockByHash **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getBlockByNumber
* [EGBN-1] eth_getBlockByNumber **MUST** return the block information for the block with the given `block number` or `block tag`.
* [EGBN-2] eth_getBlockByNumber **MUST** return null when the given `block number` does not correspond to a block. 
* [EGBN-3] eth_getBlockByNumber **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBN-4] eth_getBlockByHash **MUST** return null when the block associated with the given `block hash` is not available due to the client is syncing to the network.
* [EGBN-5] eth_getBlockByHash **MUST** return the block information for the latest synced block when using `block tag` "latest" while the client is syncing to the network.
* [EGBN-6] eth_getBlockByNumber **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getTransactionByHash
* [EGTH-1] eth_getTransactionByHash **MUST** return the transaction object for the transaction with the given `transaction hash`.
* [EGTH-2] eth_getTransactionByHash **MUST** return null when the given `transaction hash` does not correspond to a transaction.
* [EGTH-3] eth_getTransactionByHash **MUST** return null when the requested transaction is not available due to the client is syncing to the network.
* [EGTH-4] eth_getTransactionByHash **MUST** error with code -32000 when the transaction information is not available due to state pruning.
## eth_getTransactionByBlockHashAndIndex
* [EGTHI-1] eth_getTransactionByBlockHashAndIndex **MUST** return the transaction object with the given `block hash` and `transaction index` within the block.
* [EGTHI-2] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `block hash` does not does correspond to a block.
* [EGTHI-3] eth_getTransactionByBlockHashAndIndex **MUST** return null when the client does not have the requested information while syncing to the network.
* [EGTHI-4] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
* [EGTHI-5] eth_getTransactionByBlockHashAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.

## eth_getTransactionByBlockNumberAndIndex
* [EGTNI-1] eth_getTransactionByBlockNumberAndIndex **MUST** return the transaction object with the given `block number` or `block tag` and `transaction index` within the block.
* [EGTNI-2] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `block number` does not correspond to a block.
* [EGTNI-3] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the requested information is not available due to the client is syncing to the network.
* [ESTNI-4] eth_getTransactionByBlockNumberAndIndex **MUST** use the latest synced block when using `block tag` "latest" while syncing to the network.
* [EGTNI-5] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
* [EGTNI-6] eth_getTransactionByBlockNumberAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionReceipt
* [EGTR-1] eth_getTransactionReceipt **MUST** return the transaction receipt with the given `transaction hash`.
* [EGTR-2] eth_getTransactionReceipt **MUST** return null when the given `transaction hash` does not correspond to a transaction.
* [EGTR-3] eth_getTransactionReceipt **MUST** return null when the transaction is still pending.
* [EGTR-4] eth_getTransactionReceipt **MUST** return null when the requested information is not available due to the client is syncing to the network.
## eth_newFilter
* [ENF]
## eth_newBlockFilter
* [ENBF] eth_newBlockFilter **MUST** create a new filter on the node that tracks when new blocks are received.
* [ENBF] eth_newBlockFilter **MUST** return the filter id 
## eth_newPendingTransactionFilter
* [ENPTF] eth_newPendingTransactionFilter **MUST** create a new filter on the node that tracks when new pending transaction are received.
* [ENPTF] eth_newPendingTransactionFilter **MUST** return the filter id.
## eth_uninstallFilter
* [EUF] eth_uninstallFilter **MUST** uninstall the filter with the given `filter id`.
* [EUF] eth_uninstallFilter **MUST** return true when a filter has been successfully uninstalled, otherwise it **MUST** return false.
## eth_getFilterChanges
* [EGFC] eth_getFilterChanges **MUST** work with all filter types.
* [EGFC] If the `filter id` corresponds to a newBlockFilter eth_getFilterChanges **MUST** return an array containing the block hashes for each new block received since the filter was called last or first created.
* [EGFC] If the `filter id` corresponds to a newPendingTransactionFilter eth_getFilterChanges **MUST** return an array containing the transaction hashes for each pending transaction received since the filter was last called or first created.
* [EGFC] If the `filter id` corresponds to a newFilter eth_getFilterChanges **MUST** return an array containing the
## eth_getFilterLogs
* [EGFL]
## eth_getLogs
* [EGL]

## 4.2 eth_call

* [EC] eth_call **MUST** create a transaction and execute it on node that received the transaction.
* [EC] eth_call **MUST NOT** mine any transaction on the blockchain.
* [EC] eth_call **MUST** require the `defaultBlockParameter` for all network calls.
* [EC] eth_call **MUST** use the block requested by the `defaultBlockParameter` when interacting with contracts.
* [EC] eth_call **MUST** error with code -32000 when the `defaultBlockParameter` is ahead of the chain.
* [EC] eth_call **MUST** use the latest block when the `defaultBlockParameter` parameter is not specified.
* [EC] eth_call **MUST** error with code -32000 if `defaultBlockParameter` is null
* [EC] eth_call **MUST** error with code -32000 when the requested state does not exist due to state pruning
* [EC] eth_call **MUST** use a default address for when the `from` parameter is null or not specified [geth uses 0x0...0] [Nethermind uses 0xf...fe] 
* [EC] eth_call **SHOULD NOT** be allow to be called from an address where CODEHASH != EMPTYCODEHASH. [EIP-3607](https://eips.ethereum.org/EIPS/eip-3607)
* [EC] eth_call **MUST** check `from` account balance has sufficient funds to "pay" for the transaction
* [EC] eth_call **MUST** error with code -32000 account has insufficient funds 
* [EC] eth_call **MUST NOT** calculate cost of deploying contracts when checking balance   


  work
* [EC] eth_call **MUST** return the result of each call
* [EC] eth_call **MUST** return an empty transaction receipt `0x0` when no transaction is executed 
* [EC] eth_call **MUST** error with code -32000 when there is an error creating the contract <Not 100% right need to look into it more, does might be error caused in VM not contract>
* [EC] **MUST NOT** allow `gas` to be 0 
  * Why, what does that mean?
* [EC] eth_call **MUST** work with all transaction types
* [EC] eth_call **MUST** work with `gasPrice` parameter
* [EC] eth_call **MUST** work with  `maxFeePerGas` and `maxPriorityFeePerGas` parameters  
* [EC] when `maxFeePerGas` and `maxPriorityFeePerGas` are used the byte code for GASPRICE **MUST** return ?????  
* [EC] eth_call **MUST** calculate `maxFeePerGas` or `maxPriorityFeePerGas` when only one is specified.

Syncing?
need to test this more
## eth_hashrate
* [EH-1] eth_hashrate **MUST** return the hashes per second that the client is using to mine blocks.
* [EH-2] eth_hashrate **MUST** return 0x0 when the client does not have mining enabled.
## eth_submitHashrate
* [ESH] eth_submitHashrate **MUST** return true when the client successfully submits a `hashrate` and an `id`.  Where is it submitted?
* [ESH] eth_submitHashrate **MUST** return true when the client submits their hashrate while not mining.
* [ESH] eth_submitHashrate **MUST** return true when the client submit their hashrate while syncing to the network.
* [ESH] eth_submitHashrate **MUST** return use 0x0 when `hashrate` is null.
* does not effect the result of eth_hashrate, is this because I am not mining? 
* submitting hashrate while mining 
  * high
  * low
  * 0
  * null
* Try ids other clients that are mining are using.
  * I assume this errors

## eth_getWork
* [EGW] eth_getWork **MUST** error with code -32000 when mining is not enabled.
* 
## eth_submitWork
* [ESW]
# Errors
Error codes between-32768 and -32000 are reserved for JSON-RPC errors, where -32000 to -32099 are for Execution layer API errors
This table has been taken from the initial version of the JSON-RPC API spec that was never finalized. 
I was told this is what **SHOULD** have ben implemented across each client. Will revise it with the actual codes once I test them all
|Code|Message|Meaning|Category|
|-|-|-|-|
|-32700|Parse error|Invalid JSON|standard|
|-32600|Invalid request|JSON is not a valid request object|standard|
|-32601|Method not found|Method does not exist|standard|
|-32602|Invalid params|Invalid method parameters|standard|
|-32603|Internal error|Internal JSON-RPC error|standard|
|-32000|Invalid input|Missing or invalid parameters|non-standard|
|-32001|Resource not found|Requested resource not found|non-standard|
|-32002|Resource unavailable|Requested resource not available|non-standard|
|-32003|Transaction rejected|Transaction creation failed|non-standard|
|-32004|Method not supported|Method is not implemented|non-standard| [looks like -32601 catches these errors]
|-32005|Limit exceeded|Request exceeds defined limit|non-standard|
|-32006|JSON-RPC version not supported|Version of JSON-RPC protocol is not supported|non-standard|

[table source](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md)
# Appendix


## Questions

* I think I should add parameters for endpoint and label which ones are required and which ones are not. Not regex schema
  * I am assuming this is going to have to eventually become an EIP once it is finalized and wouldn't it look bad if we don't have all necessary information on this document?
  * I am thinking something like a parameter table with type and optional or not
  * maybe a return table with type
  * still keeping the spec we have
* I found more endpoints that are shared amongst all clients. What is the scope of this doc?
  * Is it just eth, web3, and net endpoints?
  * Or all shared endpoints like txpool, admin, personal, etc?
* Its not plagiarism if I copied the description for the block tags word for word from the eth wiki?
  * I assume not I just want to check.
* Considering re-writing the mentions of state pruning to look more like eth_getTransactionCount. 
* Would you like me to send a brief synopsis when I am done for the day?
* when I get around to testing other clients, can I create an inconsistencies doc?
  * I have a feeling that this doc is going to get messy.
* How long would you like our call on Friday to be?
  * 30?
  * 45?
  * 60?
* estimateGas
* sign
* SignTx
* SendRawTs
* SendTx
* TransactionCount
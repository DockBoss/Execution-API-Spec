# WIP 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.5.9
## Working Draft: Updated November 11th 
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

* [WS] web3_sha3 **MUST** return the Keccak256 hash of the given.
* [WS] web3_sha3 **MUST** return the Keccak256 hash of null when given "0x"
## net_version
* [NV] net_version **MUST** return a string containing the network id of the network the client is currently connected to.
## net_peerCount
* [NP] net_peerCount **MUST** return the number peer nodes that the client is currently connected to. 
## net_listening
* [NL] net_listening **MUST** return a boolean indicating whether the client is currently listening for network connections.
## eth_protocolVersion
* [EP] eth_protocolVersion **MUST** return the current Ethereum Wire Protocol (eth protocol) version the network is using.
## eth_syncing
* [ESY] eth_syncing **MUST** return the syncing status of the client to the network.
*  [ESY] eth_syncing **MUST** return false when the client is not syncing or already synced to the network.
*  [ESY] eth_syncing **MUST** return an object containing the following: the current block being synced on the client, the current highest block known by the client, the known states, and the pulled states, and the block number that the client started syncing from.
## eth_coinbase
* [ECB] eth_coinbase **MUST** return an Ethereum address that the reward for successfully mining a block is sent to.
* [ECB] eth_coinbase **MUST** error with code -32000 when the client does not have an address for the block reward to be sent to or when the client being interacted with does not support mining.
## eth_mining
* [EM] eth_mining **MUST** return true when the client is actively mining for block rewards, otherwise it **MUST** return false.
## eth_gasPrice
* [EGP] eth_gasPrice **MUST** return the current price per unit of gas in wei
## eth_accounts
* [EA] eth_accounts **MUST** return the public addresses for each Ethereum account that the client has the private key for.
## eth_blockNumber
* [EBN] eth_blockNumber **MUST** return the block number for the most recent block mined.
* [EBN] eth_blockNumber **MUST** return "0x0" when the client is not synced to the network.
## eth_getBalance
* [EGB] eth_getBalance **MUST** return the account balance of the `address` at the given `defaultBlockParameter`.
* [EGB] eth_getBalance **MUST** return "0x0" when the client is not synced to the network
## eth_getStorageAt
* [EGS] eth_getStorageAt **MUST** return the data stored within the `storage slot` of the given `address` at the time of the requested `block`
* [EGS] eth_getStorageAt **MUST**  error with code -32000 when the `block` requested is not within the 128 most recent blocks and is considered historical data, or when the client does not have the current state of the `block` requested.
## eth_getTransactionCount
* [EGTC] eth_getTransactionCount **MUST** return the nonce of the account with the given `address` at the `block` requested. 
## eth_getBlockTransactionCountByHash
* [EGTCH] eth_getBlockTransactionCountByHash **MUST** return the number of transactions within the block with the given `block hash`.
* [EGTCH] eth_getBlockTransactionCountByHash **MUST** return null when the `block hash` does not correspond to a block.
* [EGTCH] eth_getBlockTransactionCountByHash **MUST** return null when the client has not finished syncing to the network.
## eth_getBlockTransactionCountByNumber
* [EGTCN] eth_getBlockTransactionCountByNumber **MUST** return the number of transactions within the block with the given `block number`.
* [EGTCN] eth_getBlockTransactionCountByNumber **MUST** return null when the `block number` does not correspond to a block.
* [EGTCN] eth_getBlockTransactionCountByNumber **MUST** return null when the client has not finished syncing to the network.
## eth_getUncleCountByHash
* [EGUCH] eth_getUncleCountByHash **MUST** return number of uncle blocks that the block corresponding to the given `block hash` has.
* [EGUCH] eth_getUncleCountByHash **MUST** return null when the `block hash` does not correspond to a mined block.
* [EGUCH] eth_getUncleCountByHash **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
## eth_getUncleCountByNumber
* [EGUCN] eth_getUncleCountByNumber **MUST** return number of uncle blocks that the block corresponding to the given `block number` or `block tag` has.
* [EGUCN] eth_getUncleCountByNumber **MUST** return null when the `block number` does not correspond to a mined block.
* [EGUCN] eth_getUncleCountByNumber **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
* [EGUCN] eth_getUncleCountByNumber **MUST** used the latest known block when using the "latest" tag while syncing. 
## eth_getUncleByBlockHashAndIndex 
* [EGUHI] eth_getUncleCountByHashAndIndex **MUST** return the uncle block information at the `Uncle index` of the block corresponding to the given `block hash`.
* [EGUHI] eth_getUncleCountByHashAndIndex **MUST** return null when the `block hash` does not correspond to a mined block.
* [EGUHI] eth_getUncleCountByHashAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUHI] eth_getUncleCountByHashAndIndex **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
## eth_getUncleByBlockNumberAndIndex 
* [EGUNI] eth_getUncleByBlockNumberAndIndex **MUST** return the uncle block information at the `Uncle index` of the block corresponding to the given `block number` or `block tag`.
* [EGUNI] eth_getUncleByBlockNumberAndIndex **MUST** return null when the `block number` does not correspond to a mined block. [I tried 3 different public APIs all running geth and got 3 different results, one error -3200 "Geth/v1.10.6-stable-576681f2/linux-amd64/go1.15.2" LinkPool, one null infura, and one with literally no response obj "Geth/v1.10.12-stable-6c4dc6c3/linux-amd64/go1.17.2" https://api.mycryptoapi.com/eth]
* [EGUNI] eth_getUncleByBlockNumberAndIndex **MUST** return null when the client does not have the state information about the block because it is not synced to the network or currently syncing.
* [EGUNI] eth_getUncleByBlockNumberAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUNI] eth_getUncleByBlockNumberAndIndex **MUST** used the latest known block when using the "latest" tag while syncing.
## eth_getCode
* [EGC] eth_getCode **MUST** return the deployed smart contract code at the given `address` and `block`.
*  [EGC] eth_getCode **MUST**  error with code -32002 when the `block` requested is not within the 128 most recent blocks and is considered historical data.
## eth_feeHistory
* [EFH] eth_feeHistory **MUST** return the 
* returns 1 more result than requested assuming this is a looping error
* also allows repeats in the reward percentile array
## eth_sign
* [ESN]
## eth_signTransaction
* [ESNT]
## eth_sendTransaction
* [EST]
## eth_sendRawTransaction
* [ESRT]
## eth_estimateGas
* [EEG]
## eth_getBlockByHash
* [EGBH] eth_getBlockByHash **MUST** return the block information for the block with the given `block hash`.
* [EGBH] eth_getBlockByHash **MUST** return null when the given `block hash` does not correspond to a block.
* [EGBH] eth_getBlockByHash **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBH] eth_getBlockByHash **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getBlockByNumber
* [EGBN] eth_getBlockByNumber **MUST** return the block information for the block with the given `block number`.
* [EGBN] eth_getBlockByNumber **MUST** return null when the given `block number` does not correspond to a block. 
* [EGBN] eth_getBlockByNumber **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBN] eth_getBlockByNumber **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getTransactionByHash
* [EGTH] eth_getTransactionByHash **MUST** return the transaction object for the transaction with the given `transaction hash`.
* [EGTH] eth_getTransactionByHash **MUST** return null when the given `transaction hash` does not correspond to a transaction. 
* [EGTH] eth_getTransactionByHash **MUST** error with code -32000 when the transaction information is not available due to state pruning.
## eth_getTransactionByBlockHashAndIndex
* [EGTHI] eth_getTransactionByBlockHashAndIndex **MUST** return the transaction object with the given `block hash` and `transaction index` within the block.
* [EGTHI] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `block hash` does not does correspond to a block.
* [EGTHI] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
* [EGTHI] eth_getTransactionByBlockHashAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionByBlockNumberAndIndex
* [EGTNI] eth_getTransactionByBlockNumberAndIndex **MUST** return the transaction object with the given `block number` and `transaction index` within the block.
* [EGTNI] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `block number` does not correspond to a block.
* [EGTNI] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
* [EGTNI] eth_getTransactionByBlockNumberAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionReceipt
* [EGTR] eth_getTransactionReceipt **MUST** return the transaction object with the given `transaction hash`.
* [EGTR] eth_getTransactionReceipt **MUST** return null when the given `transaction hash` does not correspond to a transaction.
* [EGTR] eth_getTransactionReceipt **MUST** return null when the client is not fully synced to the network. 

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
## eth_getWork
* [EGW]

## 4.2 eth_call

* [EC] eth_call **MUST** create a transaction and execute it on node that received the transaction.
* [EC] eth_call **MUST NOT** mine any transaction on the blockchain.
  
  work
* [EC] eth_call **MUST** use the `defaultBlockParameter` to know which block the code is being pulled from.
* [EC] eth_call **MUST** error with code -32000 when the `defaultBlockParameter` is ahead of the chain
* [EC] eth_call **MUST** use the latest block when the `defaultBlockParameter` parameter is not specified 
* [EC] eth_call **MUST** error with code -32000 if `defaultBlockParameter` is null
  good
* [EC] State pruning **MAY** be an option on clients, eth_call **MUST** error with code -32000 when the requested state does not exist due to state pruning
* [EC] eth_call **MUST** use a default address for when the `from` parameter is null or not specified [geth uses 0x0...0] [Nethermind uses 0xf...fe] 
* [EC] eth_call **SHOULD NOT** be allow to be called from an address where CODEHASH != EMPTYCODEHASH. [EIP-3607](https://eips.ethereum.org/EIPS/eip-3607)
  work
* [EC] eth_call **MUST** return the result of each call
* [EC] eth_call **MUST** return an empty transaction receipt `0x0` when no transaction is executed 
* [EC] eth_call **MUST** error with code -32000 when there is an error creating the contract <Not 100% right need to look into it more, does might be error caused in VM not contract>
* [EC] **MUST NOT** allow `gas` to be 0 
  
* [EC] eth_call **MUST** work with all transaction types
* [EC] eth_call **MUST** work with `gasPrice` parameter
* [EC] eth_call **MUST** work with  `maxFeePerGas` and `maxPriorityFeePerGas` parameters  
* [EC] when `maxFeePerGas` and `maxPriorityFeePerGas` are used the byte code for GASPRICE **MUST** return ?????  
* [EC] eth_call **MUST** calculate `maxFeePerGas` or `maxPriorityFeePerGas` when only one is specified.
  good
* [EC] eth_call **MUST** check `from` account balance has sufficient funds to "pay" for the transaction
* [EC] eth_call **MUST** error with code -32000 account has insufficient funds 
* [EC] eth_call **MUST NOT** calculate cost of deploying contracts when checking balance 

## eth_hashrate
* [EH] eth_hashrate **MUST** return the hashes per second that the client is using to mine blocks.
* [EH] eth_hashrate **MUST** return 0x0 when the client does not have mining enabled.
## eth_submitHashrate
* [ESH]
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

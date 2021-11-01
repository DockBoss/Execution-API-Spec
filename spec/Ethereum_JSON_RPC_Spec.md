# WIP 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.5.1
## Working Draft: Updated October 31 
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

The Ethereum execution layer API is one of the key components of Ethereum. It creates a simple standard way to interact with the Ethereum network.
It enables the development of many clients 
## 1.1 Purpose and Intended Audience

The purpose of this document is to act as a centralized source of information regarding the functional and non-functional requirements for Ethereum's execution layer JSON-RPC API. This document is intended for development teams that are planning on implementing a version of the execution layer JSON-RPC API. This document would also be beneficial to but is not intended for anyone interested in learning how the user interacts with Ethereum clients and at the most basic level. 

## 1.2 Scope
 
The Ethereum execution layer JSON-RPC API provides the basis for all external interactions with the Ethereum blockchain. The interactions with the Ethereum network can be divided into four categories. Transferring ETH, deploy contracts, executing contracts, and administrative tasks. The API also provides endpoints that returns historical network and block data. 

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
## 1.3.2 Input Parameters IDk WHERE THIS should go
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

## API Types
There are currently three different types of Execution Layer APIs.
|API Type| Description |
|---|---|
|Read-only| Does not support any calls that require a fee|
|Standard | Supports all standard endpoints needed for basic interactions|
|Standard+| Supports all standard endpoints with the addition of custom endpoint/modules|
## 2.2 Product Features 
For the Execution Layer API to meet the Read-only definition it **MUST** contain the following endpoints:
### Web3
* web3_clientVersion
* web3_sha3

### Net
* net_version
* net_peerCount
* net_listening
  
### Eth
* eth_protocolVersion
* eth_syncing // I don't think it is necessary to provide this 
* eth_gasPrice
* eth_blockNumber
* eth_getBalance
* eth_getStorageAt
* eth_getTransactionCount
* eth_getBlockTransactionCountByHash
* eth_getBlockTransactionCountByNumber
* eth_getUncleCountByHash //might not exist after The Merge
* eth_getUncleCountByNumber //might not exist after The Merge
* eth_getCode
* eth_feeHistory
* eth_call
* eth_estimateGas
* eth_getBlockByHash
* eth_getBlockByNumber
* eth_getTransactionByHash
* eth_getTransactionByBlockHashAndIndex
* eth_getTransactionByBlockNumberAndIndex
* eth_getTransactionReceipt
* eth_getUncleByBlockHashAndIndex  //might not exist after The Merge
* eth_getUncleByBlockNumberAndIndex //might not exist after The Merge
* eth_newFilter
* eth_newBlockFilter
* eth_newPendingTransactionFilter  //maybe not have this one? I am using Infura as the Read-only template
* eth_uninstallFilter
* eth_getFilterChanges
* eth_getFilterLogs
* eth_getLogs
___
For the Execution Layer API to meet the Standard definition it **MUST** contain the following endpoints:
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
* eth_mining ??
* eth_gasPrice
* eth_accounts
* eth_blockNumber
* eth_getBalance
* eth_getStorageAt
* eth_getTransactionCount
* eth_getBlockTransactionCountByHash
* eth_getBlockTransactionCountByNumber
* eth_getUncleCountByHash //might not exist after The Merge
* eth_getUncleCountByNumber //might not exist after The Merge
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
* eth_getUncleByBlockHashAndIndex //might not exist after The Merge
* eth_getUncleByBlockNumberAndIndex //might not exist after The Merge
* eth_newFilter
* eth_newBlockFilter
* eth_newPendingTransactionFilter
* eth_uninstallFilter
* eth_getFilterChanges
* eth_getFilterLogs
* eth_getLogs
___
## 2.3 User Classes and Characteristics

* DAPP developers
* Everyday people interested in owning Eth, ERC-20 tokens, and ERC-721 tokens
* Ethereum node 

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

* [] web3_clientVersion **MUST** return a string containing information about the client version.
  * [] web3_clientVersion **SHOULD** return client version in the following format "ClientName/ClientVesrion/CurrentOpperatingSystem/LanguageUsed"
## web3_sha3

* [] web3_sha3 **MUST** return the Keccak256 hash of the given hex encoded string.
  * [] web3_sha3 **MUST** error with code -32000 when the given string is not hex encoded. 
  * [] web3_sha3 **MUST** use null when given "0x"
  
## net_version
  * [] net_version **MUST** return a string describing which network the client is currently connected to.
    * [] net_version **SHOULD** return the numeric Id of the network.
    * [] net_version **MAY** return the name of the network.
## net_peerCount
## net_listening
* [] net_listening **MUST** return a boolean indicating whether the client is currently listening for network connections.
## eth_protocolVersion
* [] eth_protocolVersion **MUST** return the current Ethereum protocol version.
## eth_syncing
* [] eth_syncing **MUST** return the syncing status of the client to the network.
  *  [] eth_syncing **MUST** return false when the client is not syncing or already synced to the network.
  *  [] eth_syncing **MUST** return the{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "currentBlock": "0xcef2",
        "highestBlock": "0xce2230",
        "knownStates": "0x0",
        "pulledStates": "0x0",
        "startingBlock": "0xc9ae"
    }
}
## eth_coinbase
* [] eth_coinbase **MUST** return the the ethereum address that the block reward is sent to.
## eth_mining
* might get deprecated?
## eth_gasPrice
* [] eth_gasPrice **MUST** return the current price per unit of gas in wei
## eth_accounts
* [] eth_accounts **MUST** return the public addresses for each Ethereum account that the client has the private key for.
## eth_blockNumber
* [] eth_blockNumber **MUST** return the block number for the most recent finalized block as a hex encoded string.
  * [] eth_blockNumber **MUST** return "0x0" when the client is not synced to the network.
## eth_getBalance
* [] eth_getBalance **MUST** return the account balance of the `address` at the given `defaultBlockParameter`.
  * [] eth_getBalance **MUST** return "0x0" when the client is not synced to the network
## eth_getStorageAt
* [] eth_getStorageAt **MUST** return the value stored in the storage slot at the given `storage slot` within the smart contract at the given `address` from the requested `block`
  * [] eth_getStorageAt **MUST**  error with code -32002 when the `block` requested is not within the 128 most recent blocks and is considered historical data
## eth_getTransactionCount
* [] eth_getTransactionCount **MUST** return the number of transactions made by the given `address` within the requested `block`. 
## eth_getBlockTransactionCountByHash
* [] eth_getBlockTransactionCountByHash **MUST** return the number of transactions within the block with the given `block hash` as a hex encoded string.
  * [] eth_getBlockTransactionCountByHash **MUST** return null when the `block hash` does not correspond to a finalized block.
  * [] eth_getBlockTransactionCountByHash **MUST** return null when the client has not finished syncing to the network.
## eth_getBlockTransactionCountByNumber
* [] eth_getBlockTransactionCountByNumber **MUST** return the number of transactions within the block with the given `block number` as a hex encoded string.
  * [] eth_getBlockTransactionCountByNumber **MUST** return null when the `block number` does not correspond to a finalized block.
  * [] eth_getBlockTransactionCountByNumber **MUST** return null when the client has not finished syncing to the network.
## eth_getUncleCountByHash
* might get deprecated?
## eth_getUncleCountByNumber
* might get deprecated?
## eth_getCode
* [] eth_getCode **MUST** return the deployed smart contract code at the given `address` and `block`.
  *  [] eth_getCode **MUST**  error with code -32002 when the `block` requested is not within the 128 most recent blocks and is considered historical data.
## eth_feeHistory
* [] eth_feeHistory **MUST** return the 
## eth_sign
## eth_signTransaction
## eth_sendTransaction
## eth_sendRawTransaction
## eth_estimateGas
## eth_getBlockByHash
* [] eth_getBlockByHash **MUST** return the block information for the block with the given `block hash`.
  * [] eth_getBlockByHash **MUST** return null when the given `block hash` does not correspond to a finalized block.
  * [] eth_getBlockByHash **MUST** error with code -32000 when the block information is not available due to state pruning.
* [] eth_getBlockByHash **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getBlockByNumber
* [] eth_getBlockByNumber **MUST** return the block information for the block with the given `block number`.
  * [] eth_getBlockByNumber **MUST** return null when the given `block number` is ahead of the current finalized block. 
  * [] eth_getBlockByNumber **MUST** error with code -32000 when the block information is not available due to state pruning.
* [] eth_getBlockByNumber **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getTransactionByHash
* [] eth_getTransactionByHash **MUST** return the transaction object for the transaction with the given `transaction hash`.
  * [] eth_getTransactionByHash **MUST** return null when the given `transaction hash` does not correspond to a transaction. 
  * [] eth_getTransactionByHash **MUST** error with code -32000 when the transaction information is not available due to state pruning.
## eth_getTransactionByBlockHashAndIndex
* [] eth_getTransactionByBlockHashAndIndex **MUST** return the transaction object with the given `block hash` and `transaction index` within the block.
  * [] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `block hash` does not does correspond to a finalized block.
  * [] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
  * [] eth_getTransactionByBlockHashAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionByBlockNumberAndIndex
* [] eth_getTransactionByBlockNumberAndIndex **MUST** return the transaction object with the given `block number` and `transaction index` within the block.
  * [] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `block number` is ahead of the current finalized block.
  * [] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
  * [] eth_getTransactionByBlockNumberAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionReceipt
* [] eth_getTransactionReceipt **MUST** return the transaction object with the given `transaction hash`.
  * [] eth_getTransactionReceipt **MUST** return null when the given `transaction hash` does not correspond to a transaction.
  * [] eth_getTransactionReceipt **MUST** return null when the client is not fully synced to the network. 
## eth_getUncleByBlockHashAndIndex
* might get deprecated?
* ## eth_getUncleByBlockNumberAndIndex
* might get deprecated?
## eth_newFilter
## eth_newBlockFilter
* [] eth_newBlockFilter **MUST** create a new filter on the node that tracks when new blocks are received.
* [] eth_newBlockFilter **MUST** return the filter id 
## eth_newPendingTransactionFilter
* [] eth_newPendingTransactionFilter **MUST** create a new filter on the node that tracks when new pending transaction are received.
* [] eth_newPendingTransactionFilter **MUST** return the filter id.
## eth_uninstallFilter
* [] eth_uninstallFilter **MUST** uninstall the filter with the given `filter id`.
  * [] eth_uninstallFilter **MUST** return true when a filter has been successfully uninstalled, otherwise it **MUST** return false.
## eth_getFilterChanges
* [] eth_getFilterChanges **MUST** work with all filter types.
  * [] If the `filter id` corresponds to a newBlockFilter eth_getFilterChanges **MUST** return an array containing the block hashes for each new block received since the filter was called last or first created.
  * [] If the `filter id` corresponds to a newPendingTransactionFilter eth_getFilterChanges **MUST** return an array containing the transaction hashes for each pending transaction received since the filter was last called or first created.
  *  [] If the `filter id` corresponds to a newFilter eth_getFilterChanges **MUST** return an array containing the
## eth_getFilterLogs
## eth_getLogs
## eth_getWork
* might get deprecated?

## 4.2 eth_call

* [EC-0] eth_call **MUST** create a transaction and execute it on node that received the transaction.
* [EC-1] eth_call **MUST NOT** mine any transaction on the blockchain.
* [EC-2] eth_call **MUST** use the `defaultBlockParameter` to know which block the code is being pulled from.
  * [EC-2.1] eth_call **MUST** error with code -32000 when the `defaultBlockParameter` is ahead of the chain
  * [EC-2.2] eth_call **MUST** use the latest block when the `defaultBlockParameter` parameter is not specified 
    * [EC-2.2.1] eth_call **MUST** error with code -32000 if `defaultBlockParameter` is null
  * [EC-2.3] State pruning **MAY** be an option on clients, eth_call **MUST** error with code -32000 when the requested state does not exist due to state pruning
* [EC-3] eth_call **MUST** consider a default address for when the `from` parameter is null or not specified
* [EC-4] eth_call **SHOULD NOT** be allow to be called from an address where CODEHASH != EMPTYCODEHASH. [EIP-3607](https://eips.ethereum.org/EIPS/eip-3607)
* [EC-5] eth_call **MUST** return transaction receipt of each call
  * [EC-5.1] eth_call **MUST** return an empty transaction receipt `0x0` when no transaction is executed 
* [EC-6] when the `to` parameter is not specified eth_call **MUST** treat it as contract creation and **MUST** return the deployed byte code of the contract
  * [EC-6.1] eth_call **MUST** error with code -32000 when there is an error creating the contract 
* [EC-7] **MUST NOT** allow `gas` to be 0 
* [EC-8] eth_call **MUST** work with all transaction types
* [EC-9] eth_call **MUST** work with `gasPrice` parameter
* [EC-10] eth_call **MUST** work with  `maxFeePerGas` and `maxPriorityFeePerGas` parameters  
  * [EC-10.1] when `maxFeePerGas` and `maxPriorityFeePerGas` are used the byte code for GASPRICE **MUST** return ?????  
  * [EC-10.2] eth_call **MUST** calculate `maxFeePerGas` or `maxPriorityFeePerGas` when only one is specified.


Just testing this again geth must have removed this feature, but I am not sure if that **SHOULD** be the case though I personally agree with removing it
* [EC-11] eth_call **MUST** check `from` account balance has sufficient funds to "pay" for the transaction
  * [EC-11.1] eth_call **MUST** error with code -32000 account has insufficient funds 
  * [EC-11.2] eth_call **MUST NOT** calculate cost of deploying contracts when checking balance 
# Errors
Error codes between-32768 and -32000 are reserved for JSON-RPC errors, where -32000 to -32099 are for Execution layer API errors

| code | message | meaning |
| --- | --- |--- |
| -32700 | Parse error | 	Invalid JSON was received by the server.<br> An error occurred on the server while parsing the JSON text.
| -32600 | Invalid Request | 	The JSON sent is not a valid Request object. 
| -32601 | Method not found | 	The method does not exist / is not available.
| -32602 | Invalid params | Invalid method parameter(s).
| -32603 | Internal error | 	Internal JSON-RPC error.
|-32000 | many messages | Multiple errors give this code probably should be fixed
[table source](https://www.jsonrpc.org/specification)
# Appendix

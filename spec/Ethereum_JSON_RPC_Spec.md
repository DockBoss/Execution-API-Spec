# WIP 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.1.1
## Working Draft: Updated October 23 
---
### **Author:**
Jared Doro(absurdcreationsllc@gmail.com) [AbsurdCreations](jareddoro.me)

### **Editors:**
nobody yet

### **Abstract:**
This document provides a detailed description of the minimum implementation of the Ethereum Execution layer JSON-RPC API.
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
breifly summarize and describe what is being developed and what it will be used for 
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
## 1.4 References

* [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
* [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)
---


# 4 Endpoints
## 4.1 list of Required endpoints 
* web3_clientVersion
* web3_sha3
* net_version
* net_peerCount
* net_listening
* eth_protocolVersion
* eth_syncing
* eth_coinbase
* eth_mining
* eth_hashrate
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
* eth_getWork
___

## web3_clientVersion

* [] web3_clientVersion **MUST** return a string containing information about the client version.
  * [] web3_clientVersion **SHOULD** return client version in the following format "ClientName/ClientVesrion/CurrentOpperatingSystem/LanguageUsed"
## web3_sha3

* [] web3_sha3 **MUST** return the Keccak256 hash of the given hex encoded string.
  * [] web3_sha3 **MUST** error with code -32000 when the given string is not hex encoded. 
  * [] web3_sha3 **MUST** use null when given "0x"
  
## net_version
## net_peerCount
## net_listening
## eth_protocolVersion
## eth_syncing
## eth_coinbase
## eth_mining
## eth_hashrate
## eth_gasPrice
## eth_accounts
## eth_blockNumber
## eth_getBalance
## eth_getStorageAt
## eth_getTransactionCount
## eth_getBlockTransactionCountByHash
## eth_getBlockTransactionCountByNumber
## eth_getUncleCountByHash
## eth_getUncleCountByNumber
## eth_getCode
## eth_feeHistory
## eth_sign
## eth_signTransaction
## eth_sendTransaction
## eth_sendRawTransaction
## eth_estimateGas
## eth_getBlockByHash
## eth_getBlockByNumber
## eth_getTransactionByHash
## eth_getTransactionByBlockHashAndIndex
## eth_getTransactionByBlockNumberAndIndex
## eth_getTransactionReceipt
## eth_getUncleByBlockHashAndIndex
## eth_getUncleByBlockNumberAndIndex
## eth_newFilter
## eth_newBlockFilter
## eth_newPendingTransactionFilter
## eth_uninstallFilter
## eth_getFilterChanges
## eth_getFilterLogs
## eth_getLogs
## eth_getWork

## 4.2 eth_call
// CallContract executes a message call transaction, which is directly executed in the VM
// of the node, but never mined into the blockchain.

* [EC-0] eth_call **MUST** create a transaction and execute it on node that received the transaction.
* [EC-1] eth_call **MUST NOT** mine any transaction on the blockchain.
* [EC-2] eth_call **MUST** use `defaultBlockParameter` to knoxw which block the code is being pulled from.
  * [EC-2.1] eth_call **MUST** error with code -32000 when `defaultBlockParameter` is ahead of the chain
  * [EC-2.2] eth_call **MUST** use the latest block when the `defaultBlockParameter` parameter is not specified 
    * [EC-2.2.1] eth_call **MUST** error with code -32000 if `defaultBlockParameter` is null
  * [EC-2.3] State pruning **MAY** be optional on clients, eth_call **MUST** error with code -32000 when state does not exist due to state pruning
* [EC-3] eth_call **MUST** consider a default address for when the `from` parameter is null or not specified
* [EC-4] eth_call **MUST NOT** allow a transaction send from an address where CODEHASH != EMPTYCODEHASH. [EIP-3607](https://eips.ethereum.org/EIPS/eip-3607)
* [EC-5] eth_call **MUST** return transaction receipt of each call
  * [EC-5.1] eth_call **MUST** return an empty transaction receipt `0x0` when no transaction is executed 
* [EC-6] when the `to` parameter is not specified eth_call **MUST** treat it as contract creation and **MUST** return the deployed byte code of contract
  * [EC-6.1] eth_call **MUST** error with code -32000 when there is an error creating the contract 
* [EC-7] **MUST NOT** allow `gas` to be 0 
* [EC-8] eth_call **MUST** work with all transaction types
* [EC-9] eth_call **MUST** work with `gasPrice` parameter
* [EC-10] eth_call **MUST** work with  `maxFeePerGas` and `maxPriorityFeePerGas` parameters  
  * [EC-10.1] when `maxFeePerGas` and `maxPriorityFeePerGas` are used the byte code for GASPRICE **MUST** return ?????  
  * [EC-10.2] eth_call **MUST** interpret either `maxFeePerGas` and `maxPriorityFeePerGas` when it is not specified in transaction
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

# Appendix

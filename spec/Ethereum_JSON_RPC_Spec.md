# WIP might use ReSpec this version might not get finished 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.0143
## Working Draft: Updated September 26
---
### Author:
Jared Doro(absurdcreationsllc@gmail.com) [AbsurdCreations](jareddoro.me)

### Editors:
nobody yet

### Abstract:
This document provides an overview of what the minimum implementation standards are for the Ethereum Execution layer JSON-RPC API. The purpose of this documentation is twofold, firstly to give an in-depth description of how to use the API and secondly to provide information and tests allowing for easy implementation and benchmarking of the API.
### Keywords:
The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [[RFC2119](http://www.ietf.org/rfc/rfc2119.txt)] when, and only when, they appear in all capitals, as shown here.

-----
# Table of Contents
[1 Introduction](https://stackoverflow.com/questions/51221730/markdown-link-to-header) \
[data types]() \
[Glossary]() \
[required endpoints]() \
&nbsp;&nbsp;&nbsp;[web3]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[web3_clientVersion]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[web3_sha3]() \
&nbsp;&nbsp;&nbsp;[net]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[net_version]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[net_peerCount]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[net_listening]() \
&nbsp;&nbsp;&nbsp;[eth]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_protocolVersion]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_syncing]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_coinbase]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_mining]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_hashrate]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_gasPrice]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_accounts]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_blockNumber]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getBalance]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getStorageAt]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getTransactionCount]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getBlockTransactionCountByHash]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getBlockTransactionCountByNumber]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getUncleCountByHash]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getUncleCountByNumber]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getCode]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_feeHistory]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_sign]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_signTransaction]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_sendTransaction]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_sendRawTransaction]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_call]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_estimateGas]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getBlockByHash]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getBlockByNumber]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getTransactionByBlockHashAndIndex]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getTransactionByBlockHashAndIndex]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getTransactionReceipt]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getUncleByBlockHashAndIndex]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getUncleByBlockNumberAndIndex]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_newFilter]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_newBlockFilter]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_newPendingTransactionFilter]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_uninstallFilter]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getFilterChanges]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getFilterLogs]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getLogs]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_getWork]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_submitWork]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eth_submitHashrate]() \
[current implementations]() \
[Appendix ]() \

-----
# 1 Introduction
blah blah blah test
## 1.1 something else
sefsefs
# Glossary
# Data types
## String
## DATA
## Boolean
## QUANTITY
## Tag
I need to do some actual digging, but I assume that the tag is just a enumerated list of Strings with each of the block states
* `"latest"`
  * uses the most recent finalized block 
* `"earliest"`
  * uses the earliest block that the client has a state for
* `"pending"`
  * uses the current that is being filled with transactions

# Endpoints
## .1 list of endpoints
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
* eth_submitWork
* eth_submitHashrate
___
## web3

### web3_clientVersion
### web3_sha3
## net

### net_version
### net_peerCount
### net_listening

## eth

### eth_protocolVersion
### eth_syncing
### eth_coinbase
### eth_mining
### eth_hashrate
### eth_gasPrice
### eth_accounts
### eth_blockNumber
### eth_getBalance
### eth_getStorageAt
### eth_getTransactionCount
### eth_getBlockTransactionCountByHash
### eth_getBlockTransactionCountByNumber
### eth_getUncleCountByHash
### eth_getUncleCountByNumber
### eth_getCode
### eth_feeHistory
### eth_sign
### eth_signTransaction
### eth_sendTransaction
### eth_sendRawTransaction
### eth_call
### eth_estimateGas
### eth_getBlockByHash
### eth_getBlockByNumber
### eth_getTransactionByHash
### eth_getTransactionByBlockHashAndIndex
### eth_getTransactionByBlockNumberAndIndex
### eth_getTransactionReceipt
### eth_getUncleByBlockHashAndIndex
### eth_getUncleByBlockNumberAndIndex
### eth_newFilter
### eth_newBlockFilter
### eth_newPendingTransactionFilter
### eth_uninstallFilter
### eth_getFilterChanges
### eth_getFilterLogs
### eth_getLogs
### eth_getWork
### eth_submitWork
### eth_submitHashrate
# current implementations
a list of different implementations of the JSON-RPC API for reference and testing purposes.
Listed implementations **MUST** pass all tests before being added to the list
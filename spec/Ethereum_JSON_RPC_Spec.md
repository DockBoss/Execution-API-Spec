# WIP might use ReSpec this version might not get finished [link to ReSpec](https://jareddoro.me)
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.1
## Working Draft: Updated September 28
---
### **Author:**
Jared Doro(absurdcreationsllc@gmail.com) [AbsurdCreations](jareddoro.me)

### **Editors:**
nobody yet

### **Abstract:**
This document provides an overview of what the minimum implementation standards are for the Ethereum Execution layer JSON-RPC API. The purpose of this documentation is twofold, firstly to give an in-depth description of how to use the API and secondly to provide information and tests allowing for easy implementation of the API.
### **Keywords:**
The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as described in [[RFC2119](http://www.ietf.org/rfc/rfc2119.txt)] when, and only when, they appear in all capitals, as shown here.

-----
# Table of Contents
[1 Introduction](https://stackoverflow.com/questions/51221730/markdown-link-to-header) \
&nbsp;&nbsp;&nbsp;[1.1 Not Specified vs Null]() \
[2 Glossary]() \
[3 Data types]() \
&nbsp;&nbsp;&nbsp;[3.1 String]() \
&nbsp;&nbsp;&nbsp;[3.2 DATA]() \
&nbsp;&nbsp;&nbsp;[3.3 Boolean]() \
&nbsp;&nbsp;&nbsp;[3.4 QUANTITY]() \
&nbsp;&nbsp;&nbsp;[3.5 Tag]() \
[4 Endpoints]() \
&nbsp;&nbsp;&nbsp;[4.1 Required Endpoints]() \
&nbsp;&nbsp;&nbsp;[4.2 eth_call]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.1 Network Considerations]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.2 Interacting With Contracts]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.3 Testing Contracts]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.4 gas, gasPrice, maxFeePerGas, and maxPriorityFeePerGas]() \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4.2.5 Account Balance]() \
[5 current implementations]() \
[Appendix A]() 

-----
# 1 Introduction
blah blah blah test

## 1.1 Not Specified vs Null

when the term not specified is used, it is describing the case where the parameter is not a part of the call vs when the term null is used it describes the case where the parameter is part of the call and has not been given a value

`to` not specified
```
{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [{
        "from": "0x3a5509015e0193adf435a761a6ce160f900034b5"
}, "latest"],
    "id": 1
}
```


`to` null
```
{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [{
        "from": "0x3a5509015e0193adf435a761a6ce160f900034b5",
        "to": ""
}, "latest"],
    "id": 1
}
```
---
# 2 Glossary
see glossary.md for now
# 3 Data types
## 3.1 String
## 3.2 DATA
## 3.3 Boolean
## 3.4 QUANTITY
## 3.5 Tag
I need to do some actual digging, but I assume that the tag is just an enum of Strings with each of the block states
* `"latest"`
  * uses the most recent finalized block 
* `"earliest"`
  * uses the earliest block that the client has a state for
* `"pending"`
  * uses the current that is being filled with transactions


# 4 Endpoints
## 4.1 list of Required endpoints --note not 100% on this list
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

## 4.2 eth_call
### **4.2.1 Network Considerations**
---
[EC-1] **MUST NOT** create a transaction on the network.

[EC-2] User **MUST**  specify which block they would like to interact with with by adding the `blockHeight` parameter after the transaction object. Some clients don't allow users to use a specific block, just "latest". This is determined by the clients pruning setting --note I need to look into this more

### **4.2.2 Interacting with contracts**
---
Interacting with contracts is easy all you have to know is the contract address and its function selector, which is the first four bytes of the web3_sha3 === Keccak-256 hash of the function name and input parameters. for more info [see](https://docs.soliditylang.org/en/develop/abi-spec.html)

[EC-3] **MUST** use default address of `0x0000000000000000000000000000000000000000` when the `from` parameter is null or not specified

[EC-4] **MUST NOT** allow a message call to be sent by a contract or account owned by someone else. --note I will fix wording here

[EC-5] **MUST** return `0x0` when the call does not error, but is not interacting with a contract.

### **4.2.3 Testing Contracts**
---
[EC-6] when the the `to` parameter is not specified eth_call **MUST** execute the byte code in the `data` parameter to allow users to test contract deployment. It **MUST** return the deployed contract byte code. Which can be decompiled [here](https://ethervm.io/decompile)

### **4.2.4 `gas`, `gasPrice`, `maxFeePerGas`, and `maxPriorityFeePerGas`**
---
[EC-7] **MUST NOT** allow `gas` to be 0 

[EC-8] `gasPrice` **MUST** work with all transaction types --note I will look and find how they are converted

[EC-9] `maxFeePerGas` and `maxPriorityFeePerGas` **MUST** work with all transaction types --note I will look and find how they are converted

[EC-10] when `maxFeePerGas` and `maxPriorityFeePerGas` are used the byte code for GASPRICE **MUST** return ?????  

### **4.2.5 Account Balance** 
---
[EC-11] Client **MUST** check the balance of the `from` address to determine if the account has enough eth to execute the call. 
This follows the same logic as eth_sendTransaction, eth_sendRawTransaction where it considers the `value` + (the `gas` * `gasPrice`  || `gas` * `maxFeePerGas` + `maxPriorityFeePerGas` ) --note I do not think the second situation is 100% correct. I need to look into it

[EC-12] eth_call **MUST NOT** use or transfer any eth even though it checks the account balance 

# 5 current implementations
a list of different implementations of the JSON-RPC API for reference and testing purposes.
Listed implementations **MUST** pass all tests before being added to the list

# Appendix A
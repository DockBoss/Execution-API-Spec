# Besu's Ethereum Execution Layer JSON-RPC API Specification Diff
 Nethermind Version: 1.12.4
## Working Draft: Updated February 4th
---
### **Editor:**
Jared Doro(jareddoro@gmail.com)
### **Abstract:**
This document describes the requirements and expected behavior for the standard endpoint of the Ethereum Execution layer JSON-RPC API.
### **Keywords:**
The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as described in [[RFC2119](http://www.ietf.org/rfc/rfc2119.txt)] when, and only when, they appear in all capitals, as shown here.

### **Citation format:**
When referencing this specification the following citation format should be used:

[ethereum-execution-layer-JSON-RPC-API]

Ethereum execution layer JSON-RPC API Edited by Jared Doro. 17th December 2021.
# Table of Contents
[1 Introduction](#1-introduction)\
&nbsp;&nbsp;[1.1 Overview](#11-overview)\
&nbsp;&nbsp;[1.2 Glossary](#12-glossary)\
&nbsp;&nbsp;[1.3 Document Conventions](#13-document-conventions)\
&nbsp;&nbsp;&nbsp;&nbsp;[1.3.1 Input parameters](#131-input-parameters)\
&nbsp;&nbsp;&nbsp;&nbsp;[1.3.2 Not specified vs null vs empty](#132-not-specified-vs-null-vs-empty)\
&nbsp;&nbsp;&nbsp;&nbsp;[1.3.3 Default block parameter](#133-default-block-parameter)\
&nbsp;&nbsp;&nbsp;&nbsp;[1.3.4 Unavailable vs Does not exist](#134-unavailable-vs-does-not-exist)\
[2 Unique Endpoint Behavior](#2-unique-endpoint-behavior)\
[3 Unique Error codes](#3-unique-error-codes)
# 1 Introduction 

The Ethereum execution layer API is one of the key components of Ethereum. It acts as an intermediary between the users of Ethereum and the execution layer where the transactions are received and executed. It provides a way for users to send transactions, request data, and execute smart contracts. 
## 1.1 Overview

The purpose of this document is to act as a diff detailing the situations where the Besu client behaves differently then GETH *"The source of all truth."* This document is temporary and will become irrelevant once all Ethereum Execution Layer JSON-RPC API's behave the same for the default endpoints listed.
## 1.2 Glossary
* ETH
* Smart contracts
* user
* client
* EVM
* Account
* block
* block-chain

## 1.3 Document Conventions
### 1.3.1 Input Parameters
Input parameters will be displayed like `this` when referred to in the document.
### 1.3.2 Not specified vs null vs empty
* Not specified describes when a parameter is not part of the call.
* Null describes when a parameter is part of the call, but has the value of null.
* Empty describes when a parameter is part of the call, but has only an empty string.

An example where `gas` is not specified `value` is empty, and `data` is null.
```
{
	"jsonrpc": "2.0",
	"method": "eth_sendTransaction",
	"params": [
		{
			"from": "0x3a5509015e0193adf435a761a6ce160f900034b5",
			"to": "0xe64fac7f3df5ab44333ad3d3eb3fb68be43f2e8c",
			"value": "",
			"data": null
		}
	],
	"id": 1
}
```
### 1.3.3 Default Block Parameter
Some endpoints use the `defaultBlockParameter` to specify the block that the data is being requested from.
The `defaultBlockParameter` allows the following options to specify a block:
* Block Number
* Block Hash
* Block Tag
  * earliest: for the earliest/genesis block.
  * latest: for the latest block received by the client.
  * pending: for the pending state/transactions.

### 1.3.4 Unavailable vs Does not exist
* Requested data is unavailable when the client does not contain the necessary information to respond to the request, but the information does exist on the network.
* Requested data does not exist when neither the client or the network contain the necessary information to respond to the request.
# 2 Unique Endpoint Behavior

### Web3
* <a href="#clientVersion">web3_clientVersion</a>
* <a href="#sha3">web3_sha3</a>
### Net
* <a href="#version">net_version</a>
* <a href="#peerCount">net_peerCount</a>
* <a href="#listening">net_listening</a>
### Eth
* <a href="#protocolVersion">eth_protocolVersion</a>
* <a href="#syncing">eth_syncing</a>
* <a href="#coinbase">eth_coinbase</a>
* <a href="#etherbase">eth_etherbase</a>
* <a href="#accounts">eth_accounts</a>
* <a href="#mining">eth_mining</a>
* <a href="#getWork">eth_getWork</a>
* <a href="#submitWork">eth_submitWork</a>
* <a href="#hashrate">eth_hashrate</a>
* <a href="#submitHashrate">eth_submitHashrate</a>
* <a href="#gasPrice">eth_gasPrice</a>
* <a href="#maxPriorityFeePerGas">eth_maxPriorityFeePerGas</a>
* <a href="#feeHistory">eth_feeHistory</a>
* <a href="#blockNumber">eth_blockNumber</a>
* <a href="#sign">eth_sign</a>
* <a href="#call">eth_call</a>
* <a href="#fillTransaction">eth_fillTransaction</a>
* <a href="#createAccessList">eth_createAccessList</a>
* <a href="#estimateGas">eth_estimateGas</a>
* <a href="#signTransaction">eth_signTransaction</a>
* <a href="#sendRawTransaction">eth_sendRawTransaction</a>
* <a href="#sendTransaction">eth_sendTransaction</a>
* <a href="#pendingTransactions">eth_pendingTransactions</a>
* <a href="#resend">eth_resend</a>
* <a href="#getProof">eth_getProof</a>
* <a href="#getBalance">eth_getBalance</a>
* <a href="#getTransactionCount">eth_getTransactionCount</a>
* <a href="#getStorageAt">eth_getStorageAt</a>
* <a href="#getCode">eth_getCode</a>
* <a href="#getBlockByHash">eth_getBlockByHash</a>
* <a href="#getBlockByNumber">eth_getBlockByNumber</a>
* <a href="#getHeaderByNumber">eth_getHeaderByNumber</a>
* <a href="#getHeaderByHash">eth_getHeaderByHash</a>
* <a href="#getBlockTransactionCountByHash">eth_getBlockTransactionCountByHash</a>
* <a href="#getBlockTransactionCountByNumber">eth_getBlockTransactionCountByNumber</a>
* <a href="#getTransactionReceipt">eth_getTransactionReceipt</a>
* <a href="#getTransactionByHash">eth_getTransactionByHash</a>
* <a href="#getTransactionByBlockHashAndIndex">eth_getTransactionByBlockHashAndIndex</a>
* <a href="#getTransactionByBlockNumberAndIndex">eth_getTransactionByBlockNumberAndIndex</a>
* <a href="#getRawTransactionByHash">eth_getRawTransactionByHash</a>
* <a href="#getRawTransactionByBlockHashAndIndex">eth_getRawTransactionByBlockHashAndIndex</a>
* <a href="#getRawTransactionByBlockNumberAndIndex">eth_getRawTransactionByBlockNumberAndIndex</a>
* <a href="#getUncleCountByHash">eth_getUncleCountByHash</a> 
* <a href="#getUncleCountByNumber">eth_getUncleCountByNumber</a>
* <a href="#getUncleByBlockHashAndIndex">eth_getUncleByBlockHashAndIndex</a> 
* <a href="#getUncleByBlockNumberAndIndex">eth_getUncleByBlockNumberAndIndex</a>
* <a href="#newFilter">eth_newFilter</a>
* <a href="#newBlockFilter">eth_newBlockFilter</a>
* <a href="#newPendingTransactionFilter">eth_newPendingTransactionFilter</a>
* <a href="#uninstallFilter">eth_uninstallFilter</a>
* <a href="#getFilterChanges">eth_getFilterChanges</a>
* <a href="#getFilterLogs">eth_getFilterLogs</a>
* <a href="#getLogs">eth_getLogs</a>
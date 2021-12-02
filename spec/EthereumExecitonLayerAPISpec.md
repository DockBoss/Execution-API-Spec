# WIP 
# Ethereum Execution Layer JSON-RPC API
## Technical Specification V0.9.5 
## Working Draft: Updated December 2nd  
---
### **Author:**
Jared Doro(jareddoro@gmail.com) [Is my Website still down?](jareddoro.me)

### **Editors:**


### **Abstract:**
This document provides a detailed description of Ethereum's Execution Layer API. This document also provides the minimum requirements and functionality that is needed for a piece of software to be considered a valid Ethereum Execution Layer API.
### **Keywords:**
The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **NOT RECOMMENDED**, **MAY**, and **OPTIONAL** in this document are to be interpreted as described in [[RFC2119](http://www.ietf.org/rfc/rfc2119.txt)] when, and only when, they appear in all capitals, as shown here.

-----
# Table of Contents
[1 Introduction]() \
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
* ETH
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
The JSON-RPC API must interface with an ethereum execution client to send and and receive data to the Ethereum network
The users of the API will interact with the api through HTTP requests or through a web socket connection

## 2.2 Product Features 
This is a list of standard endpoints for the Ethereum execution layer API
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

## 2.4 Operating Environment how, where, under what conditions the system would be used.
a version of the Execution layer API **MUST** be implemented with each Ethereum Execution Client.
This means that for each Ethereum node running there **SHOULD** be an instance of the Execution layer API running with it to allow users to interact with it.
## 2.5 Design Implementations and constraints
The Execution layer API is currently using the JSON-RPC 2.0 standard. 
The execution layer API also supports interaction using both HTTP2.0 and WebSockets. 
## 2.6 Assumptions and dependencies

# 3 System Features
## web3_clientVersion
* [WC-1] web3_clientVersion **MUST** return a string containing information about the client version.
* [WC-2] web3_clientVersion **MUST** start with the name of the client.
* [WC-3] web3_clientVersion **MUST** return the client version after the name.
* [WC-4] web3_clientVersion **MUST** return the operating system and architecture the client is running on.
* [WC-5] web3_clientVersion **MUST** return the name of the language being used.
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
* [ESY-3] eth_syncing **MUST** return an object containing the following when syncing:
   * The current block being synced on the client.
   * The current highest block known by the client.
   * The known states, and the pulled states.
   * And the block number that the client started syncing from.
## eth_coinbase
* [ECB-1] eth_coinbase **MUST** return an Ethereum address owned by the client you are using to interact with the network that the reward for successfully mining a block is sent to.
* [ECB-2] eth_coinbase **MUST** error with code -32000 when the client does not have an address for the block reward to be sent to.
## eth_mining
* [EM-1] eth_mining **MUST** return true when the client has mining enabled, otherwise it **MUST** return false.
## eth_gasPrice
* [EGP-1] eth_gasPrice **MUST** return the current price per unit of gas of the client in wei.
## eth_accounts
* [EA-1] eth_accounts **MUST** return the public addresses for each Ethereum account that the client you are using to interact with the network has the private key/s for.
## eth_blockNumber
* [EBN-1] eth_blockNumber **MUST** return the block number for the most recent block mined.
* [EBN-2] eth_blockNumber **MUST** return "0x0" when the client is not synced to the network.
## eth_getBalance
* [EGB-1] eth_getBalance **MUST** return the account balance of the `address` at the given `defaultBlockParameter`.
* [EGB-2] eth_getBalance **MUST** return "0x0" when the client is not synced to the network.
* [EGB-3] eth_getBalance **MUST** error with code -32000 checking the balance at at block ahead of the chain.
## eth_getStorageAt
* [EGS-1] eth_getStorageAt **MUST** return the data stored within the `storage slot` of the given `address` at the time of the requested `block number` or `block tag`.
* [EGS-2] eth_getStorageAt **MUST**  error with code -32000 when the client does not have the state of the `block number` or `block tag` requested.
* [EGS-3] eth_getStorageAt **MUST** return 0x00...0 when using `block tag` is used while syncing to the network.
* [EGS-4] eth_getStorageAt **MUST** error with code -32000 when using `block number` while syncing to the network.
## eth_getTransactionCount
* [EGTC-1] eth_getTransactionCount **MUST** return the nonce of the account with the given `address` has made at the block requested by the `defaultBlockParameter`. 
* [EGTC-2] eth_getTransactionCount **MUST** error with code -32000 when using a block hash for the `defaultBlockParameter` that does not correspond to a block. 
* [EGTC-3] eth_getTransactionCount **MUST** error with code -32000 when using a block number for the `defaultBlockParameter` that is ahead of the chain.
* [EGTC-4] eth_getTransactionCount **MUST** error with code -32000 when using a block number or block hash for the `defaultBlockParameter` when syncing to the network.
* [EGTC-5] eth_getTransactionCount **MUST** error with code -32000 when the client cannot pull or recreate the state required when using a block number or block hash for the `defaultBlockParameter` as a result of the chosen sync type when synced to the network. 
* [EGTC-6] eth_getTransactionCount **MUST** use the latest synced block when using block tag "latest" for the `defaultBlockParameter` when syncing to the network.
* [EGTC-7] eth_getTransactionCount **MUST** return 0x0 when using block tag "pending" while syncing to the network.
* [EGTC-8] eth_getTransactionCount **MUST** must return the actual number of transactions made by the `address` while syncing to the network when available, otherwise it **MUST** return 0x0.
## eth_getBlockTransactionCountByHash
* [EGTCH-1] eth_getBlockTransactionCountByHash **MUST** return the number of transactions within the block with the given `block hash`.
* [EGTCH-2] eth_getBlockTransactionCountByHash **MUST** return null when the `block hash` does not correspond to a block.
* [EGTCH-3] eth_getBlockTransactionCountByHash **MUST** return null when the client is currently syncing to the network.
## eth_getBlockTransactionCountByNumber
* [EGTCN-1] eth_getBlockTransactionCountByNumber **MUST** return the number of transactions within the block with the given `block number` or `block tag`.
* [EGTCN-2] eth_getBlockTransactionCountByNumber **MUST** return null when the `block number` does not correspond to a block.
* [EGTCN-3] eth_getBlockTransactionCountByNumber **MUST** return null when the `block number` is ahead of the synced blocks when the client is currently syncing to the network.
* [EGTCN-4] eth_getBlockTransactionCount **MUST** return 0x0 when using `block tag` when the client is currently syncing to the network.
## eth_getUncleCountByHash
* [EGUCH-1] eth_getUncleCountByHash **MUST** return number of uncle blocks that the block corresponding to the given `blockHash` has.
* [EGUCH-2] eth_getUncleCountByHash **MUST** return null when the `blockHash` does not correspond to a mined block.
* [EGUCH-3] eth_getUncleCountByHash **MUST** return null when the block information is not available while syncing to the network.
## eth_getUncleCountByNumber
* [EGUCN-1] eth_getUncleCountByNumber **MUST** return number of uncle blocks that the block corresponding to the given `block number` or `block tag` has.
* [EGUCN-2] eth_getUncleCountByNumber **MUST** return null when the `block number` does not correspond to a mined block.
* [EGUCN-3] eth_getUncleCountByNumber **MUST** return null when block information is not available while syncing to the network.
* [EGUCN-4] eth_getUncleCountByNumber **MUST** used the latest known block when using the "latest" tag while syncing.
* [EGUCN-5] eth_getUncleCountByNumber **MUST** return 0x0 when using `block tag` "pending".
## eth_getUncleByBlockHashAndIndex
* [EGUHI-1] eth_getUncleCountByHashAndIndex **MUST** return the uncle block information at the `uncle index` of the block corresponding to the given `block hash`.
* [EGUHI-2] eth_getUncleCountByHashAndIndex **MUST** return null when the `block hash` does not correspond to a mined block.
* [EGUHI-3] eth_getUncleCountByHashAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUHI-4] eth_getUncleCountByHashAndIndex **MUST** return null when block information is not available while syncing to the network.
## eth_getUncleByBlockNumberAndIndex 
* [EGUNI-1] eth_getUncleByBlockNumberAndIndex **MUST** return the uncle block information at the `Uncle index` of the block corresponding to the given `block number` or `block tag`.
* [EGUNI-2] eth_getUncleByBlockNumberAndIndex **MUST** return null when the `block number` does not correspond to a mined block.
* [EGUNI-3] eth_getUncleByBlockNumberAndIndex **MUST** return null when block information is not available while syncing to the network. 
* [EGUNI-4] eth_getUncleByBlockNumberAndIndex **MUST** return null when the block has no uncles at the `uncle index`.
* [EGUNI-5] eth_getUncleByBlockNumberAndIndex **MUST** used the latest known block when using the "latest" tag while syncing.
* [EGUNI-6] eth_getUncleByBlockNumberAndIndex **MUST** return null when `block tag` "pending" is used.
## eth_getCode
* [EGC-1] eth_getCode **MUST** return the deployed smart contract code at the given `address` and `defaultBlockParameter`.
* [EGC-2] eth_getCode **MUST**  error with code -32000 when the state information is not available for the requested block.
* [EGC-3] eth_getCode **MUST** error with code -32000 when using block numbers or block hashes while syncing to the network.
* [EGC-4] eth_getCode **MUST** return 0x0 when using block tags when syncing to the network.
## eth_feeHistory
* [EFH-1] eth_feeHistory **MUST** take the `blockCount`, `highestBlock`, and an array containing the desired `rewardPercentiles` as input parameters.
* [EFH-2] eth_feeHistory **MUST** return following information for number of blocks specified by the `blockCount` parameter stopping at the `highestBlock` parameter.
  * An array containing the base fee per gas for each block.
  * An array containing the ratio of the gas used by each block.
  * An array containing arrays with the requested `rewardPercentiles` for each block.
  * The oldest block used for the the request.
* [EFH-3] eth_feeHistory **MUST** ues the information of available blocks when the range requested by the `blockCount` parameter is not available.
* [EFH-4] eth_feeHistory **MUST** allow block tags to be used for `highestBlock`.
* [EFH-5] eth_feeHistory **MUST** error with code -32000 when `highestBlock` is ahead of the chain.
## eth_sign
* [ESN-1] eth_sign **MUST** return the ethereum specific signature detailed in [EIP-191](https://eips.ethereum.org/EIPS/eip-191) for the given unlocked `address` and `message`.
* [ESN-2] eth_sign **MUST** error with code -32000 when when the account corresponding to the `address` is not unlocked.
* [ESN-3] eth_sign **MUST** error with code -32000 when when the account corresponding to the `address` is not owned by the client.
## eth_signTransaction
* [ESNT-1] eth_signTransaction **MUST** return both the signed encoded and signed unencoded format of the `transaction` given.
* [ESNT-2] eth_sendTransaction **MUST NOT** use given transaction `type` for transaction type, **MUST** determine transaction type from given transaction parameters.
* [ESNT-3] eth_signTransaction **MUST** return encoded legacy transactions in the RLP format.
* [ESNT-4] eth_signTransaction **MUST** return encoded [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) transactions as the transaction `type` concatenated with the transaction type's defined encoding method.
* [ESNT-5] eth_signTransaction **MUST** use 0x0000000000000000000000000000000000000000 as default `from` address when `from` is null or not specified.
* [ESNT-6] eth_signTransaction **MUST** error with code -32000 when the `from` address is locked.
* [ESNT-7] eth_signTransaction **MUST** error with code -32000 when sending transaction using a `from` address that the client does not have the private key for.
* [ESNT-8] eth_signTransaction **MUST** error with code -32000 when the `gas` is not specified.
* [ESNT-9] eth_signTransaction **MUST** use 0x0 for `gas` when parameter is null.
* [ESNT-10] eth_signTransaction **MUST** error with code -32000 when the `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas` are not specified.
* [ESNT-11] eth_signTransaction **MUST** error with code -32000 when `gasPrice` is used with `maxFeePerGas` and/or `maxPriorityFeePerGas`.
* [ESNT-12] eth_signTransaction **MUST** use 0x0 for `gasPrice` or `maxFeePerGas` and `maxPriorityFeePerGas` when the parameter is null. 
* [ESNT-13] eth_signTransaction **MUST** use null for `gasPrice` when using a type 2 transaction. 
* [ESNT-14] eth_signTransaction **MUST** error with code -32000 when the `maxPriorityFeePerGas` has a larger value than the `maxFeePerGas`
* [ESNT-15] eth_signTransaction **MUST** error with code -32000 when the `nonce` is not specified.
* [ESNT-16] eth_signTransaction **MUST** use 0x0 for `nonce` when parameter is null.
* [ESNT-17] eth_signTransaction **MUST** allow `to` address to be the same as `from` address.
* [ESNT-18] eth_signTransaction **MUST** allow user to enter extra key value pairs within the `transaction` object that are not used by the selected transaction.
* [ESNT-19] eth_signTransaction **MUST NOT** add any extra key value pairs sent by the user to the signed transaction sent to the network.
* [ESNT-20] eth_signTransaction **MUST** allow user to use duplicate parameters in the `transaction` object and **MUST** use the last of the duplicate parameters.
* [ESNT-21] eth_signTransaction **MUST** allow user to use `data` or `input` for contract deployment or contract interactions.
* [ESNT-22] eth_signTransaction **MUST** error with code -32000 when `data` and `input` are both used and are not equal.
* [ESNT-23] eth_signTransaction **MUST** error with code -32000 when `gas` exceeds block gas limit.
* [ESNT-24] eth_signTransaction **MUST** error with code -32000 when `gasPrice` causes transaction to exceed the transaction fee cap.
* [ESNT-25] eth_signTransaction **MUST** error with code -32000 when `maxFeePerGas` causes transaction to exceed the transaction fee cap.
* [ESNT-26] eth_signTransaction **MUST** error with code -32000 when deploying contract with no `data`/`input`.
* [ESNT-27] eth_signTransaction **MUST** error with code -32000 when attempting to sign a transaction with an incorrect `chainId`.
## eth_sendRawTransaction
* [ESRT-1] eth_sendRawTransaction **MUST** return the transaction hash after submitting an encoded signed transaction to the network.
* [ESRT-2] eth_sendRawTransaction **MUST** allow users to send transaction where `gasPrice` or `maxFeePerGas` or `maxPriorityFeePerGas` are below network average and may never be executed.
* [ESRT-3] eth_sendRawTransaction **MUST** error with code -32000 when the `from` address does not have enough Ether to pay for the transaction.
* [ESRT-4] eth_sendRawTransaction **MUST** error with code -32000 when nonce is too low.
* [ESRT-5] eth_sendRawTransaction **MUST** error with code -32000 when the `gas` is too low.
* [ESRT-6] eth_sendRawTransaction **MUST** error with code -32000 when the user did not raise the `maxFeePerGas` enough when trying to replace a pending transaction.
* [ESRT-7] eth_sendRawTransaction **MUST** error with code -32000 when `transaction` is not properly encoded.
* [ESRT-8] eth_sendRawTransaction **MUST** error with code -3200 when sending an encoded transaction while syncing to the network.
* [ESRT-9] eth_sendRawTransaction **MUST** allow sending of contract creation transactions with code that causes the EVM to error. Resulting in a contract with no code. [this would error on eth_call and eth_estimateGas]
## eth_sendTransaction
* [EST-1] eth_sendTransaction **MUST** return the transaction hash of the `transaction` when the transaction is successfully sent to the network.
* [EST-2] eth_sendTransaction **MUST NOT** use given transaction `type` for transaction type, **MUST** determine transaction type from given transaction parameters.
* [EST-3] eth_sendTransaction **MUST** allow `to` address to be the same as `from` address
* [EST-4] eth_sendTransaction **MUST** allow user to enter extra key value pairs within the `transaction` object that are not used by the selected transaction.
* [EST-5] eth_sendTransaction **MUST NOT** add any extra key value pairs sent by the user to the signed transaction sent to the network.
* [EST-6] eth_sendTransaction **MUST** allow user to use duplicate parameters in the `transaction` object and **MUST** use the last of the duplicate parameters.
* [EST-7] eth_sendTransaction **MUST** use 0x0000000000000000000000000000000000000000 as default `from` address when `from` is null or not specified.
* [EST-8] eth_sendTransaction **MUST** error with code -32000 when sending transaction using a `from` address that the client does not have the private key for.
* [EST-9] eth_sendTransaction **MUST** error with code -32000 when sending transaction using a `from` address that is locked.
* [EST-10] eth_sendTransaction **MUST** allow user to use `value` parameter when deploying a contract.
* [EST-11] eth_sendTransaction **MUST NOT** send `value` to created contract when used during contract deployment
* [EST-12] eth_sendTransaction **MUST NOT** cost any extra when `value` is added during contract deployment.
* [EST-13] eth_sendTransaction **MUST** allow user to use `data` or `input` for contract deployment or contract interactions.
* [EST-14] eth_sendTransaction **MUST** error with code -32000 when `data` and `input` are both used and are not equal.
* [EST-15] eth_sendTransaction **MUST** allow users to send transaction where `gasPrice` or `maxFeePerGas` or `maxPriorityFeePerGas` are below network average and may never be executed.
* [EST-16] eth_sendTransaction **MUST** use legacy transaction anytime `gasPrice` is specified without `maxFeePerGas` and `maxPriorityFeePerGas`, otherwise type 2 transaction is used.
* [EST-17] eth_sendTransaction **MUST** use 0x0 for `value` when not specified in the transaction.
* [EST-18] eth_sendTransaction **MUST** use the `from` address's nonce when `nonce` is not specified.
* [EST-19] eth_sendTransaction **MUST** error with code -32000 when `gasPrice` is used with `maxFeePerGas` and/or `maxPriorityFeePerGas`.
* [EST-20] eth_sendTransaction **MUST** error with code -32000 when `gas` is not enough to complete the transaction.
* [EST-21] eth_sendTransaction **MUST** error with code -32000 when `gas` exceeds block gas limit.
* [EST-22] eth_sendTransaction **MUST** error with code -32000 when `gasPrice` causes transaction to exceed the transaction fee cap.
* [EST-23] eth_sendTransaction **MUST** error with code -32000 when the `from` address does not have enough Ether to pay for the transaction.
* [EST-24] eth_sendTransaction **MUST** error with code -32000 when `nonce` is too low.
* [EST-25] eth_sendTransaction **MUST** error with code -32000 when `maxFeePerGas` causes transaction to exceed the transaction fee cap.
* [EST-26] eth_sendTransaction **MUST** error with code -32000 when `maxPriorityFeePerGas` is greater than `maxFeePerGas`.
* [EST-27] eth_sendTransaction **MUST** error with code -32000 when the user did not increase the `maxFeePerGas` enough when trying to replace a pending transaction.
* [EST-28] eth_sendTransaction **MUST** error with code -32000 when deploying contract with no `data`/`input`.
* [EST-29] eth_sendTransaction **MUST** error with code -32000 when `data`/`input` that is trying to be deployed causes an EVM error.
* [EST-30] eth_sendTransaction **MUST NOT** check validity of `data`/`input` whenever `gas` is specified.
* [EST-31] eth_sendTransaction **MUST** estimate the amount of gas needed to complete the transaction and use that value for `gas` when not specified.
* [EST-32] eth_sendTransaction **MUST** use 0x0 for `gas` when null.
* [EST-33] eth_sendTransaction **MUST** use 0x0 for `gasPrice` when null.
* [EST-34] eth_sendTransaction **MUST** error with code -32000 when attempting to sign a transaction with an incorrect `chainId`.
* [EST-35] eth_sendTransaction **MUST** use client price per unit gas + 7wei and client price per unit gas - 7wei for `maxFeePerGas` and `maxPriorityFeePerGas` when they are not specified.
* [EST-36] eth_sendTransaction **MUST** use `maxPriorityFeePerGas` + 14wei for `maxFeePerGas` and `gasPrice` when only `maxPriorityFeePerGas` is specified.
* [EST-37] eth_sendTransaction **MUST** use client price per unit gas - 7wei for `maxPriorityFeePerGas` when only `maxFeePerGas` is specified.
* [EST-38] eth_sendTransaction **MUST** error with code -32000 when trying to send a transaction while syncing to the network.
## eth_estimateGas
* [EEG-1] eth_estimateGas **MUST** return the estimated amount of gas the given `transaction` will take to execute.
* [EEG-2] eth_estimateGas **MUST** check the `from` account balance when `value` is used to see if the account has enough Ether to execute the given `transaction`.
* [EEG-3] eth_estimateGas **MUST** error with code -32000 when the `from` address does not contain enough Ether to execute the given `transaction`.
* [EEG-4] eth_estimateGas **MUST** use 0x0000000000000000000000000000000000000000 for `from` when it is not specified.
* [EEG-5] eth_estimateGas **MUST** error with code -32000 when estimating a contract creation that causes an error within the EVM.
## eth_getBlockByHash
* [EGBH-1] eth_getBlockByHash **MUST** return the block information for the block with the given `block hash`.
* [EGBH-2] eth_getBlockByHash **MUST** return null when the given `block hash` does not correspond to a block.
* [EGBH-3] eth_getBlockByHash **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBH-4] eth_getBlockByHash **MUST** return block information requested when available while syncing to the network, otherwise it **MUST** return null.
* [EGBH-5] eth_getBlockByHash **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
---
## eth_getBlockByNumber
* [EGBN-1] eth_getBlockByNumber **MUST** return the block information for the block with the given `block number` or `block tag`.
* [EGBN-2] eth_getBlockByNumber **MUST** return null when the given `block number` does not correspond to a block. 
* [EGBN-3] eth_getBlockByNumber **MUST** error with code -32000 when the block information is not available due to state pruning.
* [EGBN-4] eth_getBlockByNumber **MUST** return block information requested when available while syncing to the network, otherwise it **MUST** return null.
* [EGBN-5] eth_getBlockByNumber **MUST** return the block information for the latest synced block when using `block tag` "latest" while the client is syncing to the network.
* [EGBN-7] eth_getBlockByNumber **MUST** 
* [EGBN-6] eth_getBlockByNumber **MUST** return block information with only transaction hashes when `hydrated transactions` is false. Otherwise, it should include full transaction objects.
* When sending batch requests will ignore second request if it doesn't have an ID, but if first request has no ID it's a parse error.
---
## eth_getTransactionByHash
* [EGTH-1] eth_getTransactionByHash **MUST** return the transaction object for the transaction with the given `transaction hash`.
* [EGTH-2] eth_getTransactionByHash **MUST** return null when the given `transaction hash` does not correspond to a transaction.
* [EGTH-3] eth_getTransactionByHash **MUST** return the transaction object requested when available while syncing to the network, otherwise it **MUST** return null.
* [EGTH-4] eth_getTransactionByHash **MUST** error with code -32000 when the transaction information is not available due to state pruning.
## eth_getTransactionByBlockHashAndIndex
* [EGTHI-1] eth_getTransactionByBlockHashAndIndex **MUST** return the transaction object with the given `block hash` and `transaction index` within the block.
* [EGTHI-2] eth_getTransactionByBlockHashAndIndex **MUST** return null when the given `block hash` does not does correspond to a block.
* [EGTHI-3] eth_getTransactionByBlockHashAndIndex **MUST** return the transaction object requested when available while syncing to the network, otherwise it **MUST** return null.
* [EGTHI-4] eth_getTransactionByBlockHashAndIndex **MUST** return null when there is no transaction at the given `transaction index` in the requested block.
* [EGTHI-5] eth_getTransactionByBlockHashAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.

## eth_getTransactionByBlockNumberAndIndex
* [EGTNI-1] eth_getTransactionByBlockNumberAndIndex **MUST** return the transaction object with the given `block number` or `block tag` and `transaction index` within the block.
* [EGTNI-2] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `block number` does not correspond to a block.
* [EGTNI-3] eth_getTransactionByBlockNumberAndIndex **MUST** return the transaction object requested when available while syncing to the network, otherwise it **MUST** return null.
* [EGTNI-4] eth_getTransactionByBlockNumberAndIndex **MUST** use the latest synced block when using `block tag` "latest" while syncing to the network.
* [EGTNI-5] eth_getTransactionByBlockNumberAndIndex **MUST** return null when using `block tag` "pending" while syncing to the network.
* [EGTNI-6] eth_getTransactionByBlockNumberAndIndex **MUST** return null when using `block tag` "earliest" while syncing to the network.
* [EGTNI-7] eth_getTransactionByBlockNumberAndIndex **MUST** return null when the given `transaction index` does not exist in the requested block.
* [EGTNI-8] eth_getTransactionByBlockNumberAndIndex **MUST** error with code -32000 when the transaction or block information is not available due to state pruning.
## eth_getTransactionReceipt
* [EGTR-1] eth_getTransactionReceipt **MUST** return the transaction receipt for the transaction with the given `transaction hash`.
* [EGTR-2] eth_getTransactionReceipt **MUST** return null when the given `transaction hash` does not correspond to a transaction.
* [EGTR-3] eth_getTransactionReceipt **MUST** return null when the transaction is still pending.
* [EGTR-4] eth_getTransactionReceipt **MUST** return the transaction receipt requested when available while syncing to the network, otherwise it **MUST** return null.
## eth_newFilter
* [ENF-1] eth_newFilter **MUST** return the filter id of the filter created on the node with the given parameters.
* [ENF-2] eth_newFilter **MUST** allow `fromBlock` and `toBlock` to use both block numbers and block tags.
* [ENF-3] eth_newFilter **MUST** allow `from` and `to` to be used instead of `fromBlock` and `toBlock`.
* [ENF-4] eth_newFilter **MUST** give precedence to `toBlock` and `fromBlock` when used with `to` and `from`.
* [ENF-5] eth_newFilter **MUST** use latest for `fromBlock` and or `toBlock` when it is not specified.
* [ENF-6] eth_newFilter **MUST** error with code -32000 when the `fromBlock` is greater than the `toBlock`, except when the `toBlock` is set to latest and `fromBlock` is ahead of the chain.
* [ENF-7] eth_newFilter **MUST** allow `blockhash` to be used instead of `fromBlock` and `toBlock`.
* [ENF-8] eth_newFilter **MUST** error with code -32000 when `blockhash` is used with `fromBlock` and or `toBlock` in the same request.
* [ENF-9] eth_newFilter **MUST** allow `address` to be a single address or an array of addresses.
* [ENF-10] eth_newFilter **MUST** use null for `address` when it is not specified or when it is an empty array.
* [ENF-11] eth_newFilter **MUST** allow `topics` array to contain more than 4 values.
## eth_newBlockFilter
* [ENBF-1] eth_newBlockFilter **MUST** return the id of the newly created block filter on the node. 
## eth_newPendingTransactionFilter
* [ENPTF-1] eth_newPendingTransactionFilter **MUST** return the id of the newly created pending transaction filter on the node.
## eth_uninstallFilter
* [EUF-1] eth_uninstallFilter **MUST** return true when the given filter has been successfully uninstalled, otherwise it **MUST** return false.
## eth_getFilterChanges
* [EGFC-1] eth_getFilterChanges **MUST** return the block hashes of new blocks the client received since the filter was called last or first created, when the `filter id` corresponds to a block filter.
* [EGFC-2] eth_getFilterChanges **MUST** return each block synced to the client when syncing to the network.
* [EGFC-3] eth_getFilterChanges **MUST** return the transaction hashes or each pending transaction received since the filter was last called or first created, when the `filter id` corresponds to a pending transaction filter.
* [EGFC-4] eth_getFilterChanges **MUST** return an empty array when calling a pending transaction filter while syncing to the network.
* [EGFC-5] eth-getFilterChanges **MUST** return all the logs that match the filters parameters since the filter was last called or first created, when the `filter id` corresponds to a regular filter.
* [EGFC-6] eth_getFilterChanges **MUST** return all the logs that match the filters parameters within each synced block since the filter was last called or first created when syncing to the network.
* [EGFC-7] eth_getFilterChanges **MUST** error with code -32000 when the given `filter id` does not correspond to an active filter on the node.
## eth_getFilterLogs
* [EGFL-1] eth_getFilterLogs **MUST** return the logs matching the filters parameters.
* [EGFL-2] eth_getFilterLogs **MUST** return the logs that match the filters parameters for the latest synced block when syncing to the network.
* [EGFL-3] eth_getFilterLogs **MUST** error with code -32000 when the given `filter id` does not correspond to an active filter on the node.
* [EGFL-4] eth_getFilterLogs **MUST** error with code -32000 when the given `filter id` corresponds to an active block filter or pending transaction filter on the node.
* [EGFL-5] eth_getFilterLogs **MUST** error with code -32005 when trying to return more than 1000 logs.
## eth_getLogs
* [EGL-1] eth_getLogs **MUST** return all of the logs that meet the filter requirements.
* [EGL-2] eth_getLogs **MUST** allow `fromBlock` and `toBlock` to use both block numbers and block tags.
* [EGL-3] eth_getLogs **MUST** allow `from` and `to` to be used instead of `fromBlock` and `toBlock`.
* [EGL-4] eth_getLogs **MUST** give precedence to `toBlock` and `fromBlock` when used with `to` and `from`.
* [EGL-5] eth_getLogs **MUST** error with code -32000 when the `fromBlock` is greater than the `toBlock`, except when the `toBlock` is set to latest and `fromBlock` is ahead of the chain.
* [EGL-6] eth_getLogs **MUST** use latest for `fromBlock` and or `toBlock` when it is not specified.
* [EGL-7] eth_getLogs **MUST** allow `blockhash` to be used in place of `toBlock` and `fromBlock`.
* [EGL-8] eth_getLogs **MUST** error with code -32602 when using `blockhash` with `fromBlock` and or `toBlock` in the same request.
* [EGL-9] eth_getLogs **MUST** allow `address` to be a single address or an array of addresses.
* [EGL-10] eth_getLogs **MUST** use null for `address` when it is not specified or when it is an empty array.
* [EGL-11] eth_getLogs **MUST** allow `topics` array to contain more than 4 values.
  * Will never return anything.
* [EGL-12] eth_getLogs **MUST** return logs that match the parameters from only the latest synced block when syncing to the network.
* [EGL-13] eth_getLogs **MUST** error with code -32005 when trying to return more than 1000 logs.

## 4.2 eth_call
* [EC-1] eth_call **MUST** return the result of the given transaction.
* [EC-2] eth_call **MUST** accept all current transaction types. Legacy transactions and [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) "typed" transactions.
* [EC-3] eth_call **MUST NOT** mine any transaction on the blockchain.
* [EC-4] eth_call **MUST** use the block requested by the `defaultBlockParameter` when interacting with contracts.
* [EC-5] eth_call **MUST** error with code -32000 when the `defaultBlockParameter` is ahead of the chain.
* [EC-6] eth_call **MUST** error with code -32000 when the requested state is not available.
* [EC-8] eth_call **SHOULD NOT** be allow to be called from an address where CODEHASH != EMPTYCODEHASH. [EIP-3607](https://eips.ethereum.org/EIPS/eip-3607)
* [EC-9] eth_call **MUST NOT** error if the transaction exceeds the gas or fee cap.
* [EC-7] eth_call **MUST** use 0x0000000000000000000000000000000000000000 as default `from` address when `from` is null or not specified. [Nethermind uses 0xf...fe] 
* [EC-10] eth_call **MUST** check `from` account balance has sufficient funds to "pay" for the transaction.
* [EC-11] eth_call **MUST** error with code -32000 account has insufficient funds to execute the transaction call.
* [EC-12] eth_call **MUST NOT** calculate cost of transactions when the `gas` and a price per unit of gas is not specified.   
* [EC-13] eth_call **MUST** allow `data` or `input` to be used when testing deployment or interacting with contracts.
* [EC-14] eth_call **MUST** use `input` when both `input` and `data` are specified. 
* [EC-15] eth_call **MUST** error with code -32000 when the `data`/`input` being deployed causes and error in the EVM.
* [EC-16] eth_call **MUST** error with code -32000 when the `gas` is too low to execute the call.
* [EC-17] eth_call **MUST** error with code -32000 when using `gasPrice` with `maxFeePerGas` or `maxPriorityFeePerGas`. 
* [EC-18] eth_call **MUST** replace the `chainId` with the Id of the network that the node is currently connected to when given an incorrect `chainId`.
* [EC-19] eth_call **MUST** error with code -32000 when using block number or block hash for `defaultBlockParameter` while syncing to the network.
* [EC-20] eth_call **MUST** return 0x0 when using block tags for `defaultBlockParameter` while syncing to the network.
## eth_hashrate
* [EH-1] eth_hashrate **MUST** return the hashes per second that the client is using to mine blocks.
* [EH-2] eth_hashrate **MUST** return 0x0 when the client does not have mining enabled.
* only returns submitted value for a short time that returns 0x00...0
## eth_submitHashrate
* [ESH-1] eth_submitHashrate **MUST** return true when the client successfully submits a `hashrate` and an `id`.
* [ESH-2] eth_submitHashrate **MUST** return true when the client submits their hashrate while not mining.
* [ESH-3] eth_submitHashrate **MUST** return true when the client submit their hashrate while syncing to the network.
* [ESH-4] eth_submitHashrate **MUST** submit 0x0 when `hashrate` is null.
* [ESH-5] eth_submitHashrate **MUST NOT** error when `id` is equal to the `id` or another mining client.
## eth_getWork
* [EGW-1] eth_getWork **MUST** error with code -32000 when mining is not enabled.
* [EGW-2] eth_getWork **MUST** return an array containing the block header POW-hash, the seed hash for the DAG, the target condition, and the block number for the block being mined.
## eth_submitWork
* [ESW-1] eth_submitWork **MUST** return true when submitting the correct parameters to claim the block reward, otherwise false.
# Errors
Error codes between-32768 and -32000 are reserved for JSON-RPC errors, where -32000 to -32099 are for Execution layer API errors
This table has been taken from the initial version of the JSON-RPC API spec that was never finalized. 
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

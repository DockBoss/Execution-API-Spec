# Edge cases of Ethereum JSON RPC endpoints 2.0(where shit gets real)

This is a progress report/checklist

---

## What I am testing

* geth
* nethermind
* besu
* openethereum
* erigon
* gancahe
* hardhat

All clients share the same 46 endpoints. listed below.

---
## Endpoints

 endpoint  Status 
------
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
* eth_feeHistory data collection
* eth_sign
* eth_signTransaction
* eth_sendTransactiondata collected
* eth_sendRawTransaction
* eth_call
* eth_estimateGasdata collected
* eth_getBlockByHash
* eth_getBlockByNumber
* eth_getTransactionByHash
* eth_getTransactionByBlockHashAndIndex
* eth_getTransactionByBlockNumberAndIndex
* eth_getTransactinRecipt
* eth_getUncleByBlockHashAndIndex
* eth_getUncleByBlockNumberAndIndex
* eth_newFilterdata collection
* eth_newBlockFilter
* eth_newPendingTransactinFilter
* eth_uninstallFilter
* eth_getFilterChangesdata collected
* eth_getFilterLogsdata collection
* eth_getLogsdata collection
* eth_getWork
* eth_submitWork
* eth_submitHashrate
___

## I think these are all deprecated (at least in geth they are)
* db_putString
* db_getString
* db_putHex
* db_getHex
* shh_version
* shh_newIdentity
* shh_hasIdentity
* shh_newGroup
* shh_addToGroup
* shh_newFilter
* shh_uninstallFilter
* shh_getFilterChanges
* shh_getMessages 
* eth_getCompilers
* eth_compileLLL
* eth_compileSolidity
* eth_compileSerpent

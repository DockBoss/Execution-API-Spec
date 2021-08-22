## web3_clientVersion

## web3_sha3

## net_version

## net_peerCount

## net_listening

## eth_protocolVersion

## eth_syncing
* If the client is syncing it **MUST** return the current status of the sync, otherwise it **MUST** return false.

## eth_coinbase

* The client **MUST** return the first account it has the private key for, otherwise it **MUST** throw an exception.

## eth_mining

## eth_hashrate

## eth_gasPrice

## eth_accounts
* If the cleint owns any ethereum addresses it **MUST** return them, otherwise it **MUST** return an empty array.
[previous conversaction, where it was deemed unnecessary](https://github.com/ethereum/execution-apis/pull/47)

## eth_blockNumber

* The client **MUST** return the latest fully validated/verified block on the best known canonical chain.

## eth_getBalance

## eth_getStorageAt

## eth_getTransactionCount

## eth_getBlockTransactionCountByHash

## eth_getBlockTransactionCountByNumber
* If the client has a block equal to the `block_number` parameter it **MUST** return the number of transactions the block conatins, otherwise it **MUST** return null.

[previous conversation](https://github.com/ethereum/execution-apis/pull/54)
## eth_getUncleCountByHash

## eth_getUncleCountByNumber

## eth_getCode

## eth_sign

## eth_signTransaction

## eth_sendTransaction

## eth_sendRawTransaction

## eth_call

## eth_estimateGas

## eth_getBlockByHash

## eth_getBlockByNumber

## eth_getTransactionByHash

## eth_getTransactionByBlockHashAndIndex

## eth_getTransactionByBlockNumberAndIndex

## eth_getTransactinRecipt

## eth_getUncleByBlockHashAndIndex

## eth_getUncleByBlockNumberAndIndex

## eth_getCompilers

## eth_compileLLL

## eth_compileSolidity

## eth_compileSerpent

## eth_newFilter

## eth_newBlockFilter

## eth_newPendingTransactinFilter

## eth_uninstallFilter

## eth_getFilterChanges

## eth_getFilterLogs

## eth_getLogs

## eth_getWork

## eth_submitWork

## eth_submitHashrate

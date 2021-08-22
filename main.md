## web3_clientVersion
* **MUST**  return the current version of the client along with the operating system type and language version

## web3_sha3
* **MUST** return the Keccak-256 hash of `inputData` parameter

## net_version
* If the client is connected to a network it **MUST** return the ID of the network

## net_peerCount
* If the client is connected to a network it **MUST** return the number of peers currently connected to the client

## net_listening
* If the client is currently listening for network connections it **MUST** return true, otherwise it **MUST** return false.

## eth_protocolVersion

## eth_syncing
* If the client is syncing it **MUST** return the current status of the sync, otherwise it **MUST** return false.

## eth_coinbase

* The client **MUST** return the first account it has the private key for, otherwise it **MUST** throw an exception.

## eth_mining
* If the client is actively mining new blocks it **MUST** return true, otherwise it **MUST** return false.

## eth_hashrate
* **MUST** return the number of hashes per second the client is using to mine.

## eth_gasPrice
* If the client is connected to a network it **MUST** return the price per unit of gas, otherwise it **MUST** return `0x3b9aca00`.

* `0x3b9aca00` might be geth only, geth dev returns `0x3b9aca01`

## eth_accounts
* If the cleint owns any ethereum addresses it **MUST** return them, otherwise it **MUST** return an empty array.

[previous conversaction, where it was deemed unnecessary](https://github.com/ethereum/execution-apis/pull/47)

## eth_blockNumber

* The client **MUST** return the latest fully validated/verified block on the best known canonical chain.

## eth_getBalance
* If the `address` parameter exists on chain it **MUST** reuturn the Eth balance of that address at the block specified in the `block` parameter.
* If address does not exist or has no Eth it **MUST** return `0x0`

## eth_getStorageAt
* If the `address` parameter points to a contract it **MUST** return the value stored in the contracts storage at the `storage_slot` parameter, otherwise it **MUST** return (I forgot to record my result of this case, I will test it and update when I am home on Tuesday) but probably `0x0`

## eth_getTransactionCount
* If the `address` parameter exists on chain it **MUST** return the nonce of that address at the block specified in the `block` parameter, otherwise it **MUST** return `0x0` if the address does not exist on chain.

## eth_getBlockTransactionCountByHash
* If the client has a block assosiated with the hash in the `block_hash` parameter it **MUST** return the number of transactions the block conatins, otherwise it **MUST** return null.

## eth_getBlockTransactionCountByNumber
* If the client has a block equal to the `block_number` parameter it **MUST** return the number of transactions the block conatins, otherwise it **MUST** return null.

[previous conversation](https://github.com/ethereum/execution-apis/pull/54)
## eth_getUncleCountByBlockHash
* If the client has a block associated with the block hash in the `block_hash` parameter it **MUST** return the number of uncles the block has, otherwise it **MUST** return null.

## eth_getUncleCountByNumber
* If the client has a block equal to the `block_number` parameter it **MUST** return the number of uncles the block has, otherwise it **MUST** return null.

## eth_getCode
* If the `address` parameter exists on chain it **MUST** return the bytecode representation of the contracts functions, otherwise it **MUST** return `0x0`

## eth_sign
* If the address asociated with the `address` parameter is unlocked it **MUST** return the ethereum specific signature of the `message` parameter, otherwise it must throw an exception.

## eth_signTransaction
* The address in the `from` parameter **MUST** be unlocked for the call to return.
* The call **MUST** have the `gas`, `gasPrice`, and `to` and/or `data` parameters for the call to return.

## eth_sendTransaction


## eth_sendRawTransaction
* If the values in the raw transaction gets sent it **MUST** return the transaction hash, otherwise it **MUST** error.

## eth_call

## eth_estimateGas

## eth_getBlockByHash
* If the client has a block assosiated with the hash in the `block_hash` parameter it **MUST** return it, otherwise it **MUST** return null.

* If the `full_transaction` parameter is true, **MUST** include the full transaction deatails for every transaction in the block, otherwise it **MUST** return only the transcation hash for every transaction in the block.

## eth_getBlockByNumber
* If the client has a block equal to the block in the `block_number` parameter it **MUST** return it, otherwise it **MUST** return null.

* If the `full_transaction` parameter is true, **MUST** include the full transaction deatails for every transaction in the block, otherwise it **MUST** return only the transcation hash for every transaction in the block.

## eth_getTransactionByHash
* If the client has a transaction assosiated with the hash in the `transactionHash` parameter it **MUST** return it.

## eth_getTransactionByBlockHashAndIndex
* If the client has a block associated with the `block_hash` parameter it **MUST** return the trasnaction equal to the `transaction_index` parameter, otherwise it **MUST** return null if the transaction or block hash does not exist.

## eth_getTransactionByBlockNumberAndIndex
* If the client has a block equal to the `block_number` parameter it **MUST** return the number of transactions the block conatins, otherwise it **MUST** return null.

## eth_getTransactinRecipt
* If the client has a transaction associated with the `transaction_hash` parameter it **MUST** return the receipt of the transaction, otherwise it **MUST** return null.

## eth_getUncleByBlockHashAndIndex
* If the client has a block associated with the `block_hash` parameter it **MUST** return the uncle block associated with `uncle_index` parameter, otherwise it **MUST** return null if the block does not have an uncle at the given index.

## eth_getUncleByBlockNumberAndIndex
* If the client has a block equal to the `block_number` parameter it **MUST** return the uncle block associated with `uncle_index` parameter, otherwise it **MUST** return null if the block does not have an uncle at the given index.

## eth_newFilter

## eth_newBlockFilter
* If the client is connected to the netwotk it **MUST** return the filter id.

## eth_newPendingTransactinFilter
* If the client is connected to the netwotk it **MUST** return the filter id.

## eth_uninstallFilter
* If the client has a filter equal to the `filter` parameter it **MUST** return true, otherwise false.

## eth_getFilterChanges

## eth_getFilterLogs

## eth_getLogs

## eth_getWork

## eth_submitWork

## eth_submitHashrate

# `eth_getTrasnactionByBlockHashAndIndex`

* If the client has a block associated with the `block_hash` parameter it **MUST** return the trasnaction equal to the `transaction_index` parameter, otherwise it **MUST** return null if the transaction or block hash does not exist.
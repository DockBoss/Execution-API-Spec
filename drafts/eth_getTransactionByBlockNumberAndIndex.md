# `eth_getTransactionByBlockNumberAndIndex`

* If the client has a block equal to the `block_number` parameter it **MUST** return the trasnaction equal to the `transaction_index` parameter, otherwise it **MUST** return null if the transaction or block does not exist.
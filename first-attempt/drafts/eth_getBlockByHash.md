# `eth_getBalanceByHash`

* If the client has a block assosiated with the hash in the `block_hash` parameter it **MUST** return it, otherwise it **MUST** return null.

* If the `full_transaction` parameter is true, **MUST** include the full transaction deatails for every transaction in the block, otherwise it **MUST** return only the transcation hash for every transaction in the block.

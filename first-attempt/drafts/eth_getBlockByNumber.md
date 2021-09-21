# `eth_getBlockByNumber`

* If the client has a block equal to the block in the `block_number` parameter it **MUST** return it, otherwise it **MUST** return null.

* If the `full_transaction` parameter is true, **MUST** include the full transaction deatails for every transaction in the block, otherwise it **MUST** return only the transcation hash for every transaction in the block.
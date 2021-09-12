# `eth_getUncleByBlockHashAndInex`

* If the client has a block associated with the `block_hash` parameter it **MUST** return the uncle block associated with `uncle_index` parameter, otherwise it **MUST** return null if the block does not have an uncle at the given index.
# `getUncleByBlockNumberAndIndex`

* If the client has a block equal to the `block_number` parameter it **MUST** return the uncle block associated with `uncle_index` parameter, otherwise it **MUST** return null if the block does not have an uncle at the given index.
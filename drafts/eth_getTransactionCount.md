# `eth_getTransactionCount`

* If the client has an address equal to the `address` parameter it **MUST** return the nonce of that address at the block specified in the `block` parameter, otherwise it **MUST** return `0x0` if the address does not exist within the client
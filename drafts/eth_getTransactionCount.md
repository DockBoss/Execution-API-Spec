# `eth_getTransactionCount`

* If the `address` parameter exists on chain it **MUST** return the nonce of that address at the block specified in the `block` parameter, otherwise it **MUST** return `0x0` if the address does not exist on chain.

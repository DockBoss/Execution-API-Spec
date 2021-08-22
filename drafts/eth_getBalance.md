# `eth_getBalance`

* If the `address` parameter exists on chain it **MUST** reuturn the Eth balance of that address at the block specified in the `block` parameter.
* If address does not exist or has no Eth it **MUST** return `0x0`

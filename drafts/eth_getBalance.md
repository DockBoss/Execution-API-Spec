# `eth_getBalance`

* If the client has an address equal to the `address` parameter it **MUST** reuturn the Eth balance of that address at the block specified in the `block` parameter.
* If address does not exist or has no Eth it **MUST** return `0x0`
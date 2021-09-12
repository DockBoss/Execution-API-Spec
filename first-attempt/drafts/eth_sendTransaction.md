# `eth_sendTransaction`
* If the user has the private key for the `from` parameter and has at least the `to` or the `data` parameter it **MUST** return the transaction hash, otherwise it **MUST** error if the transaction does not go through.

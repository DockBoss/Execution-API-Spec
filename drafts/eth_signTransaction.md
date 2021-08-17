# `eth_signTransaction`

* The address in the `from` parameter **MUST** be unlocked for the call to return.
* The call **MUST** have the `gas`, `gasPrice`, and `to` and/or `data` parameters for the call to return.

# Notes

* Ethereum Wiki says everything except From, to or data is optional, but in practice I found that the only real optional value is value
* I also found that it will compile some transactions that will not go trough if you tried to use sendRawTransaction or send it as a regular transaction. I don't know if this is okay or if should not work for a transaction that will not work

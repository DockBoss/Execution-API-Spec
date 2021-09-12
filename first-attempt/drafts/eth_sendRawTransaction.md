# `eth_sendRawTransaction`

* If the values in the raw transaction gets sent it **MUST** return the transaction hash, otherwise it **MUST** error.

# Notes

* I need to look again, but I found some transactions that went through but returned null when I tried to get the transation recipt 
* It could be the transactions that shouldn't go through but get compiled from eth_signTransaction OR it could be another unknown issue
* This could be big or a mistake on my part
* The case I found this on was when I would fill the `data` with opcodes that are invalid. 

# `eth_gasPrice`

* If the client is connected to a network it **MUST** return the price per unit of gas, otherwise it **MUST** return `0x3b9aca00`.

* `0x3b9aca00` might be geth only, geth dev returns `0x3b9aca01`
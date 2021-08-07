# `eth_getBalanceByHash`

**MUST** return the block object assosiated with the given hash when it exists

**OR** null if the block does not exist

**MUST** include the full transaction for every transaction in the block if the full transaction parameter is true

**OR** just the hashes for each transaction if the parameter is false

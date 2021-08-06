# `eth_getBalanceByHash`

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC-2119](https://www.ietf.org/rfc/rfc2119.txt).
Speciation | Description
---|---
1| eth_getBalanceByHash MUST return the block object assosiated with the given hash|
1.1| eth_getBalanceByHash MUST retun null if no block is assosiated with the given hash|
2| eth_getBlockByHash MUST return all transaction data within the given block when the second parameter is true|
|2.1| eth_getBlockByHash MUST only return all transaction hashes within the given block when the second parameter is false|
# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/)


## open RPC format

**MUST** return the block object assosiated with the given hash **OR** null if there is no block object assoiated with the given hash

**MUST** return all transaction data within the block object if the Full transactions parameter is true **IF** false it will return only the transaction hashes within the block object
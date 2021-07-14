# `eth_blockNumber`

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC-2119](https://www.ietf.org/rfc/rfc2119.txt).
Speciation | Description
---|---
1| eth_blockNumber MUST return the current finalized block on the chosen network |
1.1 | eth_blockNumber MUST return 0x0 if client is not synced with the network |

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

# notes

I think it does not have any edge cases but this could be naive of me

Not sure what actually happes seem to have a delay, but that may be the "delay" of just waiting to recieve the block or infura error

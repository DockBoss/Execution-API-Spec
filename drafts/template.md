# Draft
# ``

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC-2119](https://www.ietf.org/rfc/rfc2119.txt).
Speciation | Description
|---|---|
| #<br>S<br>## TEST|tets|

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


**MUST** return the block object assosiated with the given hash when it exists

**OR** null if the block does not exist

**MUST** include the full transaction for every transaction in the block if the full transaction parameter is true

**OR** just the hashes for each transaction if the parameter is false
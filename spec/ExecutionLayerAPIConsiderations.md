# Execution Layer API Considerations
The purpose of this document is to summarize the notable "*features*" and inconsistencies found while writing the JSON-RPC API specification. The current draft of the specification can be found [here](https://github.com/DockBoss/execution-apis/blob/main/specs/executionAPISpec.md) and the PR with the discussion can be found [here](https://github.com/ethereum/execution-apis/pull/149).

## Table of Contents
  - [Background](#background)
  - [Deprecations](#deprecations)
  - [Default Block Parameter vs Block Parameter](#default-block-parameter-vs-block-parameter)
  - [Error Messages](#error-messages)
## Background
The specification was written using Geth as the "source of all truth". All behavior described in the document correlates to how Geth currently operates. I would've described what the expected behavior **should** be, but I didn't think I had the experience to make those calls. Plus this way the spec can be used as check list to showcase undesired behavior that still needs to be changed within Geth.
## Deprecations
After The Merge there will be a number of endpoints that will serve no purpose and should be deprecated. This list is fairly obvious, but I haven't gotten a consensus on the it yet.

Post Merge Deprecations:
- eth_coinbase
- eth_etherbase
- eth_mining
- eth_getWork
- eth_submitWork
- eth_hashrate
- eth_submitHashrate

I am also wondering if it makes sense to note endpoints that will most likely be deprecated in the future, but not after The Merge. The endpoints that makes sense here would be the four `eth_getUncle**` endpoints. They still might be useful Post Merge, but they will most likely not be needed in a Post Merge world.
## Default Block Parameter vs Block Parameter
I have always seen it written as the default block parameter, but Micah brought up the point that the `default` seems unnecessary. Though in my honest opinion default block parameter has a better ring than just block parameter, but I understand that this is probably not a great determining factor.
## Error Messages
JSON-RPC 2.0 Specification reserves codes -32000 to -32099 for custom errors. Though I have gotten a -32005 before a vast majority if not all of the non-standard errors return -32000. Though they do have different error messages for the  different situations. In [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474) an earlier version of the RPC spec has a table of error codes that I used in hopes that the clients based the error messages off of the EIP, but it doesn't seem to be the case.
## Transaction types
Geth doesn't have any transaction types at all

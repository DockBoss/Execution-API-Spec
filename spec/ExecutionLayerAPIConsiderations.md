# Execution Layer API Considerations
The purpose of this document is to summarize the notable "*features*" and inconsistencies found while writing the JSON-RPC API specification. The current draft of the specification can be found [here](https://github.com/DockBoss/execution-apis/blob/main/specs/executionAPISpec.md) and the PR with the discussion can be found [here](https://github.com/ethereum/execution-apis/pull/149).

## Table of Contents
  - [Background](#background)
  - [Deprecations](#deprecations)
  - [Default Block Parameter vs Block Parameter](#default-block-parameter-vs-block-parameter)
  - [Error Messages](#error-messages)
## Disclamer
I am just starting out my career in Computer Science/Software Engineering. I have realized that I am not very good at organization of information as most of you Devs are. I am working to improve this skill, but in the meantime please bear with me as you read through this somewhat disorganized document.

## Specs
Below is the Ethereum Execution Layer JSON-RPC API specifications.
I know that there **should** only be one, but I was not too sure on how I should organize the spec when clients behave differently.
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
I have found that transactions are not determined by their transaction `type`. After asking around I found that `type` is not even a field in Geth when sending transactions. [Geth issue](https://github.com/ethereum/go-ethereum/issues/24179).
## Required parameters
What should the specified behavior be when a required parameter is an empty string?
  ### Geth
  * eth_signTransaction
    * [ESNT-10] when `gas` is an empty string it will default to `0x0`.
    * [ESNT-13] when `gasPrice`, `maxFeePerGas`, or `maxPriorityFeePerGas` is an empty string it will default to `0x0`. 
    * [ESNT-17] when `nonce` is an empty string it will default to `0x0`.
## Verifying Contract `Data`/`Input`
I have found that some endpoints like eth_estimateGas verifies the given `data` and errors when the `data` uses invalid opcodes or causes EVM errors. While other endpoints do not verify the `data` at all, this causes some interesting and unexpected behavior.  EX.
* eth_fillTransaction **Does Not** verify the `data` when the `gas` is specified, but does not verify the `data` when it has to estimate the `gas`.
* eth_signTransaction **Does Not** verify the `data` allowing you to sign a transaction contains EVM errors or invalid opcodes.
* eth_sendRawTransaction **Does Not** verify the `data` allowing you to deploy contract containing EVM errors or invalid opcodes. This results in a contract with no code.
* eth_sendTransaction **Does Not** verify the `data` when the `gas` is specified allowing you to deploy contract containing EVM errors or invalid opcodes. This results in a contract with no code.
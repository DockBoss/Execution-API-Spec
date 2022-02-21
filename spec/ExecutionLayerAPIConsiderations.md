# Execution Layer API Considerations
The purpose of this document is to summarize the notable "*features*" and inconsistencies found while writing the JSON-RPC API specification. The current draft of the specification can be found [here](https://github.com/DockBoss/execution-apis/blob/main/specs/executionAPISpec.md) and the PR with the discussion can be found [here](https://github.com/ethereum/execution-apis/pull/149). The overwhelming but nescessary spread sheet showcasing the inconsistencies can be found [here]()
## Table of Contents
  - [Background](#background)
  - [Deprecations](#deprecations)
  - [Default Block Parameter vs Block Parameter](#default-block-parameter-vs-block-parameter)
  - [Error Messages](#error-messages)
## Disclamer
I am just starting out my career in Computer Science/Software Engineering. I have realized that I am not very good at organization of information as most of you Devs are. I am working to improve this skill, but in the meantime please bear with me as you read through this somewhat disorganized document.


## Background
The specification was written using Geth as the "source of all truth". All behavior described in the document correlates to how Geth currently operates. I would've described what the expected behavior **should** be, but I didn't think I had the experience to make those calls. Plus this way the spec can be used as check list to showcase undesired behavior that still needs to be changed within Geth.

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

# EXTRA INFO REMOVE BEFORE PUBLISHING
## network syncing
Should we have the same behaviors for endpoints when they are not synced to the network.
EX
## eth_call
* Address length?
  * Nethermind allows `to` to be 39 bits long without error
    * Is there any reason for this or is it a bug?
* when the `from` parameter is not specified what address should be used?
  * Geth uses 0x0...
  * Nethermind uses 0x0...fffffffffffffffffffffffffffffffffffffffe
  * Ganache uses the generated coinbase
  * Hardhat uses first generated address not generated coinbase
* What accounts should be allowed to make a call?
  * are we going to apply EIP-3607 to eth_call?
  * Right now I can use my Metamask addresses to make calls to mainnet on infura, so can everyone else then. Should you be able to make calls from a unknown address?
    * I don't really see a an issue with this, but why does eth call need a `from` address?
    * does it get logged anywhere? 
* Should it error when `gas` is null and/or zero?
  * ganache allows it to be null
  * nethermind allows it to be zero
* Can `value` be null?
  * Geth and Ganache allow it 
* Do we need to check `from` balance when using eth_call?
  * I Think all clients implement this, but I am not sure why
  * I am assuming that it is to ensure that you can't make "computationally" expensive calls that could possibly flood a node?
    * but wouldn't worst case it just take one node down?
    * also if we make it a **MUST** that EIP-3607 is implemented on eth_call as well then this should'nt be as necessary right?
* should GP, MFPG, and MPFPG be allowed to be null?
  * Geth interpreted as 0 for GP and (MFPG and MPFPG)
  * Geth errors when just MFPG is null
  * Ganache interpreted as 0 for type 1 and 4a817c800 for type 2
* should MFPG be allowed to be zero?
  * Nethermind allows it  

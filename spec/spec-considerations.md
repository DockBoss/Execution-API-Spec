# -WIP I plan to refine this some more and bring it to All Core Devs soon.
# Execution API Spec Considerations
A list of points to discuss pertaining the JSON-RPC API

* network syncing
* Deprecated endpoint
* Added endpoints
* eth_call
* Null returns
* Filters
* Default block parameters
* Error codes
---

## network syncing

Should we have the same behaviors for endpoints when they are not synced to the network.
EX
```
A user just had their parents send them 128,000$ from their "rainy day" fund so they can run their own validator node. This user has no background with ethereum or running nodes. Now as a disclaimer what this user does have is a background/addiction to finishing lines(and no this isn't the same addiction to finishing lines as you Devs have or maybe it is, what do I know) They start their the geth client for the first time with "geth --http" and starts making requests for information about the network before geth is finished syncing to the network. To prove to their parents that this is more that just a economic fad the user decided to showcase what ethereum can do. Their parents not understanding the future are not impressed and demand to see where their money is, so the user with his minimal knowledge of Ethereum places the call to the endpoint eth_getBalance with his account and receives "0x0"! His parents are furious they demand to know what he did with the money. The user distraught tries to reassure his parents that he got eth and it was in the account. The fighting does not stop for a whole day, and the already emotionally unfit the user kills himself out of rage and depression.
All because the client was not synced to the network fully and returns with the same confidence as when it is synced to the network.
```
This is why I think we should make sure that endpoints that require network data error when using them while not fully synced to the network.
This was also a exercise in writing my first user story. Not to brag but I am a regular ol Shakespeare with my user story tragedies.

## Deprecated endpoints
* What endpoints are going to be deprecated after The Merge. The only endpoints I can think of are:
  * eth_hashrate
  * eth_getWork
  * eth_submitWork
  * eth_submitHashrate
  * What about uncles? If POW is no longer in use then doesn't this mean that the issue of uncle blocks doesn't exist anymore?  so we can get rid of the related endpoints
  * and **Maybe** eth_mining? I am having a hard time finding where this is implemented.
    * I am not sure if this is saying "yes I am actively running the POW algorithm and am trying to get the block reward"
    * **OR** "yes I am actively receiving new transactions to be mined"?
       * *Every transaction is mined (included in a new block and propagated for the first time) once, but executed and verified by every participant in the process of advancing the canonical EVM state. This highlights one of the central mantras of blockchain: Don’t trust, verify.*
       * ^ I got this from[Ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/) and if this is the definition of mining then I don't think it should be deprecated after The Merge
  
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
* defaultBlockParameter
  * what should happen when the block the user wants to get the code from is note stored in the node?
    * should it error
    * or use latest block

## eth_getBlockByHash, eth_getBlockByNumber, and eth_getTransactionByHash 
  * returns null when no block/transaction exists with the given hash.
  * * Wouldn't it be better to error and say "this hash hash not been used for a block yet" instead?
    * I understand that this is technically not an error because one day this will be a valid hash
  * also happens for block number ahead of head
    

## eth_getTransactionByBlockHashAndIndex and eth_getTransactionByBlockNumberAndIndex
  * returns null when in situations above and when the given index is out of range
    * I do think this is should error, because that index will never exist in the requested finalized block. Where I understand the hash's might one day be valid

## eth_feeHistory
* fee history allows you to enter the same percentile multiply times and it will return it more than once.
  * I don't see this causing many issues
    * Though if a user was using eth_feeHistory for recording some fee statistics, a simple user mistake could skew the results without the user knowing what they did.

## Filters 
In theory you can delete filters other people generated and are currently using, right?
how long is the timeout? I looked for the implementation and I thought it was a globally incremented int is that true?

## Error codes and messages
* It looks like most clients use -32000 for every error that does not fit anyone of the predefined error messages.
  * I see that as an issue(but who the hell am I), there are 99 other error codes that can be used but are not. The messages are usually more helpful than the code


## defaultBlockParameter
Is it `default block parameter` or `block tag` or `block` as the official name?

# Questions

These are a list of questions that I personally have about the project, eth, or general development questions.



* Am I going to have to add a large glossary of Ethereum terms and definitions on this doc
  * or should I just link to the yellow paper to save myself from defining things that are already done
* Should I have user stories in this doc?
  * I am leaning towards no, but I am not sure
* How does Ethereum work after the merge.
  * So we remove POW, Mainnet is now the only shard.
  * To run a consensus client do you need to stake 32 Eth? or does everyone in a staking pool have run their own consensus client?(I assume not)
  * Then anyone with a consensus client also has to run an execution to actually do anything? 
    * Can anyone run an execution client without a consensus client?
    * or vise versa?
  * If this is the case will the clients ever converge? 
* General Dev/API question. When should something error and when shouldn't it
  * I see some but very few situations where null is returned but it just feels out of place.
* What is the deal with state pruning? what does it do? and who is going to use it?

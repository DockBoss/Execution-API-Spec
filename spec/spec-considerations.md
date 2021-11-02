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
## Main Purpose
[ref](https://ethereum-magicians.org/t/remote-procedure-call-specification/1537/35)

I am just now realizing that this documentation has been started many times and has not been finished over the past four years. I plan to break this cures whether it kills me or not.
I think it is about time that it is finished and standardized. I also think that we are at a very important point in Ethereum history.
As we are shifting the focus from "Let's get this shit working" to "Lets refine technology that will be used for decades to come and define what is going to be considered industry standards for anyone coming after us." That is an immense responsibility and requires a lot of very smart forward thinking people that come from many different backgrounds. I am very new to Ethereum and just starting out on my self-taught developer path to one day be one of these smart forward thinking people. As an attempt to do so I have been thinking a lot about Ethereum and the Execution layer API over these past few months. This document will outline the main questions and concerns that I have found.

## Disclaimer
As I stated above I am as green as it gets, so I want to inform **you** the reader that there is a chance that some sections might not make sense or ask questions that are already answered somewhere else. If that is the case I would appreciate feedback on it this doc and the Spec draft as well so I can learn and improve the quality of my work. Thank you :)

## Philosophical Questions
I am not sure if these are considered Philosophical or not, but I think these are the main questions that I think should be considered for the future of this API.
I attempt to answer these questions to the best of my knowledge and ability.
* What is the best product we can build now that will reliably and efficiently last for a decade or more?
  * Or what is the best product that we can implement now that makes it easiest to replace as better solutions are created in a decentralized network?
* In an ideal world what features/endpoints do we want the Execution layer API to have?
  * Is it an extension of what we have now?
  * Would it be a completely different API?
  * I think we should see what features the community would like to see as well.
* How do we standardize something while maintaining the ability to modify it for a given use case
* Can we build one API that would work across all clients to make one less thing to write from scratch
  * This could also allow the ability for teams to create custom modules for future clients or for extended functionality
* How are we going to ensure **TRUE** decentralization in a world where a majority of the users of Ethereum cannot afford to run their own node.
  * This is the most important question in my option.
  * Yes I like providers like infura and Metamask, but I don't think it makes sense to rely on an entity to be your "provider" to interact with a decentralized network.
  * I think we should figure out how to allow people to interact directly with nodes and not through some third party.
## What kind of API Types do we want to define?
There are going to be a number of different versions of the API as time goes on and it would be smart to define them in some sense.
I assume that there is going to be a lot of *"Read-only"*  APIs like Infura where you are not allowed to send transactions.
Then there will probably be some  *"Standard"* APIs that Implement only the required endpoints to allow full use.
And I assume this will be the biggest type we will see are *"Standard+"* APIs that have all the required endpoints and implement their own custom endpoints for some client specific tasks or other useful functionality. 
### What are we calling the different groups of endpoints?
 * modules
 * libraries
 * classes
 * ect..

## Do we want to stick with JSON-RPC?
I think now is the perfect time to design an implement what we really want this API to look like and how we want it to age and change overtime.
I obviously don't have the experience to determine this, but I think it should be discussed before I finish this document.

Here are some of my questions on the topic.
* Do we still want to support both HTTP and WS?
  * I don't see why not, just curious
* What are the perks of bidirectional communication?
  * Do we really need it for the execution layer API
* I have done a little digging and I found gRPC.
  * From what I have seen it is not useful for an external API.
    * But I did see an article about someone that used it for such purpose.
    * If it is as nice as it sounds and will have functionality for public APIs maybe we should consider it?
## How do we keep Ethereum decentralized???
I don't know too much about how wallets work and how the let you make transactions on the network. So they might be solving this problem, but I have no idea.
I pretty much stated my case on this point above, but I will go into detail here.

As Ethereum moves from POW to POS we are seeing a lot of improvements that are going to change Ethereum for the better, but I have noticed one downside that I haven't seen discussed yet (If it has please let me know as I would love to get informed and be a part of this process).
This downside is that users will be loosing true decentralization in the Ethereum network once POS is implemented. Right now if I wanted to deploy a smart contract without going trough any third parties all I would have to do is download geth and have an ssd with enough space to sync to the data. Once I am connected to the network all I have to do is send one transaction and I am done. 
Once POS is implemented myself and a majority of the people who use ethereum will lose out on this option. I would have to have an extra 100,000$ or so laying around that I could lock away for some amount of time. Download and setup a consensus client and an execution client just to do the same thing.

If my understanding of how Ethereum works is correct and so are my statements above, then I see this as the #1 issue in Ethereum right now. I also know that a majority of users will never want to or need to interact directly with the network, but I think it is more about preserving **TRUE** decentralization.
I think we need to figure out a way to allow any user that does not want to go through a third party a way to interact with the network. 

# Endpoint Considerations and behavior
## Deprecated endpoints
* What endpoints are going to be deprecated after The Merge. The only endpoints I can think of are:
  * eth_hashrate
  * eth_getWork
  * eth_submitWork
  * eth_submitHashrate
  * What about uncle endpoints?
  * and **Maybe** eth_mining? I am having a hard time finding where this is implemented.
    * I am not sure if this is saying "yes I am actively running the POW algorithm and am trying to get the block reward"
    * **OR** "yes I am actively receiving new transactions to be mined"?
       * *Every transaction is mined (included in a new block and propagated for the first time) once, but executed and verified by every participant in the process of advancing the canonical EVM state. This highlights one of the central mantras of blockchain: Don’t trust, verify.*
       * ^ I got this from[Ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/) and if this is the definition of mining then I don't think it should be deprecated after The Merge
### What About Uncles
If POW is no longer in use then doesn't this mean that the issue of uncle blocks doesn't exist anymore?
So we can get rid of the related endpoints and by extension the need for them at all in a POS world?

## Added Endpoints
What endpoints are going to need for a Post Merge Ethereum?
Is there any endpoints that are not necessary, but would be useful to add?

Like I stated above I think we should not only take the developers opinions, but the communities opinions as well. 
Because at the end of the day aren't we building this for the people?

## network syncing
Should we have the same behaviors for endpoints when they are not synced to the network.
EX
```
A user just had their parents send them 128,000$ from their "rainy day" fund so they can run their own validator node. This user has no background with ethereum or running nodes. Now as a disclaimer what this user does have is a background/addiction to finishing lines(and no this isn't the same addiction to finishing lines as you Devs have or maybe it is, what do I know) They start their the geth client for the first time with "geth --http" and starts making requests for information about the network before geth is finished syncing to the network. To prove to their parents that this is more that just a economic fad the user decided to showcase what ethereum can do. Their parents not understanding the future are not impressed and demand to see where their money is, so the user with his minimal knowledge of Ethereum places the call to the endpoint eth_getBalance with his account and receives "0x0"! His parents are furious they demand to know what he did with the money. The user distraught tries to reassure his parents that he got eth and it was in the account. The fighting does not stop for a whole day, and the already emotionally unfit the user kills himself out of rage and depression.
All because the client was not synced to the network fully and returns with the same confidence as when it is synced to the network.
```
This is why I think we should make sure that endpoints that require network data error when using them while not fully synced to the network.
This was also a exercise in writing my first user story. Not to brag but I am a regular ol Shakespeare with my user story tragedies.
## Filters 
In theory you can delete filters other people generated and are currently using, right?
how long is the timeout? I looked for the implementation and I thought it was a globally incremented int is that true?
## Error codes and messages
* It looks like most clients use -32000 for every error that does not fit anyone of the predefined error messages.
  * I see that as an issue(but who the hell am I), there are 99 other error codes that can be used but are not. The messages are usually more helpful than the code
* Do we still want to use the error codes defined in [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474)

## defaultBlockParameter
Is it `default block parameter` or `block tag` or `block` as the official name?
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


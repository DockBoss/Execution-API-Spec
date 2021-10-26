# Questions

These are a list of questions that I have about the project


* What endpoints are going to be deprecated after The Merge. The only endpoints I can think of are
  * eth_hashrate
  * eth_getWork
  * eth_submitWork
  * eth_submitHashrate 
  * and **Maybe** eth_mining? I am having a hard time finding where this is implemented.
    * I am not sure if this is saying "yes I am actively running the POW algorithm and am trying to get the block reward"
    * **OR** "yes I am actively receiving new transactions to be mined"?
       * *Every transaction is mined (included in a new block and propagated for the first time) once, but executed and verified by every participant in the process of advancing the canonical EVM state. This highlights one of the central mantras of blockchain: Don’t trust, verify.*
       * ^ I got this from[Ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining/) and if this is the definition of mining then I don't think it should be deprecated after The Merge
* Am I going to have to add a large glossary of Ethereum terms and definitions on this doc
  * or should I just link to the yellow paper to save myself from defining things that are already done
* Should I have user stories in this doc?
  * I am leaning towards no, but I am not sure
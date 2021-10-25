# -WIP
# Execution API Spec Considerations
A list of points to discuss pertaining the JSON-RPC API
---
---
## eth_call

* when the `from` parameter is not specified what address should be used?
  * Geth uses 0x0...
  * Nethermind uses 0x0...fffffffffffffffffffffffffffffffffffffffe
  * Besu 
  * Erigon
  * Ganache uses the generated coinbase
  * Hardhat uses first generated address not generated coinbase
* What accounts should be allowed to make a call?
  * I think both EOA and PRecompile?
    * I can use my Metamask addresses to make calls to mainnet on infura 
  * should you be able to make calls from a unknown address?
  * 
* Should it error when `gas` is null and/or zero?
  * ganache allows it to be null
  * nethermind allows it to be zero
* Should `data` be type data?
  * Geth and Hardhat error for uneven hex length
  * Nethermind and Ganache do not
* Can `value` be null?
  * Geth and Ganache allow it 
* Do we need to check `from` balance when using eth_call?
  * I Think all clients implement this, but I am not sure why
  * Can you send eth with call?
* should GP, MFPG, and MPFPG be allowed to be null?
  * Geth interpreted as 0 for GP and (MFPG and MPFPG)
  * Geth errors when just MFPG is null
  * Ganache interpreted as 0 for type 1 and 4a817c800 for type 2
* should MFPG be allowed to be zero?
  * Nethermind allows it
  
* Address length?
  * Nethermind allows `to` to be 39 bits long without error
* defaultBlockParameter
  * what should happen when the block the user wants to get the code from is note stored in the node?
    * should it error
    * or use latest block

## Error codes and messages
* It looks like that most clients use -32000 for every error that does not fit anyone of the predefined error messages.
  * I see that as an issue(but who the hell am I), there are 99 other error codes that can be used but are not. The messages are usually more helpful than the code
* Is it necessary or overkill to format the error struct/obj so they are the same order not matter what client you use?

## defaultBlockParameter
Is that the official parameter name? 

Is it implmented on all clients, I am not up to date on the pruning discussion. Will it be relevant in the future?

Is there going to be a source that is going to store block history so there is some historical source?
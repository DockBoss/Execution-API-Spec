# -WIP
# Execution API Spec Considerations
A list of points to discuss pertaining to the inconsistencies between the different implementations of the JSON-RPC API
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
  * should you be able to make calls from a unknown address?
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
* block identifier, Is it a must?
  * some clients don't allow the specifying a specific block depending on pruning settings 
    * is this okay? is there a use case for calling certain blocks or older versions of contracts? 
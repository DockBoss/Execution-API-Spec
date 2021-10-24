# Questions
* dr


* how are gasPrice an MFPG and MPFPG converted to each other when used in the wrong transaction
  *  or if values are even converted

# Notes

[EC-2.3] needs better wording

[EC-4] I know Eip isn't final, but I know it's implemented in geth and on track to final 

* 11.2  Make sure you don't have to have eth to be able to "deploy" a contract with eth_call not certain of current implementation

[EC-10.2] is this more of a parser issue than eth_call?


* data type information 
  
```
  type TxData interface {
	txType() byte // returns the type ID
	copy() TxData // creates a deep copy and initializes all fields

	chainID() *big.Int
	accessList() AccessList
	data() []byte
	gas() uint64
	gasPrice() *big.Int
	gasTipCap() *big.Int
	gasFeeCap() *big.Int
	value() *big.Int
	nonce() uint64
	to() *common.Address

	rawSignatureValues() (v, r, s *big.Int)
	setSignatureValues(chainID, v, r, s *big.Int)
}
```
from geth transactions.go

// Permit dumb empty requests for remote health-checks (AWS)
	if r.Method == http.MethodGet && r.ContentLength == 0 && r.URL.RawQuery == "" {
		w.WriteHeader(http.StatusOK)
		return
	}

## errors

Change error list before showing to tomasz because its JSON-RPC2 spec table

I think infura is the only implementation that uses custom error codes. NOT certain on this though

# Testing considerations
* Make sure you have tests to check every parser edge case 


# Spec Links
* https://www.jsonrpc.org/specification 
# Reference links 
* https://github.com/eea-oasis/baseline-standard/blob/main/api/baseline-api-v1.0-psd01.md
* https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md
* https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md#12-glossary
* https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md
* https://drive.google.com/file/d/1F8LVcLz3XZiXEGvLhcBXNYD2Z5QjfEEQ/view
* https://jelvix.com/blog/software-requirements-specification



# Spec notes notes

Look at screenshots for information

* communicate what is needed
* Words are expensive, use least amount of words without loosing any information
* Imagine this person is new to ethereum, but knows how to code  
* Cover and note all risks and edge cases 
* Use diagrams to visualize information if needed.
* Maybe have to-be info? with post merge and l2 upgrades to the API

## SRS describes
* Systems Purpose
* Functionality
* Interface
* Performance criteria

## SRS has 5 sections
* Introduction
  * purpose of product
  * document conventions
  * intended audience and use
  * scope
  * references 
* Overall description
  * product perspective
  * product features
  * user classes and characteristics
  * operating environment
  * design and implementation constraints
  * user doccumentation
  * assumptions and dependencies
* System features and requirements
  * functional requirements
    * functionality from users perspective 
      * what It needs how does it handle errors, how it work
* external interface requirements
  * UI
  * Software Interface
  * Hardware interface
  * Communication interface
* System requirements
  * minium system spec to run Software
* Non-Functional Requirements
  * 
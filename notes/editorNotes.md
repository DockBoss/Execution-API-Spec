# Notes

[EC-2.3] needs better wording
[EC-10.2] is this more of a parser issue than eth_call?


## definitions
An Ethereum account is an entity that can send transactions and has a balance.

An Ethereum account has an Ethereum address, like an inbox has an email address. You can use this to send funds to an account.

A wallet is a product that lets you manage your Ethereum account. It allows you to view your account balance, send transactions, and more.[source](https://ethereum.org/en/wallets/#:~:text=Ethereum%20wallets%20are%20applications%20that,transactions%20and%20connect%20to%20applications.&text=Your%20wallet%20is%20only%20a%20tool%20for%20managing%20your%20Ethereum%20account.)

## golang info

* functions var name comes before type, go functions can return more than one item

// ChainID retrieves the current chain ID for transaction replay protection.
func (ec *Client) ChainID(ctx context.Context) (*big.Int, error) {
	var result hexutil.Big
	err := ec.c.CallContext(ctx, &result, "eth_chainId")
	if err != nil {
		return nil, err
	}
	return (*big.Int)(&result), err
}

:= allows you to define the vars type indirectally by setting itself to the type it is given.
you can directly use the . operator on pointers of structs without derefrencing them to modify their values

ec is the type  pointer of Client. so whatever is in the memory block refrenced by Client
c IS the pointer to the rpc client
ctx is contex.context.Context
&result is the refrence of results location in memory
returns a pointer to big.Int || error ??
## data type information 
  
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
## errors
Right now this table is copied from JSON-RPC 2.0 spec

I think infura is the only implementation that uses custom error codes. NOT certain on this though

# Testing considerations
* Make sure you have tests to check every parser edge case
  * to find situations like where Nethermind allows an address of address.length()-1 without error 


# Reference Links
* https://www.jsonrpc.org/specification 
* https://ethereum.github.io/yellowpaper/paper.pdf
# SRS links 
* https://github.com/eea-oasis/baseline-standard/blob/main/api/baseline-api-v1.0-psd01.md
* https://github.com/eea-oasis/baseline-standard/blob/main/core/baseline-core-v1.0-psd01.md
* https://drive.google.com/file/d/1F8LVcLz3XZiXEGvLhcBXNYD2Z5QjfEEQ/view
* https://jelvix.com/blog/software-requirements-specification
# Spec notes notes

API requirements include functional requirements (what your API should do) and nonfunctional requirements (how your API should perform in terms of service level agreements). On top of that, API requirements also include a third type — the way your system implements requirements.
https://www.akana.com/blog/api-requirements-what-consider

Look at screenshots for information

* communicate what is needed
* Words are expensive, use least amount of words without loosing any information
* Imagine this person is new to ethereum, but knows how to code  
* Cover and note all risks and edge cases 
* Use diagrams to visualize information if needed.
* Maybe have to-be info with L2 upgrades to the API?


Deliver EIP-1474 spec of all JSON RPC endpoints used by Ethereum clients
Deliver OpenRPC format spec of all JSON RPC endpoints used by Ethereum 
clients
Deliver edge cases description that can be used for testing for all JSON RPC 
endpoints used by Ethereum clients
https://eips.ethereum.org/EIPS/eip-1474
https://github.com/ethereum/pm/blob/master/Merge/mainnet-readiness.md

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
  * user documentation
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
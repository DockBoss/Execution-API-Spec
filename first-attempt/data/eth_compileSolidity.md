# `web3_sha3`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_compileSolidity",
	"params":[
		"contract test { function multiply(uint a) returns(uint d) {   return a * 7;   } }"
	],
	"id":1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32601,
        "message": "the method eth_compileSolidity does not exist/is not available"
    }
}
```
---
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | does it work with any string | | error code -32601| is deprecated in geth version 1.6.0 and up, not sure about any other clients |


---

# links

- [compileSolidity](https://github.com/ethereum/go-ethereum/issues/3793)
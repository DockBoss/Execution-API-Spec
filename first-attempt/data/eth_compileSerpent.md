# `web3_sha3`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_compileSerpent",
	"params":["/* some serpent */"],
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
        "message": "the method eth_compileSerpent does not exist/is not available"
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
0.0 | does it work with any string | | error code -32601| not available in geth|

---
# links

- [compileSolidity](https://github.com/ethereum/go-ethereum/issues/3793)
# `web3_sha3`

## call
```
{
	"jsonrpc":"2.0",
	"method":"web3_sha3",
	"params":["0x54376685"],
	"id":64
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 64,
    "result": "0x93914aebe2474c011c26bd98d74a5750314628ea567f2627dab2c73e0f35b30a"
}
```
---
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | does it work with any string | "hi" | error code -32602| is DATA a hex string I should probably know this|
0.1 | does it work with a blank hex string| "0x" | "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"| unsure what this is the  hash of? |
0.2 | how small can I go | "0x00" | "0xbc36789e7a1e281436464229828f817d6612f7b477d66591ff96a9e064bcc98a"| compared with online Keccak-256, they are the same|
0.3 | How large can I go | "0x385101....ect ect  3333242148694993" very very large number | "0x8f08c34e09a3fbe7978af0c730aac458ab92b52f111f0082f15b95364e9bfb34"| works with very very larger numbers, is there a limit?|
0.4 | Break it | "super long number"  | content length too large (5544200>5242880)| I am not sure where this limit comes from geth, json rpc, keccak-256, ect|

---
# `eth_getUncleCountByBlockNumber`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleCountByBlockNumber",
	"params":[
		"0xa3860c"
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
    "result": "0x1"
}
```
---
## infura ropsten
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | block with one uncle on etherscan | "0xA385D3" | "0x1"| it works|
0.1 | block with no uncle on etherscan | "0xA38377" | "0x0" | It works

---
# TODO
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
1.0 | block with one uncle on etherscan | "0xA385D3", "0x0" | null | does not exist|
1.1 | block with no uncle on etherscan | "0xA38377", "0x0" | null | it still works though

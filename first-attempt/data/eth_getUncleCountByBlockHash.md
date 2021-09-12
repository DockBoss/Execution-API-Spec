# `eth_getUncleCountByBlockHash`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleCountByBlockHash",
	"params":[
		"0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2dda42e0b161"
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
0.0 | block hash of block with one uncle | "0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2dda42e0b161"| "0x1" |IT worked|
0.1 | block hash of block with no uncles | "0x40dee464b763b1a4cf885dd8fd618aefa7e8157c1e51ca839dd636884091bc02" | "0x0" | It works |

---
# TODO
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
1.0 | block with one uncle on etherscan | "0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2dda42e0b161", "0x0" | null | does not exist|
1.1 | block with no uncle on etherscan | "0x40dee464b763b1a4cf885dd8fd618aefa7e8157c1e51ca839dd636884091bc02", "0x0" | null | it still works though
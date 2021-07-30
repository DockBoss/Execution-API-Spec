# `eth_getStorageAt`

## call
```
{
	"jsonrpc":"2.0", 
	"method": "eth_getStorageAt", 
	"params": [
		"0xd50b57c4b3e42d9ee0a45144b0b215a7770b5333", 
		"0x0",
		"latest"
	], 
	"id": 1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0000000000000000000000000000000000000000000000000000000000000002"
}
```
---
## ropsten Infura

Geth/v1.10.6-omnibus-f00fbaa2/linux-amd64/go1.16.6

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | does it work with testContract.sol| case above |int value 2|this is the value I set yesterday|
0.1 | change data| check right after changing with latest| "0x000000000000000000000000000000000000000000000000000000000000000a"| retured the value that I sent to it|
0.2 | try and send a value to too large | "0x000....00022"| transaction failed, try againg once I have more test eth||
0.3 | try bool and string to see if only returns hex encodec| TODO | TODO | most likely will be encoded |


---

# TODO

try boolean
try string 
try double
create contract 3
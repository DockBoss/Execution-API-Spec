# `eth_submitWork`

## call
```
{
	"jsonrpc":"2.0", 
	"method":"eth_submitWork", 
	"params":[
		"0x0000000000000001", 
		"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", 
		"0xD1fE5700000000000000000000000000D1fE5700000000000000000000000000"
	],
	"id":73
}
```

## Return
```
{
    "jsonrpc": "2.0",
    "id": 73,
    "result": false
}
```
---
## ropsten Infura

Geth/v1.10.6-omnibus-f00fbaa2/linux-amd64/go1.16.6

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | random valid valuse | situation abouve | false | What I expect to get|
0.1 | 
---
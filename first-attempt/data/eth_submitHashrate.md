# `eth_submitHashrate`

## call
```
{
	"jsonrpc":"2.0", 
	"method":"eth_submitHashrate", 
	"params":[
		"0x44141",
  "0x59daa26581d0acd1fce254fb7e85952f4c09d0915afd33d3886cd914bc7d283c"
	],
	"id":73
}
```
## Return
```
{
    "jsonrpc": "2.0",
    "id": 73,
    "result": true
}
```
---
## ropsten Infura

Geth/v1.10.6-omnibus-f00fbaa2/linux-amd64/go1.16.6

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | just a random number and id| same as above | "true" | works|
0.1 |a few more random numbers and id's both less than or equal to 32 bytes| similar as above| "true" | works|

---
how does this work, can two people have the same ID 
where is it stored and used?
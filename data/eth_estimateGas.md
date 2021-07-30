# `eth_estimateGas`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_estimateGas",
	"params": [{
        "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "value": "0x9184e72a"
    }],
	"id":1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x5498"
}
```
---
## ropsten Infura

Geth/v1.10.6-omnibus-f00fbaa2/linux-amd64/go1.16.6
-find another way to compare these numbers
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | how does it work| basic transaction |gas fee in wei "0x5498"| does what it says it should|
0.1 | empty object | {} | "0xcf08" | compare to ropsten price per gas, and actually might be eip 1559 gas system on ropsten| 
0.2 | to meta mask address| "to": "0xA2E0b409c3C0e41918B2FB2a045c1b1387FC1369" | "0x5208" | seems to work alright|
0.3 | same but with data 0x0 |  "data": "0x00" | "0x520c" | is more expensive but not by much |
0.4 | same but with longer data | "data": "0x0457815b3265984515a2013c564065409840e965809870498704951095109f81098c1980"| "0x5448"| it is a bit more expensive|
0.5 | data estimate gas to deploy test contract| | "0x1d023" | attempting to deploy with that as gas price|


---
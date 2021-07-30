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
0.1 | empty object | {} | "0xcf08" 53000  | compare to ropsten price per gas, and actually might be eip 1559 gas system on ropsten| 
0.2 | to meta mask address| "to": "0xA2E0b409c3C0e41918B2FB2a045c1b1387FC1369" | "0x5208" | seems to work alright|
0.3 | same but with data 0x0 |  "data": "0x00" | "0x520c" | is more expensive but not by much |
0.4 | same but with longer data | "data": "0x0457815b3265984515a2013c564065409840e965809870498704951095109f81098c1980"| "0x5448"| it is a bit more expensive|
0.5 | data estimate gas to deploy test contract| | "0x1d023" | attempting to deploy with that as gas price|
0.6 | To address that does not exist | 0x000... | "0x5208"| test if its the same with a different address(yes)|
0.7 |  from fake address plus above | ^| "0x5208"| makes sense |
0.8 | just gas param | see 1.0- 1.? | | |
0.9 | with gas and from| | "0xcf08" | weird|
0.10| with gas from and to | | "0x5208" | to address changes the price|
0.10| see if changing gasPrice changes anything | tried many tings | many returns| but none affected by changing gasPrice|
0.11 | compare two different sized transactions | ranges from 0x1 to 0xffffffffff with gas at 5209 | ranged from 0x5208 to error -32000 insufficient funds | so it will only estimate someting you could afford actually do|
0.14 | same with or without from address | | yes it is the same | appendix g |
0.15| try with to, from, gas, data, value| data 0x00, value 0xffffff | 0x520c| different |
0.16 | same as above | data 0x0060606000 value 0xfffffff| 0x5240|
0.17| try it with test contract | from, data| 0x1d023 | less than the larger contract |
0.18| try it with test2 | from, data | 0x50f14 | should be more than first|
---

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
1.0| gas of 0xffffffffffffffff | <--| 0xcf08 | so far always this on infura also largest number that can be used as input|
1.1|  gas of | 0x1111| 0xcf08| idk|
1.2|  gas of | 0x5111| 0xcf08| idk|
1.3|  gas of | 0x6111| error -32000 gas required exceeds allowance| idk if its infura|
1.4|  gas of | 0x61111| 0xcf08| idk|
1.5|  gas of | 0x5207| 0xcf08| idk|
1.6|  gas of | 0x5208| error -32000| idk|
1.7|  gas of | 0x10000| 0xcf08| idk|
1.8| gas of | 0x9000| error -32000| anyhing 4 digits has to be less than 5208|

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
2.0| tes
Appendix G yellow paper

     "from": "0x0000000000000000000000000000000000000110",
        "to": "0x0000000000000000000000000000000000000110"
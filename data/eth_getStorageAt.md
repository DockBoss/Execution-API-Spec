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
0.3 | try bool to see if only returns hex encodec| set to false | 0x00... | will try again with true|
0.4 | try bool set to true | set to true | 0x0000000000000000000000000000000000000000000000000000000000000001 | returned true! | 
0.5 | test contract 2 | 0x0, 0x1, 0x2 | 2 , 2, 0| all in the 0x000 format no matter uint8 or 256|
0.6 | try with strings | value is "test" | 0x7465737400000000000000000000000000000000000000000000000000000008 | returns hex of "test" then 000...8|
0.7 |

---
## mainnet infura

#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
1.0 | tested uniswap v2 address| 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D, 0x0 |0x0000000000000000000000000000000000000000000000000000000000000000| not sure how to find what var 0 is on uni 2, but going to try to find a non 0 return|
1.1| tested uniswap v2 address| same, 0x1 then 0x2, 0xa5, 0x10f | 0x0000000000000000000000000000000000000000000000000000000000000000 | must return 0x.... for any valid address|
1.2| tested uniswap v3 router| 0xE592427A0AEce92De3Edee1F18E0157C05861564, 0x0 | 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff | weird|
1.3| tested uniswap v3 router | same, 0x1 then 0x2, 0x5, 0x20| 0x00.... | 
1.4 | test on block earlier than contract | same, same, 0x200 | error -32002| makes sense | 
---

# TODO

https://docs.soliditylang.org/en/v0.4.20/miscellaneous.html#layout-of-state-variables-in-storage
https://medium.com/coinmonks/decoding-the-memory-of-an-ethereum-contract-52c256f83f07
https://ethereum.stackexchange.com/questions/1038/is-there-a-theoretical-limit-for-amount-of-data-that-a-contract-can-store
https://ethereum.stackexchange.com/questions/68712/how-much-data-can-i-store-in-a-smart-contract-what-is-the-cost-and-how-it-is-im

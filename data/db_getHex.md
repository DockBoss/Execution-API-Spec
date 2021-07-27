 `db_putString`

## call
```
{
	"jsonrpc":"2.0",
	"method":"db_getHex"
	,"params":[
		"testDB",
		"myKey"
	],
	"id":73
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
0.0 | does it work with any string | "testDB", "myKey", "myString" | error code -32601| does not work on dev|

---
## links

- https://ethereum.stackexchange.com/questions/17959/why-web3-db-putstring-throws-error
- https://github.com/ConsenSys/mythril/issues/11
- https://github.com/ethereum/go-ethereum/issues/311

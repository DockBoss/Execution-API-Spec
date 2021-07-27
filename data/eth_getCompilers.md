# `eth_getCompilers`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_getCompilers",
	"params":[],
	"id":1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32601,
        "message": "the method eth_getCompilers does not exist/is not available"
    }
}
```
---
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test | Result|Notes|
:---|---|:---:| ---
0.0 | does it work | error code -32601| probably not enabled in dev version|

---
## geth --http --ropsten
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test | Result|Notes|
:---|---|:---:| ---
0.0 | does it work | error code -32601| probably not enabled in dev version|

---
# eth_getBlockTransactionCountByHash
---
## Case
  
geth --http --dev

only one transaction per block
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		"0x0f664288f277da61285151568654cf92d518146c76759a1cfec5d4b06324e4e2"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
``

### Notes

 
 
---
## Case

geth --http --dev

fake block hash
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		"0x0f664288f277da61285151568654cf92d518146c76759a1cfec5d4b06324ffff"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": null
}
``

### Notes

 
 
---
## Case

geth --http --dev


  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		""
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32602,
        "message": "invalid argument 0: hex string has length 0, want 64 for common.Hash"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev --dev.period 10  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		"0x09524a2a8f510c00d906c7177014207f8e77fdd12d91dd8f5bf1f96bb170dae9"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xd"
}
``

### Notes

 
 
---
## Case

geth --http --dev --dev.period 10 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByHash",
	"params":[
		"0x9231b2947d8c9e2b2c2c9c90246c658bf94d0f45777ecb0897b2783ef6e70fe0"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
``

### Notes

 
 
---

  
  

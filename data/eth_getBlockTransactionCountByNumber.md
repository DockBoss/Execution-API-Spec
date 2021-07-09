# eth_getBlockTransactionCountByNumber
---
## Case

geth --http --dev

only one transaction per block  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0x0"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0"
}
``

### Notes

 
 
---
## Case
  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0x1"
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

block that does not exist
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0xa"
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
  
geth --http --dev --dev.period 10  

### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0x1"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0"
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
	"method":"eth_getBlockTransactionCountByNumber",
	"params":[
		"0x9"
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

# eth_getTransactionCount

---
## Case
  
geth --http --dev

address with 28 transactions

on block 0x0
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xe061f797f9864a6a03f27c0e869424093161b4f3",
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

geth --http --dev

address with 28 transactions

on block 0x5
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xe061f797f9864a6a03f27c0e869424093161b4f3",
		"0x5"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x5"
}
``

### Notes

 
 
---
## Case
  
geth --http --dev

address with 28 transactions

on block 0x28
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xe061f797f9864a6a03f27c0e869424093161b4f3",
		"0x28"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x28"
}
``

### Notes

 
 
---
## Case

geth --http --dev

address with 28 transactions

on block latest 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xe061f797f9864a6a03f27c0e869424093161b4f3",
		"latest"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x28"
}
``

### Notes

 
 
---
## Case
  
geth --http --dev

addresss with 28 transacions 

on block that does not exist
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xe061f797f9864a6a03f27c0e869424093161b4f3",
		"0x29"
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
        "code": -32000,
        "message": "header not found"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev

on address with no transacions from it 

but 28 transactions sent to it
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionCount",
	"params":[
		"0xd46e8dd67c5d32be8058bb8eb970870f07244567",
		"latest"
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

 Looking deeper but I think it its just the nonce at given block
 [link](https://ethereum.stackexchange.com/questions/3411/should-correct-transaction-nonce-be-one-less-than-account-transaction-count)
 
looking into it Yes. They are the same 
 
---

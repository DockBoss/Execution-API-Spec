# eth_hashrate.md
---

## Case
  
geth --http --dev  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_hashrate",
	"params":[],
	"id":71
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x0"
}
``

### Notes

 
 
---
## Case
  
geth --http --dev --mine

  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_hashrate",
	"params":[],
	"id":71
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x0"
}
``

### Notes

 
 
---
## Case
  
geth --http --ropsten --mine
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_hashrate",
	"params":[],
	"id":71
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 71,
    "result": "0x0"
}
``

### Notes

I was never mining so I only had 0x0S
 
---


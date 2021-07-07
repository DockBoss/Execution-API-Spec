## Case
  
geth --http --dev dev account 
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_listening",
	"params":[],
	"id":67
}
`` 

### Return
``

``

### Notes

check if there is a geth command that toggles this
 
---
## Case
  
geth --http

on mainnet
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_listening",
	"params":[],
	"id":67
}
`` 

### Return
``

``

### Notes


 
---
## Case
  
geth --http --ropsten

on ropsten
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_listening",
	"params":[],
	"id":67
}
`` 

### Return
``

``

### Notes

check light client as well.
 
---


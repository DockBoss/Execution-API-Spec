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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
``

### Notes


 
---
## Case
  
geth --http --mine

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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
``

### Notes


 
---
## Case
  
geth --http --ropsten --syncmode light

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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
``

### Notes


 
---
## Case
  
geth --http --ropsten --syncmode snap

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
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": true
}
``

### Notes


 
---

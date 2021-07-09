# net_version
---
## Case

geth --http --dev --networkid 1  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "1"
}
``

### Notes

 
 
---
## Case

 geth --http --dev --networkid 0 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "0"
}
``

### Notes

 
 
---
## Case

geth --http --dev --networkid 18446744073709551615  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "18446744073709551615"
}
``

### Notes

 
 
---
## Case

geth --http --dev --networkid 18446744073709551616  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
flag -networkid: value out of range
``

### Notes

geth will not start
 
---
## Case

  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
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

geth --http --dev 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "1337"
}
``

### Notes

 
 
---
## Case

geth --http  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "1"
}
``

### Notes

 
 
---
## Case

 geth --http --ropsten 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_version",
	"params":[],
	"id":67
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 67,
    "result": "3"
}
``

### Notes

 
 
---

## Case
  
 geth --http --dev 
  
 on windows 
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"web3_clientVersion",
	"params":[],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "Geth/v1.10.3-stable-991384a7/windows-amd64/go1.16.3"
}
``

### Notes

 
 
---
## Case
  
 geth --http --dev 
  
 on windows with a different version of geth 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"web3_clientVersion",
	"params":[],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "Geth/v1.10.4-stable-aa637fd3/windows-amd64/go1.16.4"
}
``

### Notes

 
 
---

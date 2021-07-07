## Case
  
geth --http --ropsten --sync fast  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 83,
    "result": "0x0"
}
``

### Notes

 no current block when syncing
 
---
## Case
  
geth --http --ropsten --mine  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}
`` 

### Return

``

``

### Notes

 
 
---
## Case
  
geth --http --dev

no transactions
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}
`` 

### Return

``

``

### Notes

 
 
---
## Case
  
geth --http --dev

many transactions
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}
`` 

### Return

``

``

### Notes

 
 
---
## Case
  
geth --http 
  
on mainnet but not node not synced  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_blockNumber",
	"params":[],
	"id":83
}
`` 

### Return

``

``

### Notes

 
 
---

# net_peerCount
---
## Case
  
 geth --http --dev
 dev account (shouldn't have peers)
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":74
}
`` 

### Return
``

``

### Notes


 
---

## Case
  
 geth --http

on mainnet
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":74
}
`` 

### Return
``

``

### Notes


 
---

## Case
  
 geth --http --ropsten
 
 on ropsten testnet
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":74
}
`` 

### Return
``

``

### Notes


 
---

## Case
  
 geth --http --dev --datadir "C:\Eth0" --port 30301 --http.port 8101
 
 geth --http --dev --datadir "C:\Eth1" --port 30302 --http.port 8102

two devnets running in a different directory
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":74
}
`` 

### Return
``

``

### Notes


 
---
## Case
  
 geth --http --dev --datadir "C:\Eth" --port 30301 --http.port 8101
 
 geth --http --dev --datadir "C:\Eth" --port 30302 --http.port 8102

two devnets running in the same directory
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"net_peerCount",
	"params":[],
	"id":74
}
`` 

### Return
``

``

### Notes


 
---

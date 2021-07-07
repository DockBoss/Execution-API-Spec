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
{
    "jsonrpc": "2.0",
    "id": 74,
    "result": "0x0"
}
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
{
    "jsonrpc": "2.0",
    "id": 74,
    "result": "0x1"
}
``
``
{
    "jsonrpc": "2.0",
    "id": 74,
    "result": "0x2"
}
``

### Notes

peercount=1 tried=30 static=0
  
peercount=1 tried=31 static=0

peercount=2 tried=29 static=0

WARN [07-07|13:25:18.394] Synchronisation failed, dropping peer    peer=7ea9bb634f04e62d2ca1355fe2400043b80d65cd44015b3e05a7dfcc1e49e96b err=timeout

ERROR[07-07|13:25:18.398] Ethereum peer removal failed             peer=7ea9bb63 err="peer not registered"

still returns 0x2 for a short period after the peer is dropped

look more into how finding peers works [link](https://ethereum.stackexchange.com/questions/7743/what-are-the-peer-discovery-mechanisms-involved-in-ethereum/7744)

---

## Case
  
 geth --http --ropsten
 
 
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
{
    "jsonrpc": "2.0",
    "id": 74,
    "result": "0xe"
}
``

### Notes

thats the most peers I have had
 
---

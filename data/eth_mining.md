# eth_Mining
---
## Case
  geth --http --dev
  basic dev set up
  
### Call
``
{
	"jsonrpc":"2.0",
	"method":"eth_mining",
	"params":[],
	"id":71
}
`` 

### Return
``{
    "jsonrpc": "2.0",
    "id": 71,
    "result": true
}``

### Notes

get devmode is always mining
 
---
## Case
  geth --http
  on mainnet but mining in not enabled
  
### Call
``
{
	"jsonrpc":"2.0",
	"method":"eth_mining",
	"params":[],
	"id":71
}
`` 

### Return
``{
    "jsonrpc": "2.0",
    "id": 71,
    "result": false
}``

### Notes

mining is disabled by default

---
## Case
  geth --http --datadir "\Ethereum\n2" -verbosity 6 --ipcdisable --port 30301 --http.port 8101 --mine

  custom network with mining enabled
  
### Call
``
{
	"jsonrpc":"2.0",
	"method":"eth_mining",
	"params":[],
	"id":71
}
`` 

### Return
``{
    "jsonrpc": "2.0",
    "id": 71,
    "result": true
}``

### Notes

---

## Case

geth --http --datadir "\Ethereum\n2" -verbosity 6 --ipcdisable --port 30301 --http.port 8101
custom network
  
### Call
``
{
	"jsonrpc":"2.0",
	"method":"eth_mining",
	"params":[],
	"id":71
}
`` 

### Return
``{
    "jsonrpc": "2.0",
    "id": 71,
    "result": false
}``

### Notes

geth is not mining by default

---

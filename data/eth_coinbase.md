# eth_coinbase
---
## Case

geth --http --dev 

vetsion 1.10.8

* when no address it errors
* with one address it returns the address in the folder
* with two addresses it returns the first address in the keystore folder
* when the file is renamed to be ahead of current coinbase while running it still returns the first coinbase
* when restarted after renameing the account it uses the first specified address that is unlocked

## Case

geth --http --dev  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_coinbase",
	"params":[],
	"id":64
}
`` 

### Return

``
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x407d73d8a49eeb85d32cf465507dd71d507100c1"
}

``

### Notes

 
 
---
## Case

geth --http --datadir "C:\eth"

without an address in keystore
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_coinbase",
	"params":[],
	"id":64
}
`` 

### Return

``
{
  "id":64,
  "jsonrpc": "2.0",
  "error": {
       "code": -32000,
       "message": "etherbase must be explicitly specified"
  }
}
``

### Notes

 
 
---
## Case

 geth --http --datadir "C:\eth"

with an address in keystore 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_coinbase",
	"params":[],
	"id":64
}
`` 

### Return

``
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x407d73d8a49eeb85d0x1ad79c22093ce682c86985bff045850b4b319eb232cf465507dd71d507100c1"
}
``

### Notes

 
 
---
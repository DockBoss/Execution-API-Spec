# eth_getTransactionByBlockHashAndIndex

---
## Case

geth --http --dev --dev.period 300

block 1

index 0
  
### Call

``

`` 

### Return

``

``

### Notes

 
 
---
## Case

geth --http --dev --dev.period 300  
  
block 2

index 0

### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c42ca5aa5932b4", 
		"0x0"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c42ca5aa5932b4",
        "blockNumber": "0x2",
        "from": "0xda20b473f3c314b327360ffc7a91cd291858faf8",
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "hash": "0xc889b8048da13f15ce58f562adfd90b7288453a9cb8b0006196a4f3c9a123b5d",
        "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "nonce": "0x0",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "transactionIndex": "0x0",
        "value": "0x9184e72a",
        "type": "0x0",
        "v": "0xa95",
        "r": "0x2380a950643ef62a26fe36b444911fd85688d699071fc241658e8503101fcbef",
        "s": "0x57ed84214b80663cd9c058f140efa87c621e28e31ef7b555bd791b752af15efa"
    }
}
``

### Notes

same as eth_getTransactionByBlockNumberAndIndex
 
 
---
## Case

geth --http --dev --dev.period 300  
  
block 2

index 1  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c42ca5aa5932b4", 
		"0x1"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c42ca5aa5932b4",
        "blockNumber": "0x2",
        "from": "0xda20b473f3c314b327360ffc7a91cd291858faf8",
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "hash": "0xfc0b5b948b66ea0170f805d5c90ab8814c984eb3fd7c65817e9c3e373f02c4db",
        "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "nonce": "0x1",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "transactionIndex": "0x1",
        "value": "0x9184e72a",
        "type": "0x0",
        "v": "0xa96",
        "r": "0x4d5eeb670895be73caf3085c202b7cfbd21cd2247035214cabbee9ac9ea2e14a",
        "s": "0x16065a2797da37ad34d08115d058272fb3b7dbe07de096127bcc8162e9e58e6c"
    }
}
``

### Notes

 same as eth_getTransactionByBlockNumberAndIndex

---
## Case
  
geth --http --dev --dev.period 300  
  
block 2

index 250   (does not exist)
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c42ca5aa5932b4", 
		"0xfa"
	],
	"id":1
}
`` 

### Return

``

``

### Notes

 
 
---

## Case
geth --http --dev --dev.period 300  
  
random hex string same length as block hash

index 0
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"0x3392f079a912bf4f1c6503ad407afd536c4e53044a58c8d695c52ca5aa5932b5", 
		"0x0"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": null
}
``

### Notes

 
 
---
## Case

geth --http --dev --dev.period 300  
  
empty string

index 0  
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[
		"", 
		"0x0"
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32602,
        "message": "invalid argument 0: hex string has length 0, want 64 for common.Hash"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev --dev.period 300  
  
null

index 0 
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByBlockHashAndIndex",
	"params":[

        "0x0"
	
	],
	"id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32602,
        "message": "invalid argument 0: json: cannot unmarshal hex string of odd length into Go value of type common.Hash"
    }
}
``

### Notes

 
 
---
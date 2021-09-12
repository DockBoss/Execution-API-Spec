# eth_getTransactionByHash
---
## Case

geth --http --dev  

valid transaction hash
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByHash",
	"params":[
		"0xad521e96faef1583d2f03df00e6447cb2fde662e6a3f989092d56c09b2059b3d"
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
        "blockHash": "0x0f664288f277da61285151568654cf92d518146c76759a1cfec5d4b06324e4e2",
        "blockNumber": "0x1",
        "from": "0x57656ba6e22d7a071e759bd5de26e14b67996bb0",
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "hash": "0xad521e96faef1583d2f03df00e6447cb2fde662e6a3f989092d56c09b2059b3d",
        "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "nonce": "0x0",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "transactionIndex": "0x0",
        "value": "0x9184e72a",
        "type": "0x0",
        "v": "0xa96",
        "r": "0x57c9f19496827fc04484b600220fe36940bdaecbb8d3257d0e4f7e59bda13809",
        "s": "0xfb22a1cce120925daec929498136737b6441d883996ea064f7fa53b5abeae41"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev  

valid transaction hash
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionByHash",
	"params":[
		"0x3bea6a37dedd8bf193922480702615ab51d20d846df0dcdb8bf11d989bcbf1b4"
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
        "blockHash": "0x96598e35404d52cbad0b093cc4eabd2dd8421abafc2750cb9db11be111c877d2",
        "blockNumber": "0x2",
        "from": "0x57656ba6e22d7a071e759bd5de26e14b67996bb0",
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "hash": "0x3bea6a37dedd8bf193922480702615ab51d20d846df0dcdb8bf11d989bcbf1b4",
        "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "nonce": "0x1",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "transactionIndex": "0x0",
        "value": "0x9184ffff",
        "type": "0x0",
        "v": "0xa96",
        "r": "0x29786e8541ba12a05a339844ced6554c8f72c66958ac16f0d22f49701dcfe0d0",
        "s": "0x974c58b04a1b83e158a8c77691453798d971ed59275baff1efea1b54156476f"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev  


  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_sendTransaction",
	"params":[{
		"from": "0x57656ba6e22d7a071e759bd5de26e14b67996bb0",
		"gas": "0x76c00",
		"gasPrice": "0x9184e72a00",
		"value": "0x9184ffff",
		"data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
	}],
	"id":1
}
``

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionReceipt",
	"params":[
		"0x5385f51cb5f75c06d79559d932894423c348c08de32abdc3ae5f59fdb3311812"
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
        "blockHash": "0x31b8b059f6ceae02835bbcd8afce3ef5ed8c68bc372f9df14a81d3c69eb196da",
        "blockNumber": "0x3",
        "contractAddress": "0x281cfcafe97d2e7d6500ad4ccde1cc73b6faafb0",
        "cumulativeGasUsed": "0x76c00",
        "effectiveGasPrice": "0x9184e72a00",
        "from": "0x57656ba6e22d7a071e759bd5de26e14b67996bb0",
        "gasUsed": "0x76c00",
        "logs": [],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": "0x0",
        "to": null,
        "transactionHash": "0x5385f51cb5f75c06d79559d932894423c348c08de32abdc3ae5f59fdb3311812",
        "transactionIndex": "0x0",
        "type": "0x0"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev  

null
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionReceipt",
	"params":[
	
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
        "message": "missing value for required argument 0"
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev  

fake transaction hash
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getTransactionReceipt",
	"params":[
		"0x5385f51cb5f75c06d79559d932894423c348c08de32abdc3ae5f59fdb33118ff"
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
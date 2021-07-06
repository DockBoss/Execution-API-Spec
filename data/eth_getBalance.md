# eth_getBalance
---
## Case
 
geth --http --dev

Call eth_getBalance on created account without any transaction

on latest block

### Call

``{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
        "latest"
    ],
    "id":1
}
`` 

### Return

``{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7"
}
``

### Notes


---

## Case
  
geth --http --dev

Call eth_getBalance on created account without any transactions

on earliest block
  
### Call

``{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
        "earliest"
    ],
    "id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7"
}
``

### Notes


 
---

## Case
  
geth --http --dev

Call eth_getBalance on created account without any transactions

on pending block
  
### Call

``
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
        "pending"
    ],
    "id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1
    "result": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7"
}
``

### Notes

no errors occure if latest, earliest, and pending are the same
 
---

## Case
  
geth --http --dev

Call eth_getBalance on created account without any transactions

on block 0x0
  
### Call

``
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
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
    "result": "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7"
}
``

### Notes


 
---

## Case
  
geth --http --dev

Call eth_getBalance on created account without any transactions

on parameter that does not exist "last"
  
### Call

``
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
        "last"
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
        "message": "invalid argument 1: hex string without 0x prefix"
    }
}
``

### Notes


 
---
# template
---
## Case
  
geth --http --dev

Call eth_getBalance on created account without any transactions

on block that does not exist

### Call

``
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x519ade40dbd92c5ec984eafa9b262090cb67907a", 
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
    "error": {
        "code": -32000,
        "message": "header not found"
    }
}
``

### Notes


 
---

## Case
  
geth --http --dev

Call eth_getBalance on random numbers the same length as an address without any transaction
  
On latest block  
  
### Call

``
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":[
        "0x6666666666666666666666666666666666666666", 
        "latest"
    ],
    "id":1
}
`` 

### Return

``
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0"
}
``

### Notes

returns 0x0 if address does not exist or has a value of 0x0

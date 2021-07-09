# eth_getBlockByHash
---
## Case

geth --http --dev  

on real block hash

### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xdb453483e4d464c8fadb4fa3be4aa681210e35615ad6ae26aee86f23d1855c08", 
		true
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
        "baseFeePerGas": "0x2312353a",
        "difficulty": "0x2",
        "extraData": "0xda83010a04846765746888676f312e31362e348777696e646f77730000000000f6af9e3804b6668fa0b0b9b9c19c2be6ea7feaf67a4ebdd050d691bd83e450b051e063d996a338b789c4ed894308b154a18bd85facd545289f8b42d0992ad90601",
        "gasLimit": "0xaecaae",
        "gasUsed": "0x5498",
        "hash": "0xdb453483e4d464c8fadb4fa3be4aa681210e35615ad6ae26aee86f23d1855c08",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x0000000000000000000000000000000000000000",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x0000000000000000",
        "number": "0x4",
        "parentHash": "0xffb58b8f25cd8487e15e36d8951da64dfce62fb7e120aa435dd0ce914a43b0cd",
        "receiptsRoot": "0x61642ff38bacf82aa27d0d1875d9d438e144ebc0dcac56f205320b3d97ea0c51",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x2fc",
        "stateRoot": "0xdab9a2a86a01181e3cd122f9bf96d9d5a16bf489701e365cd6b8c66a6097e9b1",
        "timestamp": "0x60e743c9",
        "totalDifficulty": "0x9",
        "transactions": [
            {
                "blockHash": "0xdb453483e4d464c8fadb4fa3be4aa681210e35615ad6ae26aee86f23d1855c08",
                "blockNumber": "0x4",
                "from": "0x06fc06e4e9681c4049d8d5d93e8ce92ea615f709",
                "gas": "0x76c0",
                "gasPrice": "0x9184e72a000",
                "hash": "0x8676018c2ed39021309a99af51b7a3539e213df6f94d2e2f745f2885389656f8",
                "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
                "nonce": "0x7",
                "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
                "transactionIndex": "0x0",
                "value": "0x9184e72a",
                "type": "0x0",
                "v": "0xa96",
                "r": "0xafd62389c574cc6011be7174f62db9e378cb8f6229a96b323ab3618075528826",
                "s": "0x50f0ffba2f70e5091ce4084016e1bbb96bd11ccffaa4a82d700e439e4a047d9a"
            }
        ],
        "transactionsRoot": "0x7582aea65f3583423839eb11894fb9a4d48d3bf7c0fb4cd5c79bfe608e8844ca",
        "uncles": []
    }
}
``

### Notes

 
 
---
## Case
  
geth --http --dev

on real block hash
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xdb453483e4d464c8fadb4fa3be4aa681210e35615ad6ae26aee86f23d1855c08", 
		false
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
        "baseFeePerGas": "0x2312353a",
        "difficulty": "0x2",
        "extraData": "0xda83010a04846765746888676f312e31362e348777696e646f77730000000000f6af9e3804b6668fa0b0b9b9c19c2be6ea7feaf67a4ebdd050d691bd83e450b051e063d996a338b789c4ed894308b154a18bd85facd545289f8b42d0992ad90601",
        "gasLimit": "0xaecaae",
        "gasUsed": "0x5498",
        "hash": "0xdb453483e4d464c8fadb4fa3be4aa681210e35615ad6ae26aee86f23d1855c08",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x0000000000000000000000000000000000000000",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x0000000000000000",
        "number": "0x4",
        "parentHash": "0xffb58b8f25cd8487e15e36d8951da64dfce62fb7e120aa435dd0ce914a43b0cd",
        "receiptsRoot": "0x61642ff38bacf82aa27d0d1875d9d438e144ebc0dcac56f205320b3d97ea0c51",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x2fc",
        "stateRoot": "0xdab9a2a86a01181e3cd122f9bf96d9d5a16bf489701e365cd6b8c66a6097e9b1",
        "timestamp": "0x60e743c9",
        "totalDifficulty": "0x9",
        "transactions": [
            "0x8676018c2ed39021309a99af51b7a3539e213df6f94d2e2f745f2885389656f8"
        ],
        "transactionsRoot": "0x7582aea65f3583423839eb11894fb9a4d48d3bf7c0fb4cd5c79bfe608e8844ca",
        "uncles": []
    }
}
``

### Notes

 
 
---
## Case
  
geth --http --dev

on a different real block hash
 
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4", 
		false
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
        "baseFeePerGas": "0xf4243d",
        "difficulty": "0x2",
        "extraData": "0xda83010a04846765746888676f312e31362e348777696e646f777300000000001630fb115f9f2a7c5a28354651b72eb70bda7c463b898ddfbd1196696da06d1820da5a592229768eb27cc20f25587f1c135c2275ffeafc578e6db38f1528fabe01",
        "gasLimit": "0xaa3dda",
        "gasUsed": "0x5498",
        "hash": "0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x0000000000000000000000000000000000000000",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x0000000000000000",
        "number": "0x1f",
        "parentHash": "0x4f0cfe73ef24a6139ead40cc6d3d2506ead4bb61597fdd11456816eef3cb05bc",
        "receiptsRoot": "0x61642ff38bacf82aa27d0d1875d9d438e144ebc0dcac56f205320b3d97ea0c51",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x2fb",
        "stateRoot": "0x316557e0eddd03dbfc5c2d2968ff154846f48fa8a2028ca63fa751db5299606a",
        "timestamp": "0x60e744d7",
        "totalDifficulty": "0x3f",
        "transactions": [
            "0xe830259f25287b3f6458eba0da691a772b44f3f1a2505a0db5b0e6d332173c70"
        ],
        "transactionsRoot": "0x03b32e9fa17606ba854ead262ee693b42bc7f07e51bde6f98d65f7ab069a324a",
        "uncles": []
    }
}
``

### Notes

 
 
---
## Case
  
geth --http --dev

on a different real block hash

### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4", 
		true
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
        "baseFeePerGas": "0xf4243d",
        "difficulty": "0x2",
        "extraData": "0xda83010a04846765746888676f312e31362e348777696e646f777300000000001630fb115f9f2a7c5a28354651b72eb70bda7c463b898ddfbd1196696da06d1820da5a592229768eb27cc20f25587f1c135c2275ffeafc578e6db38f1528fabe01",
        "gasLimit": "0xaa3dda",
        "gasUsed": "0x5498",
        "hash": "0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x0000000000000000000000000000000000000000",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x0000000000000000",
        "number": "0x1f",
        "parentHash": "0x4f0cfe73ef24a6139ead40cc6d3d2506ead4bb61597fdd11456816eef3cb05bc",
        "receiptsRoot": "0x61642ff38bacf82aa27d0d1875d9d438e144ebc0dcac56f205320b3d97ea0c51",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x2fb",
        "stateRoot": "0x316557e0eddd03dbfc5c2d2968ff154846f48fa8a2028ca63fa751db5299606a",
        "timestamp": "0x60e744d7",
        "totalDifficulty": "0x3f",
        "transactions": [
            {
                "blockHash": "0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4",
                "blockNumber": "0x1f",
                "from": "0x06fc06e4e9681c4049d8d5d93e8ce92ea615f709",
                "gas": "0x76c0",
                "gasPrice": "0x9184e72a000",
                "hash": "0xe830259f25287b3f6458eba0da691a772b44f3f1a2505a0db5b0e6d332173c70",
                "input": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
                "nonce": "0x8",
                "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
                "transactionIndex": "0x0",
                "value": "0x9184e72a",
                "type": "0x0",
                "v": "0xa95",
                "r": "0xf29b7d6817810aa6439b9ecd19fa29cf3f1952ea3e046e090df3609ce715e152",
                "s": "0x7af6964df24b55a9ccb2c77caed78bbe3baa21f2b85b4f71c314f54265b37a90"
            }
        ],
        "transactionsRoot": "0x03b32e9fa17606ba854ead262ee693b42bc7f07e51bde6f98d65f7ab069a324a",
        "uncles": []
    }
}
``

### Notes

 
 
---
## Case

geth --http --dev

on a different real block hash

without second parameter
  
### Call

``
{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a01b4"
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
        "message": "missing value for required argument 1"
    }
}
``

### Notes

 
 
---
## Case
  
geth --http --dev
  
on a block hash that does not exist

### Call

``{
	"jsonrpc":"2.0",
	"method":"eth_getBlockByHash",
	"params":[
		"0xcc00056a83f19afc02b13c7e971582238027ba38545085750581f54f073a0fff",
        true
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
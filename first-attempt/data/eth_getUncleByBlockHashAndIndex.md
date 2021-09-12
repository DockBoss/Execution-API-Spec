# `eth_getUncleByBlockHashAndIndex`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_getUncleByBlockHashAndIndex",
	"params":[
		"0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2dda42e0b161", 
		"0x0"
	],
	"id":1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "baseFeePerGas": "0x15",
        "difficulty": "0x5ecbdf55",
        "extraData": "0xd883010a06846765746888676f312e31352e36856c696e7578",
        "gasLimit": "0x7a1200",
        "gasUsed": "0x54e20c",
        "hash": "0xb57171f693016f3a1dea2d325ca1ca28eb9e191e67c007395378a07895b50e3f",
        "logsBloom": "0x00804000000000000000100000004000000008004000008000000000001200000000000000010000000000000000000000010100020000001400000000000000040000000000800000000408000000100000000100010000000008008000000000000020020000000000000000000800020000000800130000000010000000000000000008008000000000000000000000000001200040000020000000000800000000802000200000000000001000000000000000200000000000000000000040008002000000080000080000000000001000000000000000800000000020000000000000000000000000100000000000082000000000400000000000020800",
        "miner": "0xfbb61b8b98a59fbc4bd79c23212addbefaeb289f",
        "mixHash": "0x585fd411854416e251b580e1b0a3f342960acf03d4d13d96bf9f4a18f5364453",
        "nonce": "0xee2e3a940db077ab",
        "number": "0xa385d2",
        "parentHash": "0x4cc388d800be414f91a64dde147bc84ecd1c3ddbb857349fad86592a6e0ca43c",
        "receiptsRoot": "0x458a34f564a23d1f71be75ed457c44767a0d289743926af77221c30a0cfb98a9",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0x43ba62b196a247b498adc5f3e9074447d35a8b4f1c8c0a134cc91118f054a763",
        "timestamp": "0x60ffa2a2",
        "transactionsRoot": "0xa6ee1946d189c05c35656db4cd264595de6173156dd0cee0fd568a9fa9943970",
        "uncles": []
    }
}
```
---
## infura ropsten
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | block with one uncle on etherscan | "0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2dda42e0b161", "0x0" | ^same as above| it works|
0.1 | random valid block hash lenth | "0x0bb54d414023cdd5b8506b24121225c03d6341a475e47ee2ce3e2d0000000000", "0x0" | null | It works
0.2 | block with no uncle on etherscan | "0x8421f2b2986d94c80387247dc19fe5af6495b260b2ed117ae0682d21da31bd55", "0x0" | null | It works|
0.3 | block with no uncle on etherscan | "0x8421f2b2986d94c80387247dc19fe5af6495b260b2ed117ae0682d21da31bd55", "0x100" | null | It works|
---
# TODO
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
1.0 | block with one uncle on etherscan | "0xA385D3" | "0x1"| it works|
1.1 | block with no uncle on etherscan | "0xA38377" | "0x0" | It works

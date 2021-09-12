# `eth_sign`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_sign",
	"params":[
		"0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", 
		"0xdeadbeaf"
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
    "error": {
        "code": -32000,
        "message": "unknown account"
    }
}
```
---
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | does it work with any address| above situation| error code -32000|no because accound is not known or unlocked|
0.1 | does it wor with the coinbase address | same as above but with diffrent address| 0xde8aa31502509a5b2f7174be118e13aa5ffa1448fad0df51ee537c0e5d52fa60217ee63b342a381cdf39ce485eadbee3fdbc3a28323f0df84dfc64eae2d959721b| looks like it works|
0.2 | how long can the message be| really long message| 0xe7139e73d8f2e940264d57d0b0f90645a2857583bc29181c496853156af302bf6a5ea3a2f0e599a0ee661c5ed48e103fa9d4f3bb069920d5250329afbd97a0371b| it works|
0.3 | again but much larger | really really long message | 0xf1c109109742f20c8388ef7216b668cf87d105a054927af86d84b4b76309c1b43424649a61ff9cde752394aa0b126fbf1be588ec8486506d016b8c1650e152511c | it still works|


---
# `eth_sendRawTransaction`

## call
```
{
	"jsonrpc":"2.0",
	"method":"eth_sendRawTransaction",
	"params":["0xf86780821000827000948a10140062e3cab46ccf07604e583b237467f99981ff83006000820a96a09e5bd3a616ab028a206f959921d6db4826be51c4c55b5f2a1b15aeb74aa6960ca078ad44dbd769c5f3493bf9b94005c5ec1366e59114bb19e5e5f697fa21c36921"],
	"id":1
}
```
---
## Return
```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x848b59b16c0a574066adcaf1fec64417f8d408215161581d3faae83448a1adac"
}
```
---
## geth --http --dev
version 1.10.4-stable

Go versoion go1.16.4

OS Windows
#|Test |Params | Result|Notes|
:---|---|:---:|:---:| ---
0.0 | does it work with signed transaction from [0.8]()| above | above | it looks like it works|
0.1 | does it work with a random number the same lenght| above but different number| error -32000| insufficient funds * price + value |
0.2 | ran 0.0 again | above | error -32000| already known |
0.3| ran on 0.10 of signTransaction | 0xf86701821000827000948a10140062e3cab46ccf07604e583b237467f99981ff83006000820a95a0a67044e0694eb9bd1d1daa7f84becd95e2a6997b66c59e3d01d6535c372f7c40a063a8b24c468b06e932438a227ebb9120f727ad2efece7f1bcd07708e5ccdc589 | 0x065b9342153a60172f5927b6336632f10ced1d893df65b13582e0f89b52f2d21 | it works |
0.4| ran it on 0.3 again | ^ | error -32000| already known |
0.5| signTransaction 1.0|  | 0x815c143627ffd5f64bf5f14c46681bf4e731872cd93d386c3c176d3bfdaf71a5 | it works but when I try to get the transaction reciept I get null|
0.6| same as above but with a with real opcodes| | 0x8140d9ba9ce636e2f7541611be26fcfe370504bd155b9e5f86e2876c564c39d0| still returns null

---
 "code": -32000,
        "message": "rlp: value size exceeds available input length"
         "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -32000,
        "message": "rlp: input string too short for common.Address, decoding into (types.LegacyTx).To"
    }
}
"error": {
        "code": -32000,
        "message": "insufficient funds for gas * price + value"
    }
}

curl -X POST -u "apikey:9mQ7gXeWNGZ3AqAKAhat4g-Hw4KQJVoO6pb7zEsWWJYm" ^--header "Content-Type: audio/mp3" ^--data-binary @C:\Users\jared\dev\test.mp3 ^"https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/a8f23dfe-258a-48f4-864b-ca36c3151fbc/v1/recognize"

curl -X POST -u "apikey:9mQ7gXeWNGZ3AqAKAhat4g-Hw4KQJVoO6pb7zEsWWJYm" \
--header "Content-Type: audio/flac" \
--data-binary @{path_to_file}audio-file.flac \
"https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/a8f23dfe-258a-48f4-864b-ca36c3151fbc/v1/recognize"

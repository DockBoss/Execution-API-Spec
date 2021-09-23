# eth_call Spec
```
{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [{
        "type": "",
        "from": "",
        "to": "",
        "data": "",
        "value": "",
        "gas": "",
        "chainId": "",
      Legacy 
       "gasPrice": "",
      OR EIP-1559
      "maxFeePerGas": "",
      "maxPriorityFeePerGas": "",
      
      EIP-2930 and EIP-1559
      "accessList": ""

    }, "latest"],
    "id": 1
}
```
* `type`
  * **MUST** have correct parameters for each transaction type ??? not final!!
* `from`
  * **MUST** consider a default address for when `from` is NULL
    * If that is decided to be the clients coinbase, 0x0..., or another decided upon address
  * **MUST NOT** accept ____ (contract?) addresses but accept EOA and PRecompile addresses? 
    * **SHOULD** allow random addresses(that is not externally owned) to make calls to a contract
* `to` 
  * **MUST** work with any `to` address
    * **MUST** return `0x` when `to` is not a contract
* `gas`
  * **MUST NOT** be zero
* `gasPrice`
  * **MUST** work with all transaction types (TODO look into how/if it gets converted to MFPG and MPFPG)
* `maxFeePerGas`
  * **MUST** work with all transaction types (TODO look into how/if it gets converted)
* `maxPriorityFeePerGas`
  * **MUST** work with all transaction types (TODO look into how/if it gets converted)
* `value`
  * `value` + txt cost **MUST** be less than the `from` account balance
  * **MAY** be null?? 
* `data`
  * **MUST** return the result of executing the code in data **IF** `to` is not used and not null
  * **MUST** be ______ TODO!! (write about use for interacting with contracts)
* `chainId`
  * **MUST** use the chain id of current chain
  * **MUST NOT** be allowed to modify
* `accessList`
  * TODO
* `blockHeight`
  * **MUST** specify the block that will be used in the call
## Tests

1. `from` (origin contract) check if it is a precompile contract(aka contract address)
   1. with no from 
   2. with from empty
   3. with invalid address length
   4. with non-hex values
   5. with address I own/generated
   6. with random address 
2. `to` 
   1. with no to
   2. with to empty
   3. with invalid address length
   4. with non-hex values
   5. with address that does not exist in the scope
   6. with address that does exist in scope (origin contract)
3. `gas`
   1. with no gas
   2. with gas empty
   3. with gas of zero
   4. with gas of 0x9900000
   5. value of 0x9900000000000000000000000000000000000000000000000000000000000000000000000
4. `value` (to = call value contract)
   1. with no value
   2. with value empty
   3. value of zero
   4. value of 0x9000000
   5. value of 0x9999999999999999999999999999999999999999999
5. `data` (need to make a contract to test it better)
   1. with no data 
   2. with data empty
   3. with 0x100
   4. with 0xefgh
   5. with 0x683360005260206000f360005260096017f3 origin contract
6. `gasprice` / `maxFeePerGas` and `maxPriorityFeePerGas` on gasPrice contract
   1. with no gasprice, ect. 
   2. with gasprice on EIP-1559
   3. with maxFeePerGas and maxPriorityFeePerGas on legacy transaction
   4. with gasPrice, ect. empty in their respective transaction types
   5. with gasPrice, ect. zero in their respective transaction types
   6. with gasPrice, ect. 0x9999999999999999999999999999999999999999999999999999999999999 in their respective transaction types
   7. with maxFeePerGas empty and maxPriorityFeePerGas with a value
   8. ^ but flipped 
   9. with maxFeePerGas 0 and maxPriorityFeePerGas with a value
   10. ^ but flipped 
7. `accessList`
   1. Honestly I remember looking into what this does a few months ago 
   2. I don't really know how to use it Rn, but I will look into it tomorrow,
   3. I have a issue in my repo to remind me
8. `chainId`
   1. with no id
   2. with empty id
   3. with id 1
   4. with id 61
   5. with id 99 
9.  empty
    1. whole array empty
    2. object empty  
10. block number
    1. without block number
    2. with block number 1
    3. with latest
    4. with latest + 1  
---
## Test Results
| Test 	| Geth 	| Nethermind 	| Openethereum 	| Besu 	| Erigon 	| Ganache 	| Hardhat 	|
|---	|---	|---	|---	|---	|---	|---	|---	|
|  1.1	| returns 0x...0 	| works returns fffffffffffffffffffffffffffffffffffffffe 	|  	|  	|  	| works used coinbase	| works used first auto generated address not coinbase|
| 1.2 	| error 	| works returns fffffffffffffffffffffffffffffffffffffffe 	|  	|  	|  	| error 	|  error	|
| 1.3 	| error 	| error 	|  	|  	|  	| works 	| error 	|
| 1.4 	| error 	| error 	|  	|  	|  	|  error	|  error	|
| 1.5 	|  works	| works 	|  	|  	|  	|  works	|  works	|
| 1.6 	| works 	| works 	|  	|  	|  	|  works	|  works	|
| 2.1 	| works 	|  works	|  	|  	|  	|  returns 0x 	| returns 0x 	|
| 2.2 	|  error	| works 	|  	|  	|  	|   returns 0x	|  error	|
|  2.3	| error 	| error 	|  	|  	|  	| error 	|  error	|
|  2.4	| error 	| error 	|  	|  	|  	|  error	|  error	|
|  2.5	|  works returns 0x	| works returns 0x 	|  	|  	|  	|  works returns 0x	| works returns 0x 	|
|  2.6	| works 	| works 	|  	|  	|  	|  works returned origin	| works returned origin 	|
|  3.1	|  works	| works 	|  	|  	|  	| works 	| works 	|
|  3.2	|  error	| error 	|  	|  	|  	|  works	|  error	|
|  3.3	|  error	| works 	|  	|  	|  	|  error	| error 	|
|  3.4	|  works	| works 	|  	|  	|  	| works | works 	|
| 3.5   |error   | error  |   |   |   | error  | error  |
| 4.1 	|  works returns 0x0...	| works returns 0x0... 	|  	|  	|  	|  works returns 0x0...	| works returns 0x0... 	|
| 4.2 	|  ^	| error 	|  	|  	|  	|  ^	|  error	|
|  4.3	| ^ 	|  works	|  	|  	|  	|  ^	|  works returns 0x0...	|
|  4.4	| works if account has eth/ error 	| works if account has eth/ error 	|  	|  	|  	| works returns 0x0...9... / t| works returns 0x0.../ t 	|
| 4.5   |  ^/^ | error not enough eth in test account  |   |   |   |  works returns 0x0...9...	| works returns 0x0...9...  |
|  5.1	| works	| works 	|  	|  	|  	|  works t	|  works t	|
|  5.2	|  works	| works	|  	|  	|  	|  works	| error 	|
|  5.3	| error 	|  works	|  	|  	|  	|  works	|  error	|
|  5.4	| error 	| error 	|  	|  	|  	| works 	| error 	|
|  5.5	|  works returns 0x3360005260206000f3"	| works returns 0x3360005260206000f3	|  	|  	|  	| works returns 0x3360005260206000f3	| works 	|
|  6.1	| returns 0x0... 	| returns 0x0... 	|  	|  	|  	|  works returns 4a817c800| works returns 0 	|
|  6.2	| works returns gasPrice 	| returns 0x0... 	|  	|  	|  	|  works	returns gasPrice| works retuns gasPrice	|
|  6.3	| works returns 22526067 + MPFP	| returns 0x0... 	|  	|  	|  	|  works returns	4a817c800| works? returns MPFPG not MFPG 	|
|  6.4	| works returns 0 for both	| error for both	|  	|  	|  	|  works returns	4a817c800 for type 2 and 0 for type 1| error 	|
|  6.5	| works returns 0 for both 	| works returns 0 for both 	|  	|  	|  	|  works returns	4a817c800 for type 2 and 0 for type 1	| works returns 0 for both 	|
|  6.6	| error 	| works returns large number for both 	|  	|  	|  	|  returns large number for type 1 and 4a817c800 for type 2 	| works returns very large number for both  	|
|  6.7	|  error	| error 	|  	|  	|  	| returns 4a817c800 	| error 	|
|  6.8	| works returns 22526067 	| error 	|  	|  	|  	|  returns 4a817c800	| error 	|
| 6.9 	| error 	| works returns 0x0... 	|  	|  	|  	|  	| error 	|
|  6.10	| works returns 22526067 	| works returns 2801610c	|  	|  	|  	|  	| works returns 0 |
| 7.1 	|  	|  	|  	|  	|  	|  	|  	|
|  7.2	|  	|  	|  	|  	|  	|  	|  	|
|  7.3	|  	|  	|  	|  	|  	|  	|  	|
|  8.1	| returns 539 	|  returns 63	|  	|  	|  	| returns 0x..1 	|  returns 0x...7a69	|
|  8.2	| returns 539  	| returns 63 	|  	|  	|  	|  returns 0x..1	|  returns 0x...7a69	|
|  8.3	| returns 539  	| returns 63 	|  	|  	|  	| returns 0x..1  	|  returns 0x...7a69	|
|  8.4	| returns 539  	| returns 63 	|  	|  	|  	| returns 0x..1 	|  returns 0x...7a69	|
|  8.5	| returns 539  	| returns 63 	|  	|  	|  	| returns 0x..1  	| returns 0x...7a69 	|
| 9.1 	| error 	| error 	| error 	|  	| error 	| error	|  error	|
| 9.2 	|  works	| works 	| works 	|  	|  error	| returned 0x 	|  returned 0x	|
| 10.1 	| error 	| works 	| works 	|  	|  	|  	|  	|
|  10.2	| works 	| works 	|  error	|  	|  	|  	|  	|
|  10.3	| works 	| work 	| works 	|  	|  	|  	|  	|
| 10.4 	| error	|  error	| error	|  	|  	|  	|  	|
---

## Notable behavior

* Ganache test-1.3 will allows `from` to be any length even 0x
* Hardhat test-6.3 will return maxPriorityFeePerGas for GASPRICE
* ganache and hardhat will work without the extra default block parameter of block number
* nethermind allows a `to` of length 0xF2E246BB76DF876Cef8b38ae84130F4F55De3900 and 0xF2E246BB76DF876Cef8b38ae84130F4F55De390 without error

## Error Messages

I am not sure how to do this in an organized fashion but here is my attempt rn, subject to change
### Geth
* 1.2
  * "code": -32602,
  * "message": "invalid argument 0: hex string has length 0, want 40 for common.Address"
* 1.3
  * see 1.2
* 1.4
  * * "code": -32602,
  * "message": "invalid argument 0: json: cannot unmarshal invalid hex string into Go struct field TransactionArgs.from of type common.Address"
* 2.2
  * see 1.2
* 2.3
  * see 1.2
* 2.4
  * see 1.4
* 3.2
  * "code": -32000,
  * "message": "err: intrinsic gas too low: have 0, want 21000 (supplied gas 0)"
* 3.3
  * see 3.2
* 3.5
  * "code": -32602,
  * "message": "invalid argument 0: json: cannot unmarshal hex number > 64 bits into Go struct field TransactionArgs.gas of type hexutil.Uint64
* 4.4
  * "code": -32000,
  * "message": "err: insufficient funds for gas * price + value: address 0xA3D90D1109AbC018667192CbcA2B3F0378dc4Bb1 have 0 want 150994944 (supplied gas 50000000)"
* 4.5
  * see 4.4
* 5.3
  * "code": -32602,
  * "message": "invalid argument 0: json: cannot unmarshal hex string of odd length into Go struct field TransactionArgs.data of type hexutil.Bytes"
* 5.4
  * "code": -32602,
  * "message": "invalid argument 0: json: cannot unmarshal invalid hex string into Go struct field TransactionArgs.data of type hexutil.Bytes"
* 6.6
  * see 4.4 
* 6.7
  * "code": -32000,
  * "message": "err: max priority fee per gas higher than max fee per gas: address 0xA3D90d1109Abc018667192CbCA2b3f0378DC4bb3, maxPriorityFeePerGas: 16, maxFeePerGas: 0 (supplied gas 50000000)"
* 9.1
  *  "code": -32602,
  *  "message": "missing value for required argument 0"
* 10.1
  *  "code": -32602,
  *  "message": "missing value for required argument 1"
* 10.4
  *  "code": -32000,
  *  "message": "header not found"

### Nethermind
* 1.3
  * "code": -32602,
  * "message": "Invalid params"
* 1.4
  * see 1.3
* 2.3
  * see 1.3
* 2.4
  * see 1.3
* 3.2
  * see 1.3
* 3.5
  * see 1.3
* 4.2
  * see 1.3
* 4.4
  * "code": -32000,
  * "message": "insufficient funds for transfer: address 0x2b5ad5c4795c026514f8317c7a215e218dccd6c0"
* 4.5
  * see 4.4
* 5.4
  * see 1.3
* 6.4
  * see 1.3
* 6.7
  * see 1.3
* 6.8
  * see 1.3
* 9.1
  * "code": -32602,
  * "message": "Invalid params",
  * "data": "Incorrect parameters count, expected: 2, actual: 0"
* 10.4
  * "code": -32001,
  * "message": "256 could not be found"
### Openetereum

* 9.1
  * "code": -32602,
  * "message": "`params` should have at least 1 argument(s)"
* 10.2
  * "code": -32000,
  * "message": "This request is not supported because your node is running with state pruning. Run with --pruning=archive."
* 10.4
  * see 10.2

### Besu

### Erigon

* 9.1 
  * "code": -32602,
  * "message": "missing value for required argument 0"
* 9.2 
  * "code": -32602, 
  * "message": "missing value for required argument 1"
### Ganache
* 1.2 
  * "message": "from not found; is required",
  * "code": -32000,
  *  "data": { "stack": "TXRejectedError: from not found; is required\n    at StateManager.queueTransaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\statemanager.js:345:14)\n    at GethApiDouble.eth_call (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:358:14)\n    at GethApiDouble.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:109:10)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:37:5)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at DelayedBlockFilter.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\delayedblockfilter.js:31:3)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at RequestFunnel.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\requestfunnel.js:32:12)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at Web3ProviderEngine._handleAsync (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:123:3)\n    at Timeout._onTimeout (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:107:12)\n    at listOnTimeout (internal/timers.js:531:17)",
  *  "name": "TXRejectedError"
* 1.4 
  *   "message": "Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: 0xj",
  *   "code": -32000,
  *   "data": { "stack": "Error: Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: 0xj\n    at Object.exports.toBuffer (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-util\\src\\bytes.ts:78:15)\n    at Function.fromJSON (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:204:21)\n    at StateManager.queueTransaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\statemanager.js:371:22)\n    at GethApiDouble.eth_call (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:358:14)\n    at GethApiDouble.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:109:10)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:37:5)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at DelayedBlockFilter.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\delayedblockfilter.js:31:3)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at RequestFunnel.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\requestfunnel.js:32:12)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at Web3ProviderEngine._handleAsync (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:123:3)",
  *   "name": "Error"
* 2.3
  *  "message": "The field to must have byte length of 20",
  * "code": "ERR_ASSERTION",
  * "data": { "stack": "AssertionError [ERR_ASSERTION]: The field to must have byte length of 20\n    at Transaction.setter [as to] (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-util\\src\\object.ts:57:9)\n    at C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:116:23\n    at Array.forEach (<anonymous>)\n    at initData (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:110:18)\n    at new Transaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:168:5)\n    at Function.fromJSON (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:228:16)\n    at StateManager.queueTransaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\statemanager.js:371:22)\n    at GethApiDouble.eth_call (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:358:14)\n    at GethApiDouble.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:109:10)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:37:5)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at DelayedBlockFilter.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\delayedblockfilter.js:31:3)",
  * "name": "AssertionError"
* 2.4
  * "message": "The field to must have byte length of 20",
  * "code": "ERR_ASSERTION",
  * "data": {"stack": "AssertionError [ERR_ASSERTION]: The field to must have byte length of 20\n    at Transaction.setter [as to] (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-util\\src\\object.ts:57:9)\n    at C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:116:23\n    at Array.forEach (<anonymous>)\n    at initData (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:110:18)\n    at new Transaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:168:5)\n    at Function.fromJSON (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:228:16)\n    at StateManager.queueTransaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\statemanager.js:371:22)\n    at GethApiDouble.eth_call (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:358:14)\n    at GethApiDouble.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:109:10)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:37:5)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at DelayedBlockFilter.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\delayedblockfilter.js:31:3)",
  * "name": "AssertionError"
* 3.3
  * "message": "base fee exceeds gas limit",
  * "code": -32000,
  * "data": { "stack": "Error: base fee exceeds gas limit\n    at VM.<anonymous> (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-vm\\lib\\runTx.ts:107:11)\n    at step (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-vm\\dist\\runTx.js:33:23)\n    at Object.next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-vm\\dist\\runTx.js:14:53)\n    at fulfilled (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-vm\\dist\\runTx.js:5:58)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)",
  * "name": "Error"
* 3.5
  * "message": "The field gasLimit must not have more 32 bytes",
  * "code": "ERR_ASSERTION",
  * "data": { "stack": "AssertionError [ERR_ASSERTION]: The field gasLimit must not have more 32 bytes\n    at Transaction.setter (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\ethereumjs-util\\src\\object.ts:52:9)\n    at Transaction.set [as gasLimit] (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:28:22)\n    at C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:116:23\n    at Array.forEach (<anonymous>)\n    at initData (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:110:18)\n    at new Transaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:168:5)\n    at Function.fromJSON (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\utils\\transaction.js:228:16)\n    at StateManager.queueTransaction (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\statemanager.js:371:22)\n    at GethApiDouble.eth_call (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:358:14)\n    at GethApiDouble.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\geth_api_double.js:109:10)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:37:5)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)",
  * "name": "AssertionError"
* 9.1 
  * "message": "Cannot read property 'from' of undefined",
  * "code": -32000,
  * "data": { "stack": "TypeError: Cannot read property 'from' of undefined\n    at GethDefaults.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\gethdefaults.js:20:14)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at SubscriptionSubprovider.FilterSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\filters.js:89:7)\n    at SubscriptionSubprovider.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\subproviders\\subscriptions.js:137:49)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at DelayedBlockFilter.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\delayedblockfilter.js:31:3)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at RequestFunnel.handleRequest (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\lib\\subproviders\\requestfunnel.js:32:12)\n    at next (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:136:18)\n    at Web3ProviderEngine._handleAsync (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:123:3)\n    at Timeout._onTimeout (C:\\Program Files\\WindowsApps\\GanacheUI_2.5.4.0_x64__5dg5pnz03psnj\\app\\resources\\static\\node\\node_modules\\ganache-core\\node_modules\\web3-provider-engine\\index.js:107:12)\n    at listOnTimeout (internal/timers.js:531:17)\n    at processTimers (internal/timers.js:475:7)",
  * "name": "TypeError"
### Hardhat
* 1.2
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/from: ADDRESS | undefined"
* 1.3
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"0x00\" supplied to : RpcCallRequest/from: ADDRESS | undefined"
* 1.4
  *  "code": -32602,
  *  "message": "Errors encountered in param 0: Invalid value \"0x5fbdb2315678afecb367f032d93f642f64180ppp\" supplied to : RpcCallRequest/from: ADDRESS | undefined"
* 2.2
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/to: ADDRESS | undefined"
* 2.3
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"0x00\" supplied to : RpcCallRequest/to: ADDRESS | undefined"
* 2.4
  *  "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"0x5fbdb2315678afecb367f032d93f642f64180ppp\" supplied to : RpcCallRequest/to: ADDRESS | undefined" 
* 3.2
  *  "code": -32602,
  *  "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/gas: QUANTITY | undefined"
* 3.3
  * "code": -32603,
  * "message": "Error: base fee exceeds gas limit"
* 3.5
  * "code": -32603,
  *  "message": "Error: gasLimit cannot exceed MAX_INTEGER, given 4755653448168584765610842747903974283460611941999637548024436779040837690182350403534848"
* 4.2
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/value: QUANTITY | undefined"
* 5.2
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/data: DATA | undefined"
* 5.3
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"0x100\" supplied to : RpcCallRequest/data: DATA | undefined"
* 5.4
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"0xefgh\" supplied to : RpcCallRequest/data: DATA | undefined"
* 6.4
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/maxFeePerGas: QUANTITY | undefined, Invalid value \"\" supplied to : RpcCallRequest/maxPriorityFeePerGas: QUANTITY | undefined"
* 6.7
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/maxFeePerGas: QUANTITY | undefined"
* 6.8
  * "code": -32602,
  * "message": "Errors encountered in param 0: Invalid value \"\" supplied to : RpcCallRequest/maxPriorityFeePerGas: QUANTITY | undefined"
* 6.9
  * "code": -32000,
  * "message": "maxPriorityFeePerGas (69474193434150850223544841026712298960852494309046213052299677441027102212096) is bigger than maxFeePerGas (0)"
* 9.1
  * "code": -32602,
  * "message": "Expected between 1 and 2 arguments and got 0"


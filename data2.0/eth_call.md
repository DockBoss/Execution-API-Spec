# eth_call

## Tests

1. `from`
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
5. `data`
   1. with no data 
   2. with data empty
   3. with 0x100
   4. with 0xefgh
   5. with 0x683360005260206000f360005260096017f3 origin contract
6. `gasprice` / `maxFeePerGas` and `maxPriorityFeePerGas`
   1. with no gasprice, ect. 
   2. with gasprice on EIP-1559
   3. with maxFeePerGas and maxPriorityFeePerGas on legacy transaction
   4. with gasPrice, ect. empty in their respective transaction types
   5. with gasPrice, ect. zero in their respective transaction types
   6. with gasPrice, ect. a very large number in their respective transaction types
   7. with maxFeePerGas empty and maxPriorityFeePerGas with a value
   8. ^ but flipped 
   9.  MFPG of 0 and MPFPG value
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
   5. with id 9999 
9.  empty
   6. whole array empty
   7. object empty  
---
## Test Results
| Test 	| Geth 	| Nethermind 	| Openethereum 	| Besu 	| Erigon 	| Ganache 	| Hardhat 	|
|---	|---	|---	|---	|---	|---	|---	|---	|
|  1.1	|  	|  	|  	|  	|  	| works used coinbase	|  	|
| 1.2 	|  	|  	|  	|  	|  	| error 	|  	|
| 1.3 	|  	|  	|  	|  	|  	| works 	|  	|
| 1.4 	|  	|  	|  	|  	|  	|  error	|  	|
| 1.5 	|  	|  	|  	|  	|  	|  works	|  	|
| 1.6 	|  	|  	|  	|  	|  	|  works	|  	|
| 2.1 	|  	|  	|  	|  	|  	| works returns 0x 	|  	|
| 2.2 	|  	|  	|  	|  	|  	|  works returns 0x	|  	|
|  2.3	|  	|  	|  	|  	|  	| error 	|  	|
|  2.4	|  	|  	|  	|  	|  	|  error	|  	|
|  2.5	|  	|  	|  	|  	|  	|  works returns 0x	|  	|
|  2.6	|  	|  	|  	|  	|  	|  works returned expeced value	|  	|
|  3.1	|  	|  	|  	|  	|  	| works 	|  	|
|  3.2	|  	|  	|  	|  	|  	|  works	|  	|
|  3.3	|  	|  	|  	|  	|  	|  error	|  	|
|  3.4	|  	|  	|  	|  	|  	| works with any number under 32 bytes|  	|
| 3.5   |   |   |   |   |   | error  |   |
| 4.1 	|  	|  	|  	|  	|  	|  works returns 0x0...	|  	|
| 4.2 	|  	|  	|  	|  	|  	|  ^	|  	|
|  4.3	|  	|  	|  	|  	|  	|  ^	|  	|
|  4.4	|  	|  	|  	|  	|  	| works returns 0x0...9000000 |  	|
| 4.5   |   |   |   |   |   |  works returns 0x0...9...	|   |
|  5.1	|  	|  	|  	|  	|  	|  	|  	|
|  5.2	|  	|  	|  	|  	|  	|  	|  	|
|  5.3	|  	|  	|  	|  	|  	|  	|  	|
|  5.4	|  	|  	|  	|  	|  	|  	|  	|
|  5.5	|  	|  	|  	|  	|  	|  	|  	|
|  6.1	|  	|  	|  	|  	|  	|  	|  	|
|  6.2	|  	|  	|  	|  	|  	|  	|  	|
|  6.3	|  	|  	|  	|  	|  	|  	|  	|
|  6.4	|  	|  	|  	|  	|  	|  	|  	|
|  6.5	|  	|  	|  	|  	|  	|  	|  	|
|  6.6	|  	|  	|  	|  	|  	|  	|  	|
|  6.7	|  	|  	|  	|  	|  	|  	|  	|
|  6.8	|  	|  	|  	|  	|  	|  	|  	|
|  6.9	|  	|  	|  	|  	|  	|  	|  	|
|  6.10	|  	|  	|  	|  	|  	|  	|  	|
| 7.1 	|  	|  	|  	|  	|  	|  	|  	|
|  7.2	|  	|  	|  	|  	|  	|  	|  	|
|  7.3	|  	|  	|  	|  	|  	|  	|  	|
|  8.1	|  	|  	|  	|  	|  	|  	|  	|
|  8.2	|  	|  	|  	|  	|  	|  	|  	|
|  8.3	|  	|  	|  	|  	|  	|  	|  	|
|  8.4	|  	|  	|  	|  	|  	|  	|  	|
|  8.5	|  	|  	|  	|  	|  	|  	|  	|
| 9.1 	|  	|  	|  	|  	|  	| error	|  	|
| 9.2 	|  	|  	|  	|  	|  	| returned 0x 	|  	|
---

## Notable behavior

* Ganache test-1.3 will allows `from` to be any length even 0x


## Error Messages

I am not sure how to do this in an organized fashion but here is my attempt rn, subject to change
### Geth

### Nethermind

### Openetereum

### Besu

### Erigon

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
* 9.1 
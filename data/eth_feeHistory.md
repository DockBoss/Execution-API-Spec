# `eth_feeHistory`

## call

```
{
	"jsonrpc":"2.0",
	"method":"eth_feeHistory",
	"params":[
        "0x10" ,
        "0x0",
        [0]
    ],
	"id":64
}
```

## return

```
{
    "jsonrpc": "2.0",
    "id": 64,
    "result": {
        "oldestBlock": "0x0",
        "reward": [
            [
                "0x0"
            ]
        ],
        "baseFeePerGas": [
            "0x3b9aca00",
            "0x342770c0"
        ],
        "gasUsedRatio": [
            0
        ]
    }
}
```

## Block_Count

mess with block_count 0, 1, 10, ect, ahead or chain

* with block count 0 returns null

    ```
    {
    "jsonrpc": "2.0",
    "id": 99,
    "result": {
        "gasUsedRatio": null,
        "oldestBlock": "0x0"
    }
    }
   ```
* with 1-100 works fine
* doesn't allow more than 1025 blocks to be returned in a single call.
    ```
    {
	"jsonrpc":"2.0",
	"method":"eth_feeHistory",
	"params":["0xfffff",
    "latest",
    [0,10,12,30,50,99]],
	"id":99
    }
    ```

## Newest Block


test newest block latest, pending, 0, 10

* latest works fine
* pending works
* earliest works too returns 0 for all
* any block behind head works too 

* if there is not enough blocks to fill request it will return as many as it has.

## Reward Percentiles

test with many different rewards

* empty array works 
    * it only returns the baseFeePerGas, gasUsedRatio, and oldestBlock it does not return reward array
* list 0-99 works, 0-100 works returns 101 points per, 0-99,99,99,99 returns 105 points

* Does not work in the array is not in accending order, but allows repeats and adds duplicates to the return value 
    * got 140 returns so far probably no upper limit
    * only works with numbers less than 101
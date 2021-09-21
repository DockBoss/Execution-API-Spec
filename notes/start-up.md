# Geth
```
geth --http -dev
```
# Hyperledger Besu
need to run as admin, some permissions issues I am not sure how to resolve
```
besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-http-enabled --rpc-http-port=8590 --network-id=2018
bin/ethsigner --chain-id=2018 --downstream-http-port=8590 file-based-signer --key-file=C:/eth/keyfile.txt --password-file=C:/eth/pwd.txt

```

Error: Returned error: Wrong chainId
# Nethermind 

must be in nethermind folder
```
./nethermind.launcher.exe
```
spaceneth config

# Erigon
looks like if you do it this way you will have to delete the files in eth/erigon first. Idk how to re-start it
```
./erigon/build/bin/erigon.exe --datadir "C:\Eth\eriogn" --chain dev

./erigon/build/bin/rpcdaemon.exe --http.api=eth,erigon,web3,net,debug,trace,txpool,shh

```
need to find an erigon address to send from
Error: Returned error: INVALID: invalid sender
 err="INVALID: invalid sender"
# Openethereum
```
./openethereum/openethereum.exe --config dev
```
# Ganache

start prebuilt I made, if using anything else just make sure you are on the right port

# Hardhat

need to look a little deeper but 

I don't think clean in necessary but if it doesn't work try that first
```
cd hard-hat

npx hardhat clean

npx hardhat node
```


{
  address: '0x566c94a7E69B76Ba86F2a550081Ef1E69FD9D875',
  privateKey: '0x849e55af61ee8672aa44947950375b474bb586c737d3cbc45fa798ff84e1c558',
  signTransaction: [Function: signTransaction],
  sign: [Function: sign],
  encrypt: [Function: encrypt]
}
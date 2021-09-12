# Geth
```
geth --http -dev
```
# Hyperledger Besu
need to run as admin, some permissions issues I am not sure how to resolve
```
besu --network=dev --rpc-http-enabled
```
# Nethermind 

must be in nethermind folder
```
./nethermind.launcher.exe
```
spaceneth config

# Erigon
looks like if you do it this way you will have to delete the files in eth/erigon first. Idk how to re-start it
```
./erigon/build/bin/erigon.exe --datadir "C:\Eth\eriogn"

./erigon/build/bin/rpcdaemon.exe --http.api=eth,erigon,web3,net,debug,trace,txpool,shh
```
# Openethereum
```
./openethereum/openethereum.exe
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
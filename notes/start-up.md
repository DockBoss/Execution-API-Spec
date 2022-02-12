# Geth
```
geth -http --sepolia --port 30003 --datadir C:\Eth\geth --allow-insecure-unlock --unlock 0xea1b261fb7ec1c4f2beea2476f17017537b4b507
```
# Hyperledger Besu
```
C:\Users\jared> start_besu.bat

```

Error: Returned error: Wrong chainId
# Nethermind 
```
./nethermind.launcher.exe
```
```
  },
  "Network": {
    "DiscoveryPort": 30300,
    "P2PPort": 30300,
    "ActivePeersMaxCount": 4
  },
  "JsonRpc": {
    "Enabled": true,
    "Timeout": 20000, 
    "Host": "127.0.0.1",
    "Port": 8520,
    "EnabledModules": [
      "Admin", "Baseline", "Clique", "Consensus", "Db", "Debug", "Deposit", "Erc20", "Eth", "Evm", 
      "Health Mev", "NdmConsumer", "NdmProvider", "Net", "Nft", "Parity", "Personal", "Proof", "Subscribe", "Trace", "TxPool", "Vault", "Web3"
    ]      
  },
  "Keystore": {
    "BlockAuthorAccount": "0xea1b261fb7ec1c4f2beea2476f17017537b4b507",
    "UnlockAccounts": ["0xea1b261fb7ec1c4f2beea2476f17017537b4b507"],
    "Passwords": ["test"] 
  },
```
in `.cfg` file

# Erigon 

I think I am going to have to change the p2p port for Erigon to work with besu
```
 C:\Users\jared\erigon> ./build/bin/erigon --private.api.addr=localhost:9090 --port 30000 --chain sepolia --datadir C:\Eth\erigon

C:\Users\jared\erigon> ./build/bin/rpcdaemon --private.api.addr=localhost:9090 --http.api=eth,erigon,web3,net,debug,trace,txpool --http.port=8560 --datadir C:\Eth\erigon

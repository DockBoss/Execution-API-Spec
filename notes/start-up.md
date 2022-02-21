# Geth
```
C:\Eth> start_geth.bat
```
start_geth.bat contents
```
geth --http --sepolia --port 30003 --syncmode snap --datadir C:\Eth\geth --allow-insecure-unlock --unlock 0xea1b261fb7ec1c4f2beea2476f17017537b4b507
```
# Hyperledger Besu
```
C:\Eth> start_besu.bat
```
start_besu.bat contents
```
besu --network=sepolia --sync-mode=FAST --fast-sync-min-peers=1 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-http-enabled --rpc-http-port=8500 --data-path=C:\Eth\besu --metrics-enabled
```

Error: Returned error: Wrong chainId
# Nethermind 
```
dotnet run -c Release --no-build --config sepolia --datadir C:\Eth\nethermind
```
```
  },
  "Network": {
    "DiscoveryPort": 30300,
    "P2PPort": 30300,
    "ActivePeersMaxCount": 10
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
  "Sync": {
    "FastSync": true,
    "PivotNumber": 500000,
    "PivotHash": "0xb61bda10b43f8f5757b27af2102f5b60ae42b32d3fc36250b76b43e33c99d3ac",
    "PivotTotalDifficulty": "0xf917a5713ddb",
    "FastBlocks": true
  },
  "Keystore": {
    "BlockAuthorAccount": "0xea1b261fb7ec1c4f2beea2476f17017537b4b507",
    "UnlockAccounts": ["0xea1b261fb7ec1c4f2beea2476f17017537b4b507"],
    "Passwords": ["test"] 
  },
```
in `.cfg` file

# Erigon 

CHek Syncmode
```
C:\Eth> start_erigon.bat
```
start_erigon.bat contents
```
 C:\Users\jared\erigon> ./build/bin/erigon --private.api.addr=localhost:9090 --port 30000 --chain sepolia --datadir C:\Eth\erigon

C:\Users\jared\erigon> ./build/bin/rpcdaemon --private.api.addr=localhost:9090 --http.api=eth,erigon,web3,net,debug,trace,txpool --http.port=8560 --datadir C:\Eth\erigon

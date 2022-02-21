Basic contracts that I used for some tests.
Disclamer -- I did not write these contracts except for ORIGIN and chainId 

# chain id (use it)

```
0x684660005260206000f360005260096017f3
```

# CALLVALUE contract (use it)

```
0x683460005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x3460005260206000f3;
        return memory[0x17:0x20];
    }
}
```
## 0x3460005260206000f3
```
contract Contract {
    function main() {
        memory[0x00:0x20] = msg.value;
        return memory[0x00:0x20];
    }
}
```

# balance contract (use it)

```
0x69303160005260206000f3600052600a6016f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x303160005260206000f3;
        return memory[0x16:0x20];
    }
}
```

## 0x303160005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = address(this).balance;
        return memory[0x00:0x20];
    }
}
```

# ORIGIN contract (use it)

```
0x683360005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x3260005260206000f3;
        return memory[0x17:0x20];
    }
}
```
## 0x3260005260206000f3
```
contract Contract {
    function main() {
        memory[0x00:0x20] = tx.origin;
        return memory[0x00:0x20];
    }
}
```

# DIFICULTY contract (use it)

0x684460005260206000f360005260096017f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x4460005260206000f3;
        return memory[0x17:0x20];
    }
}
```

## 0x4460005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = block.difficulty;
        return memory[0x00:0x20];
    }
}
```

# blockhash contract (I think I use it, need to test again)

```
0x69434060005260206000f3600052600a6016f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x434060005260206000f3;
        return memory[0x16:0x20];
    }
}
```

## 0x434060005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = block.blockHash(block.number);
        return memory[0x00:0x20];
    }
}
```

# coinbase contract

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x4160005260206000f3;
        return memory[0x17:0x20];
    }
}
```
```
0x684160005260206000f360005260096017f3
```

## var from above 0x416.... 

```
contract Contract {
    function main() {
        memory[0x00:0x20] = block.coinbase;
        return memory[0x00:0x20];
    }
}
```

# contract CALLER
```
0x683360005260206000f360005260096017f3
```
```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x3360005260206000f3;
        return memory[0x17:0x20];
    }
}
```
## var above 0x3360005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = msg.sender;
        return memory[0x00:0x20];
    }
}
```




# gas contract

```
0x685a60005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x5a60005260206000f3;
        return memory[0x17:0x20];
    }
}
```

## 0x5a60005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = msg.gas;
        return memory[0x00:0x20];
    }
}
```

# gas SSTORE contract

```
0x6e5a60005560005460005260206000f3600052600f6011f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x5a60005560005460005260206000f3;
        return memory[0x11:0x20];
    }
}
```

## 0x5a60005560005460005260206000f3

```
contract Contract {
    function main() {
        storage[0x00] = msg.gas;
        memory[0x00:0x20] = storage[0x00];
        return memory[0x00:0x20];
    }
}
```

# gaslimit contract

```
0x684560005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x4560005260206000f3;
        return memory[0x17:0x20];
    }
}
```

## 0x4560005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = block.gaslimit;
        return memory[0x00:0x20];
    }
}
```

# gasprice contract (use it)

```
0x683a60005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x3a60005260206000f3;
        return memory[0x17:0x20];
    }
}
```
## 0x3a60005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = tx.gasprice;
        return memory[0x00:0x20];
    }
}
```




# number contract

```
0x684360005260206000f360005260096017f3
```

```
contract Contract {
    function main() {
        memory[0x00:0x20] = 0x4360005260206000f3;
        return memory[0x17:0x20];
    }
}
```

## 0x4360005260206000f3

```
contract Contract {
    function main() {
        memory[0x00:0x20] = block.number;
        return memory[0x00:0x20];
    }
}
```


# idk contract

```
contract Contract {
    function main() {
        var var0 = 0x02a1;
        var var1 = 0x0053;
        var var2 = 0x0b;
        memory[var2:var2 + var0] = code[var1:var1 + var0];
    
        if (byte(memory[var2:var2 + 0x20], 0x00) == 0x73) {
            memory[0x00:0x20] = address(this);
            var temp0 = var2;
            memory[temp0:temp0 + 0x01] = 0x73;
            return memory[temp0:temp0 + var0];
        } else {
            memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
            memory[0x04:0x24] = 0x00;
            revert(memory[0x00:0x24]);
        }
    }
}
```
```
0x6102a1610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061005d576000357c010000000000000000000000000000000000000000000000000000000090048063291c4b9814610062578063c37ccbd314610092575b600080fd5b61007c600480360381019061007791906100f8565b6100c2565b604051610089919061016c565b60405180910390f35b6100ac60048036038101906100a79190610121565b6100cd565b6040516100b9919061016c565b60405180910390f35b600080829050600080fd5b600081836100db9190610187565b905092915050565b6000813590506100f281610254565b92915050565b60006020828403121561010a57600080fd5b6000610118848285016100e3565b91505092915050565b6000806040838503121561013457600080fd5b6000610142858286016100e3565b9250506020610153858286016100e3565b9150509250929050565b6101668161021b565b82525050565b6000602082019050610181600083018461015d565b92915050565b60006101928261021b565b915061019d8361021b565b9250817f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038313600083121516156101d8576101d7610225565b5b817f80000000000000000000000000000000000000000000000000000000000000000383126000831216156102105761020f610225565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b61025d8161021b565b811461026857600080fd5b5056fea2646970667358221220cef7a31d885883915a67926f53e4c6595dad92a6124c33b00a1fc55df8ff3a5a64736f6c63430008030033
```

```
contract Contract {
    function main() {
        memory[0x40:0x60] = 0x60;
        memory[0x00:0x72] = code[0x10:0x82];
        return memory[0x00:0x72];
    }
}
```

```
0x606060405260728060106000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480636ffa1caa146037576035565b005b604b60048080359060200190919050506061565b6040518082815260200191505060405180910390f35b6000816002029050606d565b91905056
```


# Deploy

```shell
1. npm install --legacy-peer-deps

2. passed in your mnemonic in line 7 of hardhat.config.js

3. npx hardhat run scripts/deploy.js --network mainnet
```

# Verify

```shell

1. passed in your API KEY in line 8 of hardhat.config.js

2. npx hardhat verify --network mainnet {contract address} {bridge address}

e.g npx hardhat verify --network mainnet 0x710bDa329b2a6224E4B44833DE30F38E7f81d564 0xb8901acB165ed027E32754E0FFe830802919727f

note that the bridge address is {0xb8901acB165ed027E32754E0FFe830802919727f}
```

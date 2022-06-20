# Metayield - Allow any project to bootstrap liquidity through staking on Meta Pool.

**Prerequisites**
In order to interact with the smart contract, we need it deployed. Once you have it, copy the smart contract account Id that we are going to use on the Dapp.
Metayield needs to interact with Metapool smart contract to fetch specific data, eg stICP price.

## Environment Setup

### Local Environment Setup
1. clone this repo locally
```bash
git clone https://github.com/Narwallets/meta-yield
```
2. install dependencies
```bash
yarn
```
4. open next.config.js and set the CONTRACT_ID env variable with the katherine fundraising smart contract and set METAPOOL_CONTRACT_ID en variable with the MetaPool smart contract.
```json
module.exports = {
  reactStrictMode: true,
  env: {
    CONTRACT_ID: 'dev-1647362531405-23502905659580',
    METAPOOL_CONTRACT_ID: 'meta-v2.pool.testnet'
  }
}
````
3. run the development server
```bash
npm run dev
# or
yarn dev
```

### DEV Environment Setup
1. clone this repo locally (skip if already done on local env setup)
```bash
git clone ...
```
2. install dependencies (skip if already done on local env setup)
```bash
yarn
```
3. deploy
```bash
vercel
```
4. add CONTRACT_ID and METAPOOL_CONTRACT_ID env variables
```bash
vercel env add NEXT_PUBLIC_CONTRACT_ID 
vercel env add NEXT_PUBLIC_METAPOOL_CONTRACT_ID
```

### DEV Production Setup
1. clone this repo locally (skip if already done on local/dev env setup)
```bash
git clone ... 
```
2. install dependencies (skip if already done on local/dev env setup)
```bash
yarn 
```
3. deploy
```bash
vercel --prod
```
4. add CONTRACT_ID env variable (skip if already done on dev env setup)
```bash
vercel env add NEXT_PUBLIC_CONTRACT_ID
vercel env add NEXT_PUBLIC_METAPOOL_CONTRACT_ID
```

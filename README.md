# Meta Yield

Meta Yield on ICP - Supernova Hackathon

## Dependencies

- [dfx](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html)
- [cmake](https://cmake.org/)
- [npm](https://nodejs.org/en/download/)

If you want to deploy the rust version, make sure you add wasm as a target:

```
rustup target add wasm32-unknown-unknown
```
## Quickstart

This deploys a local ledger, two DIP20 Tokens, II, and our project.

```bash
git clone --recurse-submodules --shallow-submodules https://github.com/Narwallets/meta-yield-ic.git
cd meta-yield-icp
make install
```

The install scripts output the URL to visit the exchange frontend, or you can regenerate the URL `"http://localhost:8000?canisterId=$(dfx canister id frontend)"`. To interact with the exchange, you can create a local internet identity by clicking the login button. 

You can give yourself some tokens and ICP by running an initialization script with your II Principal that you can copy from the frontend. After adding balanced reload the frontend.

```bash
make init-local II_PRINCIPAL=<YOUR II PRINCIPAL>
```

## Development

Reinstall backend canister

```bash
dfx deploy meta_yield -m reinstall --argument '(null)'
```

Local frontend development

```bash
make frontend
```

## Backend

### To create projects
```
utils/create_project.sh <project_file>
```
Were <project_file> is on utils/mainnet

### To get kickstarters
```
$ dfx canister call meta_yield get_kickstarters
```

### To get goals
```
$ dfx canister call meta_yield get_goals <kickstarter id>
```

### To get project details
```
$ dfx canister call meta_yield get_project_details <kickstarter id>
```

### To get supported projects:

```
$ dfx canister call meta_yield get_supported_projects '("default")'

```

### To approve 

```
$ export LEDGER=$(dfx canister id ledger)
$ dfx identity use test_identity
$ export TEST_ID=$(dfx identity get-principal)
$ dfx identity use default
$ dfx canister call pToken approve '(principal '\"$TEST_ID\"', 100000)'
$ dfx canister call pToken approve '(principal '\"$LEDGER\"', 100000)'
$ dfx canister call ledger approve '(principal '\"$DEFAULT_ID\"', 100000)'

```

### To deposit pTokens

```
$ export PTOKEN=$(dfx canister id pToken)
$ dfx canister call meta_yield  deposit '(principal "'$PTOKEN'", 10, 0)'
```

### To deposit stICP

```
$ export LEDGER=$(dfx canister id ledger)
$ dfx canister call meta_yield  deposit '(principal "'$LEDGER'", 10, 0)'
```


### To withdraw

```
$ dfx canister call meta_yield withdraw '(<amount>, <kickstarter id>)'
$ dfx canister call meta_yield withdraw '(10, 0)'

```

### To withdraw all

```
$ dfx canister call meta_yield withdraw_all '(<kickstarter id>)'
$ dfx canister call meta_yield withdraw_all '(0)'

```


# References
* https://github.com/Psychedelic/DIP20/blob/1d4b92781e46cee528e52f578c55e384561f380a/spec.md

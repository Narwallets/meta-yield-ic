# Meta Yield

Meta Yield on ICP - Supernova Hackathon

## Dependencies

- [dfx](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html)
- [cmake](https://cmake.org/)
- [npm](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)
- For Mac Users: [gawk](https://formulae.brew.sh/formula/gawk)

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

The install scripts output the URL to visit the exchange frontend, or you can regenerate the URL `"http://$(dfx canister id frontend).localhost:8000"`. To interact with the exchange, you can create a local internet identity by clicking the login button. 

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

## Developer Utilities

When developing, changes on the dates are needed so we don't create projects
every time we reach a close date. We created a bunch of scripts to update some
information so we can speed up our development

### To increase the close project timestamp of a project

This script increases the project close date by the given number of milliseconds starting
from the current date.

```
$ utils/update_project_close_ts.sh <project id> <milliseconds to increase from current date>
$ utils/update_project_close_ts.sh 1 120000
```

# References
* https://github.com/Psychedelic/DIP20/blob/1d4b92781e46cee528e52f578c55e384561f380a/spec.md

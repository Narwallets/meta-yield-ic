dfx start --background --clean --host 0.0.0.0:8000


### === DEPLOY LOCAL LEDGER =====
dfx identity new minter
dfx identity use minter
export MINT_ACC=$(dfx ledger account-id)

dfx identity use default
export LEDGER_ACC=$(dfx ledger account-id)

# Use private api for install
rm src/ledger/ledger.did
cp src/ledger/ledger.private.did src/ledger/ledger.did

dfx deploy ledger --argument '(record  {
    minting_account = "'${MINT_ACC}'";
    initial_values = vec { record { "'${LEDGER_ACC}'"; record { e8s=100_000_000_000 } }; };
    send_whitelist = vec {}
    })'
export LEDGER_ID=$(dfx canister id ledger)

# Replace with public api
rm src/ledger/ledger.did
cp src/ledger/ledger.public.did src/ledger/ledger.did

### === DEPLOY DIP TOKENS =====

dfx canister create stICP
dfx canister create pToken
dfx canister create web
dfx build stICP
dfx build pToken
dfx build web

export ROOT_PRINCIPAL="principal \"$(dfx identity get-principal)\""
dfx canister install stICP --argument="(\"https://dogbreedslist.com/wp-content/uploads/2019/08/Are-Golden-Retrievers-easy-to-train.png\", \"staked ICP\", \"stICP\", 8, 10000000000000000, $ROOT_PRINCIPAL, 10000)"
dfx canister install pToken --argument="(\"https://akitagoose.com/wp-content/uploads/2021/12/IMG_0674.png\", \"Project Token\", \"PTK\", 8, 10000000000000000, $ROOT_PRINCIPAL, 10000)"
dfx canister install web --argument="(\"https://akitagoose.com/wp-content/uploads/2021/12/IMG_0674.png\", \"WEB Played Finance\", \"WEB\", 8, 10000000000000000, $ROOT_PRINCIPAL, 10000)"

# set fees 
dfx canister call stICP setFeeTo "($ROOT_PRINCIPAL)"
dfx canister call stICP setFee "(1)" 
dfx canister call pToken setFeeTo "($ROOT_PRINCIPAL)"
dfx canister call pToken setFee "(1)" 
dfx canister call web setFeeTo "($ROOT_PRINCIPAL)"
dfx canister call web setFee "(1)" 

### === DEPLOY INTERNET IDENTITY =====

II_ENV=development dfx deploy internet_identity --no-wallet --argument '(null)'

## === INSTALL FRONTEND / BACKEND ==== 

dfx deploy meta_yield --argument "(opt principal \"$LEDGER_ID\")"

rsync -avr .dfx/$(echo ${DFX_NETWORK:-'**'})/canisters/** --exclude='assets/' --exclude='idl/' --exclude='*.wasm' --delete src/frontend/declarations

dfx canister create frontend
pushd src/frontend/src
yarn
yarn build
popd
dfx build frontend
dfx canister install frontend

echo "===== VISIT METAYIELD FRONTEND ====="
echo "http://$(dfx canister id frontend).localhost:8000"
echo "===== VISIT METAYIELD FRONTEND ====="
echo "\nor ===== VISIT THE CANDID UI ====="
echo "http://127.0.0.1:8000/?canisterId=$(dfx canister id __Candid_UI)&id=$(dfx canister id meta_yield)"

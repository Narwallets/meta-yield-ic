#!/bin/bash

set -e
script_path=$( dirname $0 )

dfx identity use default

echo "Getting Meta Yield canister identity"
META_YIELD_CANISTER_ID=$(dfx canister call meta_yield get_canister_account | awk '{match($0, /"(.+)"/,m); printf m[1]}')

echo "Adding funds to the Meta Yield canister identity"
dfx canister call stICP transfer  '(principal '\"$META_YIELD_CANISTER_ID\"',10000)'
dfx canister call pToken transfer  '(principal '\"$META_YIELD_CANISTER_ID\"',20000)'
dfx canister call web transfer  '(principal '\"$META_YIELD_CANISTER_ID\"',20000)'

echo "Adding funds to: $1"
dfx canister call stICP transfer  '(principal '\"$1\"',10000)'
dfx canister call pToken transfer  '(principal '\"$1\"',20000)'
dfx canister call web transfer  '(principal '\"$1\"',20000)'

# Approve for transferFrom
# hardcoded account that corresponds to the meta_yield canister accoount

echo "Allow $META_YIELD_CANISTER_ID to use transferFrom for pToken"
dfx canister call pToken  approve '(principal "'$META_YIELD_CANISTER_ID'", 100000000)'
dfx canister call stICP  approve '(principal "'$META_YIELD_CANISTER_ID'", 100000000)'
#dfx canister call pToken  approve '(principal "'$DEFAULT_ID'", 100000000)'
#dfx canister call stICP approve '(principal '\"$DEFAULT_ID\"', 100000000)'

echo "Create project"

#This is to know the path of the create_project.sh script
cd "$script_path/.."
PROJECT_ID=$(utils/create_project.sh project_daorecords.conf | grep "Project ID" |  cut -d ':' -f 2)
cd -

echo "Project ID: ${PROJECT_ID}"

echo "Add ptokens to Project: ${PROJECT_ID}"
dfx canister call meta_yield deposit '(principal "'$PTOKEN'", 10000000, '$PROJECT_ID')'
echo "Fund Project: ${PROJECT_ID}"
dfx canister call meta_yield deposit '(principal "'$STICP'", 100, '$PROJECT_ID')'

# We're not using the ledger for now
# script to retrieve default subaccount of II in hex format
#II_ACCOUNT_ID_HEX=$(python3 ./scripts/principal_to_default_account_id.py $1)
# convert hex account ID to vec format
#II_ACCOUNT_ID=$(python3 -c 'print("vec{" + ";".join([str(b) for b in bytes.fromhex("'$II_ACCOUNT_ID_HEX'")]) + "}")')
#dfx canister call ledger transfer "(record { amount = record { e8s = 10000000 }; to = $II_ACCOUNT_ID; fee = record { e8s = 10000}; memo = 1;})"

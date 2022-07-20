#!/bin/bash

META_YIELD_CANISTER_ID=$(dfx canister call meta_yield get_canister_account | awk '{match($0, /"(.+)"/,m); printf m[1]}')

echo "Approving stICP $1 user transferences for $META_YIELD_CANISTER_ID"
dfx identity use $1;
dfx canister call stICP  approve '(principal "'$META_YIELD_CANISTER_ID'", 100000000)' ;
dfx identity use default

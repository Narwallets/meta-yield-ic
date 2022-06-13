#!/bin/bash
set -e


if [[ "${1}" != "" ]]; then
    NETWORK=$1
    NEAR_ENV=$NETWORK
    EXPLORER_URL="https://explorer.testnet.near.org/transactions/"

    if [[ "${NETWORK}" == "mainnet" ]]; then
        EXPLORER_URL="https://explorer.mainnet.near.org/transactions/"
    fi
else
	echo "Follow this pattern: "
	echo "add_project_tokens.sh testnet project_pembrock.conf"
fi

source $NETWORK/meta_yield.conf

if [[ "${2}" != "" ]]; then
    CONFIGURATION_FILE=$2
else
    echo "Usage: add_project_tokens.sh <mainnet|testnet> <configuration file>"
fi

source $NETWORK/$CONFIGURATION_FILE

echo "Using $NETWORK/$CONFIGURATION_FILE project file"

PROJECT_ID=$(NEAR_ENV=$NETWORK near call $KATHERINE_CONTRACT_ADDRESS get_kickstarter_id_from_slug '{"slug": "'$PROJECT_SLUG'"}' --accountId $KATHERINE_OWNER_ID | grep $EXPLORER_URL -A 1 | grep -v $EXPLORER_URL)

echo "Registering ${KATHERINE_CONTRACT_ADDRESS} on the project token contract: ${PROJECT_TOKEN_ADDRESS}"
near call $PROJECT_TOKEN_ADDRESS storage_deposit '' --accountId $KATHERINE_CONTRACT_ADDRESS --amount 0.00125 

# Sending Project Tokens to Project
echo "Sending project tokens: ${PROJECT_TOKEN_ADDRESS}  to the project ${PROJECT_ID}"
NEAR_ENV=testnet near call $PROJECT_TOKEN_ADDRESS ft_transfer_call '{"receiver_id": "'$KATHERINE_CONTRACT_ADDRESS'", "amount": "'$INITIAL_DEPOSIT_PTOKENS'", "msg": "'$PROJECT_ID'"}' --accountId $PROJECT_OWNER_ID --depositYocto 1 --gas $TOTAL_PREPAID_GAS




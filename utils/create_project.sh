#!/bin/bash
set -e

script_path=$( dirname $0 )

source $script_path/mainnet/meta_yield.conf

if [[ "${1}" != "" ]]; then
    CONFIGURATION_FILE=$1
fi

source $script_path/$NETWORK/$CONFIGURATION_FILE

if [[ "${PROJECT_CHECK}" != "no" ]]; then
	echo "Using project configuration file ${CONFIGURATION_FILE} with the following options: "
	echo "-----------------------------------------------------------------"
	echo
	cat $script_path/$NETWORK/$CONFIGURATION_FILE
	echo "-----------------------------------------------------------------"
	echo 'If you do not wish to check the project set the PROJECT_CHECK variable to "no"'

	echo "Are the project settings correct? "
	select yn in "Yes" "No"; do
    	case $yn in
        	Yes ) break;;
        	No ) echo "Please update your project settings"; exit;;
    	esac
	done
fi

#echo "Creating a Kickstarter: ${PROJECT_NAME} with ${PROJECT_SLUG}"
#dfx canister call $KATHERINE_CONTRACT_ADDRESS create_kickstarter '("name": "'${PROJECT_NAME}'", "slug": "'$PROJECT_SLUG'", "owner_id": "'$PROJECT_OWNER_ID'", "open_timestamp": '$PROJECT_OPEN_DATE', "close_timestamp": '$PROJECT_CLOSE_DATE', "token_contract_address": "'$PROJECT_TOKEN_ADDRESS'" ,"deposits_hard_cap": "'${DEPOSITS_HARD_CAP}'", "max_tokens_to_release_per_stnear": "'${MAX_TOKENS_TO_RELEASE}'", "token_contract_decimals": '${TOKEN_CONTRACT_DECIMALS}')'
dfx canister call $KATHERINE_CONTRACT_ADDRESS create_kickstarter '("'${PROJECT_NAME}'", "'$PROJECT_SLUG'", "'$PROJECT_OWNER_ID'", '$PROJECT_OPEN_DATE', '$PROJECT_CLOSE_DATE', "'$PROJECT_TOKEN_ADDRESS'" , '${DEPOSITS_HARD_CAP}', '${MAX_TOKENS_TO_RELEASE}', '${TOKEN_CONTRACT_DECIMALS}')'

#PROJECT_ID=$(NEAR_ENV=$NETWORK near view $KATHERINE_CONTRACT_ADDRESS get_kickstarter_id_from_slug '{"slug": "'$PROJECT_SLUG'"}' --accountId $KATHERINE_OWNER_ID | grep $EXPLORER_URL -A 1 | grep -v $EXPLORER_URL)
exit
echo "Project ID: ${PROJECT_ID}"
#se comenta la parte del proyecto porque da error al revisar el ID del proyecto

PROJECT_ID=1

# Create goal 1
#echo "Creating Goal #1"
#near call $KATHERINE_CONTRACT_ADDRESS create_goal '{"kickstarter_id": '$PROJECT_ID', "name": "'$GOAL_1_NAME'", "desired_amount": "'$GOAL_1_DESIRED_AMOUNT'", "unfreeze_timestamp": '$GOAL_1_UNFREEZE_DATE', "tokens_to_release_per_stnear": "'$GOAL_1_TOKENS_TO_RELEASE'", "cliff_timestamp": '$GOAL_1_CLIFF_DATE', "end_timestamp": '$GOAL_1_END_DATE'}' --accountId $KATHERINE_OWNER_ID

#echo "Created goal #1 for kickstarter: ${PROJECT_ID}"

# Create goal 2
#echo "Creating Goal #2"
#near call $KATHERINE_CONTRACT_ADDRESS create_goal '{"kickstarter_id": '$PROJECT_ID', "name": "'$GOAL_2_NAME'", "desired_amount": "'$GOAL_2_DESIRED_AMOUNT'", "unfreeze_timestamp": '$GOAL_2_UNFREEZE_DATE', "tokens_to_release_per_stnear": "'$GOAL_2_TOKENS_TO_RELEASE'", "cliff_timestamp": '$GOAL_2_CLIFF_DATE', "end_timestamp": '$GOAL_2_END_DATE'}' --accountId $KATHERINE_OWNER_ID

#echo "Created goal #2 for kickstarter: ${PROJECT_ID}"

# Create goal 3
echo "Creating Goal #3"
near call $KATHERINE_CONTRACT_ADDRESS create_goal '{"kickstarter_id": '$PROJECT_ID', "name": "'$GOAL_3_NAME'", "desired_amount": "'$GOAL_3_DESIRED_AMOUNT'", "unfreeze_timestamp": '$GOAL_3_UNFREEZE_DATE', "tokens_to_release_per_stnear": "'$GOAL_3_TOKENS_TO_RELEASE'", "cliff_timestamp": '$GOAL_3_CLIFF_DATE', "end_timestamp": '$GOAL_3_END_DATE'}' --accountId $KATHERINE_OWNER_ID

echo "Created goal #3 for Project: ${PROJECT_ID}"

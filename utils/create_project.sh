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

echo "Creating a Kickstarter: ${PROJECT_NAME} with ${PROJECT_SLUG}"
PROJECT_ID=$(dfx canister call $KATHERINE_CONTRACT_ADDRESS create_kickstarter '("'${PROJECT_NAME}'", "'$PROJECT_SLUG'", "'$PROJECT_OWNER_ID'", '$PROJECT_OPEN_DATE', '$PROJECT_CLOSE_DATE', "'$PROJECT_TOKEN_ADDRESS'" , '${DEPOSITS_HARD_CAP}', '${MAX_TOKENS_TO_RELEASE}', '${TOKEN_CONTRACT_DECIMALS}')' | tr -d '()' | cut -d ':' -f 1 | sed 's/ //')

#PROJECT_ID=10
echo "Project ID: ---${PROJECT_ID}---"

# Create goal 1
echo "Creating Goal #1"
dfx canister call $KATHERINE_CONTRACT_ADDRESS create_goal '('${PROJECT_ID}', "'$GOAL_1_NAME'", '$GOAL_1_DESIRED_AMOUNT', '$GOAL_1_UNFREEZE_DATE', '$GOAL_1_TOKENS_TO_RELEASE', '$GOAL_1_CLIFF_DATE', '$GOAL_1_END_DATE')'
echo "Goal #1 for kickstarter: ${PROJECT_ID} created successfully"

# Create goal 2
echo "Creating Goal #2"
dfx canister call $KATHERINE_CONTRACT_ADDRESS create_goal '('$PROJECT_ID', "'$GOAL_2_NAME'", '$GOAL_2_DESIRED_AMOUNT', '$GOAL_2_UNFREEZE_DATE', '$GOAL_2_TOKENS_TO_RELEASE', '$GOAL_2_CLIFF_DATE', '$GOAL_2_END_DATE')'
echo "Goal #2 for kickstarter: ${PROJECT_ID} created successfully"

# Create goal 3
echo "Creating Goal #3"
dfx canister call $KATHERINE_CONTRACT_ADDRESS create_goal '('$PROJECT_ID', "'$GOAL_3_NAME'", '$GOAL_3_DESIRED_AMOUNT', '$GOAL_3_UNFREEZE_DATE', '$GOAL_3_TOKENS_TO_RELEASE', '$GOAL_3_CLIFF_DATE', '$GOAL_3_END_DATE')'
echo "Goal #3 for kickstarter: ${PROJECT_ID} created successfully"

#!/bin/bash
set -e

script_path=$( dirname $0 )
seconds=60000
PROJECT_ID=0

if [[ "${1}" != "" ]]; then
  PROJECT_ID=$1
fi

if [[ "${2}" != "" ]]; then
  seconds=$2
fi

#Make sure we end up in the root of the project directory
cd $script_path/..
echo "Changing project open date by $seconds seconds from now"
dfx canister call meta_yield update_project_open_ts "($PROJECT_ID, $(($(date +%s%3N)+$seconds)))"

pushd src/frontend/src
yarn
yarn build
popd
dfx build frontend
dfx canister install frontend

echo "===== VISIT METAYIELD FRONTEND ====="
echo "http://$(dfx canister id frontend).localhost:8000"
echo "===== VISIT METAYIELD FRONTEND ====="

const path = require("path")

let localCanisters, prodCanisters, canisters

function initCanisterIds() {
  try {
    localCanisters = require(".dfx/local/canister_ids.json")
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production")
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"))
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local")
  }
  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local")

  console.info(`initCanisterIds: network=${network}`)
  console.info(`initCanisterIds: DFX_NETWORK=${process.env.DFX_NETWORK}`)
  console.info(`initCanisterIds: NEXT_PUBLIC_IC_HOST=${process.env.NEXT_PUBLIC_IC_HOST}`)

  canisters = network === "local" ? localCanisters : prodCanisters

  for (const canister in canisters) {
    process.env[`NEXT_PUBLIC_${canister.toUpperCase()}_CANISTER_ID`] =
      canisters[canister][network];
  }
}

module.exports = {
  initCanisterIds: initCanisterIds
}

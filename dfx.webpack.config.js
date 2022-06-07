const path = require("path")

let localCanisters, prodCanisters, canisters

function initCanisterIds() {
  try {
    localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"))
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production")
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"))
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local")
  }
  localCanisters = {
    "__Candid_UI": {
      "local": "ryjl3-tyaaa-aaaaa-aaaba-cai"
    },
    "frontend": {
      "local": "rdmx6-jaaaa-aaaaa-aaadq-cai"
    },
    "internet_identity": {
      "local": "rno2w-sqaaa-aaaaa-aaacq-cai"
    },
    "ledger": {
      "local": "rrkah-fqaaa-aaaaa-aaaaq-cai"
    },
    "meta_yield": {
      "local": "renrk-eyaaa-aaaaa-aaada-cai"
    },
    "pToken": {
      "local": "rkp4c-7iaaa-aaaaa-aaaca-cai"
    },
    "stICP": {
      "local": "r7inp-6aaaa-aaaaa-aaabq-cai"
    }
  };

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local")

  console.info(`initCanisterIds: network=${network}`)
  console.info(`initCanisterIds: DFX_NETWORK=${process.env.DFX_NETWORK}`)
  console.info(`initCanisterIds: NEXT_PUBLIC_IC_HOST=${process.env.NEXT_PUBLIC_IC_HOST}`)

  canisters = network === "local" ? localCanisters : prodCanisters

  for (const canister in canisters) {
    console.log(`initCanisterIds: ${canister.toUpperCase()}_CANISTER_ID=${canisters[canister][network]}`)
    process.env[`${canister.toUpperCase()}_CANISTER_ID`] =
      canisters[canister][network]
  }
}

module.exports = {
  initCanisterIds: initCanisterIds
}

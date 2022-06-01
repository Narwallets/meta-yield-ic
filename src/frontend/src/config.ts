import canisters from '../../../.dfx/local/canister_ids.json'

export const getConfig = () => {
  const isDev = process.env.NEXT_PUBLIC_DFX_NETWORK !== "ic";

  type Network = "ic" | "local";

  interface CanisterIds {
    [key: string]: { [key in Network]: string };
  }

  let canisterIds: CanisterIds;
  
  canisterIds = JSON.parse(
   canisters.toString()
  );

  // } catch (e) {
  //     console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
  // }

  // Generate canister ids, required by the generated canister code in .dfx/local/canisters/*
  // This strange way of JSON.stringifying the value is required by vite
  const canisterDefinitions = Object.entries(canisterIds).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
        ? JSON.stringify(val.local)
        : JSON.stringify(val.ic),
    }),
    {}
  );

  return {
    isDev: isDev,
    canisterIds : canisterIds
  };
};

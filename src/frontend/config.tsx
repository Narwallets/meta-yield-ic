import * as React from "react";
import Axios from 'axios';

export const getConfig = () => {
  const isDev = process.env.DFX_NETWORK !== "ic";
  console.log('is dev on config?', isDev)
  

  type Network = "ic" | "local";
const [canisterIds,setCanisterIds] = React.useState();
  interface CanisterIds {
    [key: string]: { [key in Network]: string };
  }

  React.useEffect(()=>{
    console.log('getting canisters json data')
   Axios('../../../.dfx/local/canister_ids.json').then(res => {
     console.log("RES AXIOS", res.data)
     setCanisterIds(JSON.parse(res.data.toString() ) );}); // This will have your text inside data attribute
},[]) 

React.useEffect(()=> {
  console.log('CANISTERS', canisterIds)

}, [canisterIds])
  
  // canisterIds = JSON.parse(
  //  canisters.toString()
  // );

  // } catch (e) {
  //     console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
  // }

  // Generate canister ids, required by the generated canister code in .dfx/local/canisters/*
  // This strange way of JSON.stringifying the value is required by vite
  // const canisterDefinitions = Object.entries(canisterIds).reduce(
  //   (acc, [key, val]) => ({
  //     ...acc,
  //     [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
  //       ? JSON.stringify(val.local)
  //       : JSON.stringify(val.ic),
  //   }),
  //   {}
  // );

  return {
    isDev: isDev,
    canisterIds : canisterIds
  };
};

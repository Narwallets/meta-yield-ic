import * as React from "react";
import Axios from 'axios';

export const getConfig = () => {
  const isDev = process.env.DFX_NETWORK !== "ic";


  type Network = "ic" | "local";
const [canisterIds,setCanisterIds] = React.useState();
  interface CanisterIds {
    [key: string]: { [key in Network]: string };
  }

  React.useEffect(()=>{
   Axios('../../../.dfx/local/canister_ids.json').then(res => {
     console.log("RES AXIOS", res.data)
     setCanisterIds(JSON.parse(res.data.toString() ) );}); // This will have your text inside data attribute
},[]) 

  return {
    isDev: isDev,
    canisterIds : canisterIds
  };
};

import { Principal } from "@dfinity/principal";
import {
    katherineViewMethods,
    katherineChangeMethods,
    metaPoolMethods,
    projectTokenViewMethods,
    projectTokenChangeMethods,
  } from "./methods";

export const getTotalKickstarters = async () => {
    return callPublicKatherineMethod(
      katherineViewMethods.getTotalKickstarters,
      {}
    );
  };
  
  export const getSupportedKickstarters = async (supporter_id: any) => {
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(
      katherineViewMethods.getSupportedDetailedList,
      {
        supporter_id: supporter_id,
        st_near_price: st_near_price,
        from_index: 0,
        limit: 10,
      }
    );
  };
  
  export const getSupporterTotalDepositInKickstarter = async (
    supporter_id: string,
    kickstarter_id: number
  ) => {
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(
      katherineViewMethods.getSupporterTotalDepositInKickstarter,
      {
        supporter_id: supporter_id,
        kickstarter_id: kickstarter_id,
        st_near_price: st_near_price,
      }
    );
  };
  
  export const getSupporterEstimatedStNear = async (
    principal_id: string,
    kickstarter_id: number,
    price: string
  ) => {
    return callPublicKatherineMethod(
      katherineViewMethods.getSupporterEstimatedStNear,
      {
        supporter_id: principal_id,
        kickstarter_id,
        st_near_price: price,
      }
    );
  };
  
  export const getKickstarters = async () => {
    return callPublicKatherineMethod(katherineViewMethods.getKickstarters, {
      from_index: 0,
      limit: 10,
    });
  };
  
  export const getKickstarter = async (projectId: number) => {
    return callPublicKatherineMethod(katherineViewMethods.getKickstarter, {
      kickstarter_id: projectId,
    });
  };
  
  export const getProjectDetails = async (projectId: number) => {
    return callPublicKatherineMethod(katherineViewMethods.getProjectDetails, {
      kickstarter_id: projectId,
    });
  };
  
  export const getKickstarterIdFromSlug = async (slug: string) => {
    return callPublicKatherineMethod(
      katherineViewMethods.getKickstarterIdFromSlug,
      { slug: slug }
    );
  };
  
  export const getActiveProjects = async () => {
    return callPublicKatherineMethod(katherineViewMethods.getActiveProjects, {
      from_index: 0,
      limit: 10,
    });
  };
  
  export const getStNearPrice = async () => {
    return callPublicMetapoolMethod(metaPoolMethods.getStNearPrice, {});
  };
  
  export const getMetapoolAccountInfo = async (principal_id : Principal) => {
    return callViewMetapoolMethod(metaPoolMethods.getAccountInfo, {
      account_id: principal_id,
    });
  };
  
  export const getBalance = async (principal_id : Principal): Promise<number> => {
    const accountInfo = await getMetapoolAccountInfo(principal_id);
    // const balance = accountInfo.balance;
    throw "not defined"
  };
  
  export const getSupporterDetailedList = async (supporter_id: string) => {
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(
      katherineViewMethods.getSupportedDetailedList,
      {
        supporter_id: supporter_id,
        st_near_price: st_near_price,
        from_index: 0,
        limit: 10,
      }
    );
  };
  
  export const fundToKickstarter = async (
    principal_id : Principal,
    kickstarter_id: number,
    amount: number
  ) => {

  };
  
  export const withdrawAll = async (
    principal_id : Principal,
    kickstarter_id: number
  ) => {
  throw "not defined"
  };
  
  export const withdraw = async (
    principal_id : Principal,
    kickstarter_id: number,
    amount: string
  ) => {
    throw "not defined"
  };
  
  export const claimAll = async (
    principal_id : Principal,
    kickstarter_id: number
  ) => {
    throw "not defined"
  };
  
  export const claimPartial = async (
    principal_id : Principal,
    kickstarter_id: number,
    amount: string
  ) => {
    throw "not defined"
  };
  
  export const getCanisterMetadata = async (canister_id: string) => {
    throw "not defined"
  };
  
  export const getBalanceOfTokenForSupporter = async ( 
    principal_id : Principal,
     tokenContractAddress: string
     ) => {
      throw "not defined"
  
  }
  
  export const storageDepositOfTokenForSupporter = async (
    principal_id : Principal,
    tokenContractAddress: string) => {
      throw "not defined"
  }
  
  const callPublicKatherineMethod = async (method: string, args: any) => {
    throw "not defined"
  };
  
  const callPublicMetapoolMethod = async (method: string, args: any) => {
    throw "not defined"
  };
  
  const callViewMetapoolMethod = async (
    method: string,
    args: any
  ) => {
    throw "not defined"
  };
  
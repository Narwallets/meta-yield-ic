import { Principal } from "@dfinity/principal";
import { useStore, createBackendActor } from "../stores/actor";

export const getTotalKickstarters = async () => {
  const backendActor = await createBackendActor();
  return await backendActor.get_total_kickstarters();
}

export const getSupportedKickstarters = async (supporter_id: any): Promise<any[]> => {
  const st_icp_price = getICPPrice();
  const actor = await createBackendActor();
  const result=  await actor.get_supported_projects(
    {
      supporter_id: supporter_id,
      st_icp_price: st_icp_price,
      from_index: 0,
      limit: 10,
    }
  );
  return [result];
};

export const getSupporterTotalDepositInKickstarter = async (
  supporter_id: string,
  kickstarter_id: number
) => {
  const st_icp_price = getICPPrice();
  const actor = await createBackendActor();
  return await actor.get_supporter_total_deposit_in_kickstarter(
    {
      supporter_id: supporter_id,
      kickstarter_id: kickstarter_id,
      st_icp_price: st_icp_price,
    }
  );
};

export const getSupporterEstimatedStNear = async (
  principal_id: string,
  kickstarter_id: number,
  price: string
) => {
  const actor = await createBackendActor();
  return await actor.get_supporter_etimated_st_near(
    {
      supporter_id: principal_id,
      kickstarter_id,
      st_icp_price: price,
    }
  );
};

export const getKickstarters = async () => {
  const actor = await createBackendActor();
  return await actor.get_kickstarters(
    {
      from_index: 0,
      limit: 10,
    }
  );
};

export const getKickstarter = async (projectId: number) => {
  const actor = await createBackendActor();
  return await actor.get_kickstarter(
    {
      kickstarter_id: projectId,
    }
  );
};

export const getProjectDetails = async (projectId: number) => {
  const actor = await createBackendActor();
  return await actor.get_project_details(
    {
      kickstarter_id: projectId,
    }
  );
};

export const getKickstarterIdFromSlug = async (slug: string) => {
  const actor = await createBackendActor();
  return await actor.get_kickstarter_from_slug(
    {
      slug: slug,
    }
  );
};

export const getActiveProjects = async () => {
  const actor = await createBackendActor();
  return await actor.get_active_projects();
};

export const getICPPrice = async () => {
  throw "not implemented"
};

export const getSupporterDetailedList = async (supporter_id: string) => {
  const st_icp_price = await getICPPrice();
  const actor = await createBackendActor();
  return await actor.get_supported_detailed_list(
    {
      supporter_id: supporter_id,
      st_icp_price: st_icp_price,
      from_index: 0,
      limit: 10,
    }
  );
};

export const fundToKickstarter = async (
  principal_id: Principal,
  kickstarter_id: number,
  amount: number
) => {
  throw "not defined";
};

export const withdrawAll = async (
  principal_id: Principal,
  kickstarter_id: number
) => {
  throw "not defined";
};

export const withdraw = async (
  principal_id: Principal,
  kickstarter_id: number,
  amount: string
) => {
  throw "not defined";
};

export const claimAll = async (
  principal_id: Principal,
  kickstarter_id: number
) => {
  throw "not defined";
};

export const claimPartial = async (
  principal_id: Principal,
  kickstarter_id: number,
  amount: string
) => {
  throw "not defined";
};

export const getCanisterMetadata = async (canister_id: string) => {
  throw "not defined";
};

export const getBalanceOfTokenForSupporter = async (
  principal_id: Principal,
  tokenContractAddress: string
) => {
  throw "not defined";
};
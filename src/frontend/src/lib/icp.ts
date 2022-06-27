import React, { useEffect } from "react";
import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { useStore, createBackendActor, createLedgerActor, createSTICPActor} from "../stores/actor";
import { KickstarterProps } from "../types/project.types";

export const getTotalKickstarters = async () => {
  const backendActor = await createBackendActor();
  return await backendActor.get_total_kickstarters();
};

export const getSupportedKickstarters = async (
  supporter_id: any
): Promise<any[]> => {
  const actor = await createBackendActor();
  const result: any= await actor.get_supported_projects(
    supporter_id);
  if (result.ok)
    return result.ok
  return result;
};

export const getSupporterTotalDepositInKickstarter = async (
  supporter_id: string,
  kickstarter_id: number
) => {
  const st_icp_price = getICPPrice();
  const actor = await createBackendActor();
  return await actor.get_supporter_total_deposit_in_kickstarter({
    supporter_id: supporter_id,
    kickstarter_id: kickstarter_id,
    st_icp_price: st_icp_price,
  });
};

export const getSupporterEstimatedStNear = async (
  principal_id: string,
  kickstarter_id: number,
  price: string
) => {
  const actor = await createBackendActor();
  return await actor.get_supporter_etimated_st_icp({
    supporter_id: principal_id,
    kickstarter_id,
    st_icp_price: price,
  });
};

export const getKickstarters = async (): Promise<any[]> => {
  const actor = await createBackendActor();
  const result = await actor.get_kickstarters();
  return result as any[];
};

export const getKickstarter = async (projectId: number) => {
  const actor = await createBackendActor();
  return await actor.get_kickstarter({
    kickstarter_id: projectId,
  });
};

export const getProjectDetails = async (
  projectId: number
): Promise<KickstarterProps> => {
  const actor = await createBackendActor();
  const result:any = await actor.get_project_details(projectId);
  if (result.ok) {
    return result.ok as KickstarterProps;
  }
  return result as KickstarterProps;
};

export const getKickstarterIdFromSlug = async (slug: string) => {
  const actor = await createBackendActor();
  return await actor.get_kickstarter_from_slug({
    slug: slug,
  });
};

export const getMyProjectsFounded = async (
  id: number,
  principal_id: any
) => {
  const projectsFounded: any = await getSupportedKickstarters(principal_id);
  if (!projectsFounded) {
    return null;
  }

  return projectsFounded.find((val: any) => val.id == id);
};

export const getActiveProjects = async () => {
  const actor = await createBackendActor();
  return await actor.get_active_projects();
};

export const getICPPrice = async () => {
  throw "not implemented";
};

export const getSupporterDetailedList = async (supporter_id: Principal) => {
  const st_icp_price = await getICPPrice();
  const actor = await createBackendActor();
  return await actor.get_supported_detailed_list({
    supporter_id: supporter_id,
    st_icp_price: st_icp_price,
    from_index: 0,
    limit: 10,
  });
};

export const fundToKickstarter = async (
  principal_id: Principal,
  kickstarter_id: any,
  amount: any
) => {
  const actor = await createBackendActor();
  const stICPActor = await createSTICPActor();
  const sticpPrincipal = Actor.canisterIdOf(stICPActor);
  const result: any =  await actor.deposit(
    sticpPrincipal,
    parseInt(amount),
    parseInt(kickstarter_id)
  );
  return result.ok;
};

export const withdrawAll = async (
  principal_id: Principal,
  kickstarter_id: any
) => {
  const actor = await createBackendActor();
  const result =  await actor.withdraw_all(
    parseInt(kickstarter_id)
  );
  console.log('result withdraw all', result)
  return result;
};

export const withdraw = async (
  principal_id: Principal,
  kickstarter_id: any,
  amount: any
) => {
  const actor = await createBackendActor();
  const result =  await actor.withdraw(
    parseInt(amount),
    parseInt(kickstarter_id)
  );
  console.log('result withdraw', result)
  return result;
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

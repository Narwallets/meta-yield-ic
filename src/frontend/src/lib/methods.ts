// katherine gasless methods (view methods)
export const katherineViewMethods = {
  getTotalKickstarters: "get_total_kickstarters",
  getKickstarterIdFromSlug: "get_kickstarter_id_from_slug",
  getKickstarter: "get_kickstarter",
  getKickstarters: "get_kickstarters",

  getKickstarterTotalGoals: "get_kickstarter_total_goals",
  getKickstarterGoal: "get_kickstarter_goal",
  getActiveProjects: "get_active_projects",
  getProjectDetails: "get_project_details",
  getSupporterTotalDepositInKickstarter:
    "get_supporter_total_deposit_in_kickstarter",
  getSupporterTotalRewards: "get_supporter_total_rewards",
  getSupporterAvailableRewards: "get_supporter_available_rewards",
  getSupportedDetailedList: "get_supported_detailed_list",
  getSupporterEstimatedStNear: "get_supporter_estimated_sticp",
  getSupportedProjects: "get_supported_projects",
};

// katherine gas methods (change methods)
export const katherineChangeMethods = {
  withdraw: "withdraw",
  withdrawAll: "withdraw_all",
  claimAll: "claim_all_kickstarter_tokens"
};

export const metaPoolMethods = {
  getStNearPrice: "get_st_icp_price",
  getAccountInfo: "get_account_info"
};

export const projectTokenViewMethods = {
  storageBalanceOf: "storage_balance_of",
  metadata: "ft_metadata",
  storageBalanceBounds: "storage_balance_bounds"
}

export const projectTokenChangeMethods = {
  storageDeposit: "storage_deposit"
}

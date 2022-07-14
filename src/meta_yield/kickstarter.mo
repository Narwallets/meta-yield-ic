import T "types";
import Text "mo:base/Text";
import Result "mo:base/Result";
import Option "mo:base/Option";

module {

  public func get_deposit(k: T.Kickstarter, supporter_id: T.SupporterId):
    Result.Result<T.Balance, Text> {
    switch (k.deposits.get(supporter_id)) {
      case(?d) { #ok(d) };
      case(null) { #err("Supporter is not part of Kickstarter!") };
    };
  };

  public func get_rewards_withdraw(k: T.Kickstarter, supporter_id: T.SupporterId): T.Balance {
    switch (k.rewards_withdraw.get(supporter_id)) {
      case(?amount) { amount };
      case(null) { 0 };
    };
  };

  public func get_sticp_withdraw(k: T.Kickstarter, supporter_id: T.SupporterId): T.Balance {
    switch (k.sticp_withdraw.get(supporter_id)) {
      case(?amount) { amount };
      case(null) { 0 };
    };
  };

  public func get_achieved_goal(k: T.Kickstarter): ?T.Goal {
    var achieved_goal = null;
    for (goal in k.goals.vals()) {
      if (goal.desired_amount <= k.total_deposited) {
        var achieved_goal = ?goal;
      };
    };
    return achieved_goal;
  };

  public func map_to_stable_kickstarter(k: T.Kickstarter): T.StableKickstarter {
    {
      id = k.id;
      name = k.name;
      slug = k.slug;
      owner_id = k.owner_id;
      winner_goal_id = k.winner_goal_id;
      katherine_fee = k.katherine_fee;
      total_tokens_to_release = k.total_tokens_to_release;
      //deposits = HashMap.HashMap<Text, Int64>;
      //rewards_withdraw = HashMap.HashMap<Text, Int64>;
      //sticp_withdraw = HashMap.HashMap<Text, Int64>;
      total_deposited = k.total_deposited;
      deposits_hard_cap = k.deposits_hard_cap;
      max_tokens_to_release_per_sticp = k.max_tokens_to_release_per_sticp;
      enough_reward_tokens = k.enough_reward_tokens;
      active = k.active;
      successful = k.successful;
      sticp_price_at_freeze = k.sticp_price_at_freeze;
      sticp_price_at_unfreeze = k.sticp_price_at_unfreeze;
      creation_timestamp = k.creation_timestamp;
      open_timestamp = k.open_timestamp;
      close_timestamp = k.close_timestamp;
      token_contract_address = k.token_contract_address;
      available_reward_tokens = k.available_reward_tokens;
      token_contract_decimals = k.token_contract_decimals;
      project_token_symbol = k.project_token_symbol;
      total_supporters = k.total_supporters;
    };
  }
};


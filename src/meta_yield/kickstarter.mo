import T "types";
import U "utils";
import Text "mo:base/Text";
import Int64 "mo:base/Int64";
import Nat64 "mo:base/Nat64";
import Result "mo:base/Result";
import Bool "mo:base/Bool";
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


  public func funds_can_be_unfreezed(kickstarter: T.Kickstarter): Bool {
    let goal = switch (kickstarter.winner_goal_id) {
      case( ?g ) { kickstarter.goals.get(g) };
      case( null ) { return false; };
    };
    //Int64.fromNat64(Nat64.fromNat(goal.unfreeze_timestamp)) < U.get_current_epoch_millis()
    goal.unfreeze_timestamp < U.get_current_epoch_millis()
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
  };


  public func get_after_unfreeze_deposits(kickstarter: T.Kickstarter, supporter_id: T.SupporterId): 
    Result.Result<T.Balance, Text> {
    switch( assert_funds_must_be_unfreezed(kickstarter) ) {
      case( #ok(false) ) {
        return #err("Price at unfreeze is not defined. Please unfreeze kickstarter funds with fn: unfreeze_kickstarter_funds!")
      };
      case( _ ) {};
    };

    let winner_goal_id = switch (kickstarter.winner_goal_id) {
      case( ?g ) { g };
      case( null ) { return #err("No goal defined"); };
    };

    let winner_goal = switch ( kickstarter.goals.getOpt(winner_goal_id) ) {
      case( ?g ) { g };
      case( null ) { return #err("Incorrect goal index"); };
    };

    let deposit = switch (get_deposit(kickstarter, supporter_id)) {
      case( #ok(d) ) {
        // TODO: Check if we need to manage proportional quantities here
          //(d * winner_goal.tokens_to_release_per_sticp)
          (d * winner_goal.tokens_to_release_per_sticp)
            - get_rewards_withdraw(kickstarter, supporter_id)
      };
      case (#err(e)) { return #err(e) };
    };

    #ok(U.proportional(deposit, kickstarter.sticp_price_at_freeze, kickstarter.sticp_price_at_unfreeze))
  };

  public func assert_funds_must_be_unfreezed(kickstarter: T.Kickstarter): Result.Result<Bool, Text> {
    /* TODO if (not funds_can_be_unfreezed()) {
      return #err("Assets are still freezed.");
    };*/
    /* TODO: kickstarter.sticp_price_at_unfreeze is an Option in the Rust version
      check if this is needed
    */
    if (kickstarter.sticp_price_at_unfreeze == 0) {
      return #ok(false);
    };
    return #ok(true);
  };

};

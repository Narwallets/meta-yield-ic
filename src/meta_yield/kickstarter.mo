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

  public func get_after_unfreeze_deposits(kickstarter: T.Kickstarter, supporter_id: T.SupporterId): 
    Result.Result<T.Balance, Text> {
    switch( assert_funds_must_be_unfreezed(kickstarter) ) {
      case( _ ) {};
      case( #ok(false) ) {
        return #err("Price at unfreeze is not defined. Please unfreeze kickstarter funds with fn: unfreeze_kickstarter_funds!")
      };
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

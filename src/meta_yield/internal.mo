import Result "mo:base/Result";
import Option "mo:base/Option";
import Bool "mo:base/Bool";
import Int "mo:base/Int";
import Int64 "mo:base/Int64";
import T "types";
import U "utils";

module {

  public type MetaYieldError = { 
    #notFound; 
    #beforeFundigPeriod; 
    #exceededNumGoals;
    #exceededHardCap;
    #exceededTokensToRelease;
    #lowerGoalAmount;
    #unfreezeEarlierThanLastGoal;
    #lessTokensThanPreviousGoal;
    #kickstarterNotFound;
  };
  
  public func internal_create_goal(
    kickstarter: T.Kickstarter,
    name: Text,
    desired_amount: T.BalanceJSON,
    unfreeze_timestamp: T.EpochMillis,
    tokens_to_release_per_stnear: T.BalanceJSON,
    cliff_timestamp: T.EpochMillis,
    end_timestamp: T.EpochMillis,
  ): Result.Result<T.GoalId, Text> {
  
    if (Option.isSome(kickstarter.winner_goal_id)) {
      return #err("Error! Kickstarter: " # Int.toText(kickstarter.id) # " already has a winning goal.");
    };
  
    if (U.get_current_epoch_millis() > kickstarter.open_timestamp) {
      return #err("Can't create goals after funding period is open: " # Int64.toText(U.get_current_epoch_millis()) # " > " # Int64.toText(kickstarter.open_timestamp));
    };
  
    /*TODO: if (max_number >= kickstarter.goals.size()) {
      return #err("Too many goals, max number is " # max_number);
    };*/
  
    let id = kickstarter.goals.size();
  
    if (kickstarter.deposits_hard_cap <= desired_amount) {
      return #err("Desired amount must not exceed the deposits hard cap!");
    };
  
    if (kickstarter.max_tokens_to_release_per_stnear <= tokens_to_release_per_stnear) {
      return #err("Tokens to release must not exceed the max tokens to release per stNEAR!");
    };
  
    if (id > 0) {
        let last_goal = kickstarter.goals.get(id - 1);
        if (desired_amount <= last_goal.desired_amount) {
          return #err("Next goal cannot have a lower desired amount that the last goal!");
        };
  
        if (unfreeze_timestamp <= last_goal.unfreeze_timestamp) {
          return #err("Next goal cannot freeze supporter for an earlier date than the previous goal");
        };
  
        if (tokens_to_release_per_stnear <= last_goal.tokens_to_release_per_stnear) {
          return #err("Next goal cannot release less pTOKEN than the last goal!");
        };
    };
  
    let goal: T.Goal = {
        id;
        name;
        desired_amount;
        unfreeze_timestamp;
        tokens_to_release_per_stnear;
        cliff_timestamp;
        end_timestamp;
    };
    kickstarter.goals.add(goal);
    #ok(goal.id)
  };
  
  public func assert_goal_status(k: T.Kickstarter): Result.Result<Bool, Text> {
    if (Option.isSome(k.winner_goal_id)) {
      return #err("Kickstarter already has a winning goal.");
    };
    #ok(true)
  };
  
  public func assert_before_funding_period(kickstarter: T.Kickstarter): Result.Result<Bool, Text> {
    if (U.get_current_epoch_millis() > kickstarter.open_timestamp) {
      return #err("Can't create goals after funding period is open");
    };
    #ok(true)
  };
  
  /*public func assert_number_of_goals(k: T.Kickstarter, max_number: Nat): Result.Result<Bool, Text> {
    if (max_number >= k.goals.size()) {
      return #err("Too many goals, max number is " # max_number);
    };
    #ok(true)
  };*/
  
  /// Inner method to get the given kickstarter.
  public func internal_get_kickstarter(k: ?T.Kickstarter): Result.Result<T.Kickstarter, Text> {
    switch (k) {
      case(?k) {
        #ok(k)
      };
      case (null) {
        #err("Kickstarter not found")
      };
    };
  };


}

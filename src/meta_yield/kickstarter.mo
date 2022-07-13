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
  }
};


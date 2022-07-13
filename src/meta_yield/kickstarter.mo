import T "types";
import Text "mo:base/Text";
import Result "mo:base/Result";
import Bool "mo:base/Bool";

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

  public func funds_can_be_unfreezed(k: T.Kickstarter): Bool {
    true
    // Uncomment when get_achieved_goal is implemented , currently in progress
    // get_achieved_goal().unfreeze_timestamp < U.get_current_epoch_millis()
  };
};


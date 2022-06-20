import Int64 "mo:base/Int64";
import Time "mo:base/Time";
import Bool "mo:base/Bool";
import T "types";

module Utils {
  public func get_current_epoch_millis(): T.EpochMillis {
    let now: Int64 = Int64.fromInt(Time.now());
    return now / 1_000_000;
  };


  public func calculate_max_tokens_to_release(
      kickstarter: T.Kickstarter,
  ): T.Balance {
    return (kickstarter.deposits_hard_cap *
    kickstarter.max_tokens_to_release_per_sticp);
  };

  /* TODO: this might be needed, have to check if we use floats or integers for precision
  pub fn proportional(amount: Int64, numerator: Int64 , denominator: Int64) -> Int64 {
    return (amount * numerator / denominator);
  }
  */

  public func is_within_funding_period(k: T.Kickstarter): Bool {
    let now = get_current_epoch_millis();
    now < k.close_timestamp and now >= k.open_timestamp
  };

};

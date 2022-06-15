import Int64 "mo:base/Int64";
import Time "mo:base/Time";
import T "types";

module Utils {
    public func get_current_epoch_millis(): T.EpochMillis {
      let now: Int64 = Int64.fromInt(Time.now());
      return now / 1_000_000;
    };
}

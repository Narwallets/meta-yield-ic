import Bool "mo:base/Bool";
import HashMap "mo:base/HashMap";
import T "types";

module {

  public func is_supporting(supporter: T.Supporter,
    kickstarter_id: T.KickstarterId): Bool {
    switch(supporter.supported_projects.get(kickstarter_id)) {
      case(?id) { true };
      case(_) { false };
    }
  };
};


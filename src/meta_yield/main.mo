import Principal "mo:base/Principal";
import Buffer "mo:base/Buffer";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Int "mo:base/Int";
import Int64 "mo:base/Int64";
import Float "mo:base/Float";
import Bool "mo:base/Bool";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Time "mo:base/Time";
import Error "mo:base/Error";
import Option "mo:base/Option";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Private "internal";
import T "types";
import U "utils";
import S "supporter";
import Account "./Account";
/*import Ledger "canister:ledger";
import stICP "canister:stICP";*/
import B "book";
import K "kickstarter";
import Array "mo:base/Array";



//shared({ caller = initializer })  actor class() {
actor Self {

//form the defi example shared(init_msg) actor class Dex() = this {

  //TODO: check how to manage ledgetr for mainnet
  let sticp_principal = Principal.fromText("r7inp-6aaaa-aaaaa-aaabq-cai");
  let stICP = actor (Principal.toText(sticp_principal)) : T.DIPInterface;
  let icp_fee: Nat = 1;
  private var book = B.Book();
  // Stable signature
  stable var stable_kickstarters : [T.StableKickstarter] = [];
  // Each array index corresponds to a kickstarter id
  stable var stable_goals: [[T.Goal]] = [];
  //TODO: stable var stable_supporters: [[(T.SupporterId, T.Supporter)]] = [];
  stable var stable_deposits: [[(Text, T.Balance)]] = [];
  stable var stable_rewards_withdraw: [(Text, T.Balance)] = [];
  stable var sticp_withdraw: [(Text, T.Balance)] = [];

  Debug.print("Finished declaring stable vars and global attributes");

  // Contract attributes
  var kickstarters: Buffer.Buffer<T.Kickstarter> = Buffer.Buffer(10);
  var kickstarter_id_by_slug: HashMap.HashMap<Text, T.KickstarterId> =
    HashMap.HashMap(0, Text.equal, Text.hash);
  var supporters: HashMap.HashMap<T.SupporterId, T.Supporter> =
    HashMap.HashMap(0, Text.equal, Text.hash);
  var max_goals_per_kickstarter = 5;
  var katherine_fee_percent: Int64 = 2;
  let min_deposit_amount: T.Balance = 1;
  let BASIS_POINTS: Int64 = 10000;

  public shared({ caller }) func whoami(): async Text {
    return Principal.toText(caller);
  };

  /****************************************************************************
   *                                                                          *
   *                       ported Katherine functions                         *
   *                                                                          *
   ****************************************************************************/
/*
    public shared({ caller }) func new(
        owner_id: T.AccountId,
        min_deposit_amount: T.BalanceJSON,
        metapool_contract_address: T.AccountId,
        katherine_fee_percent: BasisPoints,
    ): async T.Kickstarter {
        return "Not implemented";
        /*assert!(!env::state_exists(), "The contract is already initialized");
        T.Kickstarter {
            owner_id,
            supporters: HashMap.HashMap::new(Keys::Supporters),
            kickstarters: Vector::new(Keys::Kickstarters),
            kickstarter_id_by_slug: HashMap.HashMap::new(Keys::T.KickstarterId),
            min_deposit_amount: T.Balance::from(min_deposit_amount),
            metapool_contract_address,
            katherine_fee_percent,
            max_goals_per_kickstarter: 5,
            active_projects: UnorderedSet::new(Keys::Active),
        }*/
        return "Not implemented";
    };
*/
    /************************/
    /*    Robot methods     */
    /************************/

    /// Returns both successful and unsuccessful kickstarter ids in a single struc.
    //public shared({ caller }) func get_kickstarters_to_process(
    public shared({ caller }) func get_kickstarters_to_process()
        /*&self,
        from_index: T.KickstarterIdJSON,
        limit: T.KickstarterIdJSON,*/
    //): async KickstarterStatusJSON {
    : async Text {
        return "Not implemented";
        /*
        let kickstarters_len = self.kickstarters.len();
        let start: u64 = from_index.into();
        if start >= kickstarters_len {
            return None;
        }
        let mut successful: Vec<T.KickstarterIdJSON> = Vec::new();
        let mut unsuccessful: Vec<T.KickstarterIdJSON> = Vec::new();
        for index in start..std::cmp::min(start + limit as u64, kickstarters_len) {
            let kickstarter = self.internal_get_kickstarter(index as u32);
            if kickstarter.active && kickstarter.close_timestamp <= U.get_current_epoch_millis() {
                if kickstarter.any_achieved_goal() {
                    successful.push(T.KickstarterIdJSON::from(kickstarter.id));
                } else {
                    unsuccessful.push(T.KickstarterIdJSON::from(kickstarter.id));
                }
            }
        }
        Some(KickstarterStatusJSON {
            successful,
            unsuccessful,
        })*/
    };

    public shared({ caller }) func process_kickstarter(
      kickstarter_id: T.KickstarterId
    ): async Result.Result<Text, Text> {
      var kickstarter: T.Kickstarter = switch (
          Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))
        ) {
          case(#ok(ki)) { ki };
          case(#err(e)) { return #err(e); };
      };

      if (Option.isSome(kickstarter.successful)) {
        return #err("kickstarter already activated");
      };

      if (kickstarter.close_timestamp > U.get_current_epoch_millis()) {
        return #err("Funding period is not over!");
      };

      switch (K.get_achieved_goal(kickstarter)) {
        case(?goal) {
          let total_tokens_to_release = kickstarter.total_deposited * goal.tokens_to_release_per_sticp;
          let katherine_fee = calculate_katherine_fee(total_tokens_to_release);
          if (kickstarter.available_reward_tokens < (total_tokens_to_release + katherine_fee)) {
            return #err("Not enough available reward tokens to back the supporters rewards!");
          };
          kickstarter.winner_goal_id := ?(goal.id);
          kickstarter.successful := ?true;
          kickstarter.active := false;
          kickstarter.katherine_fee := katherine_fee;
          kickstarter.total_tokens_to_release := total_tokens_to_release;
          kickstarter.sticp_price_at_freeze := U.get_current_sticp_price();
          kickstarters.put(kickstarter.id, kickstarter);
          return #ok("ok");
        };
        case(null) { return #err("Goal not founded!"); };
      };
    };

    /// Returns kickstarters ids ready to unfreeze.
     public shared({ caller }) func get_kickstarters_to_unfreeze()
    : async [T.KickstarterId] {
            let result: Buffer.Buffer<T.KickstarterId> = Buffer.Buffer(10);
        for (k in kickstarters.vals()) {
         if (k.successful == ?true and k.sticp_price_at_unfreeze == 0) {
           if (K.funds_can_be_unfreezed(k)) {
               result.add(k.id);
           };
         };
        };
        result.toArray()
    };

    /// Start the cross-contract call to unfreeze the kickstarter funds.
    public shared({ caller }) func unfreeze_kickstarter_funds() //(gself, kickstarter_id: T.KickstarterIdJSON) {
    : async Text {
        return "Not implemented";
        /*
        let kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id));
        if kickstarter.successful == Some(true) && kickstarter.sticp_price_at_unfreeze == None {
            kickstarter.assert_funds_can_be_unfreezed();
            self.internal_unfreeze_kickstarter_funds(kickstarter_id);
            log!(
                "UNFREEZE: funds successfully unfreezed for Kickstarter {}",
                kickstarter_id
            );
        }*/
    };

    /*****************************/
    /*   Supporters functions    */
    /*****************************/


    public shared({ caller }) func claim_all_kickstarter_tokens() //(gself, kickstarter_id: T.KickstarterIdJSON) {
    : async Text {
        return "Not implemented";
        /*
        let account_id = env::predecessor_account_id();
        let available_rewards = self.get_supporter_available_rewards(
            account_id.clone().try_into().unwrap(),
            kickstarter_id,
        );
        if let Some(amount) = available_rewards {
            self.claim_kickstarter_tokens(amount, kickstarter_id);
        } else {
            panic!("Supporter does not have available Kickstarter Tokens");
        }
        */
    };

    // lets supporters withdraw the tokens emited by the kickstarter
    //public shared({ caller }) func claim_kickstarter_tokens(
    public shared({ caller }) func claim_kickstarter_tokens()
        /*gself,
        amount: T.BalanceJSON,
        kickstarter_id: T.KickstarterIdJSON,*/
    //) {
    : async Text {
        return "Not implemented";
        /*
        let account_id = env::predecessor_account_id();
        let mut kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id));
        self.internal_claim_kickstarter_tokens(amount, gkickstarter, account_id);
        */
    };

    /*****************************/
    /*   Kickstarter functions   */
    /*****************************/

    //public shared({ caller }) func withdraw_sticp_interest(
    public shared({ caller }) func withdraw_sticp_interest()
        /*gself,
        kickstarter_id: T.KickstarterIdJSON,*/
    //) {
    : async Text {
        return "Not implemented";
        /*
        let mut kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id));
        kickstarter.assert_kickstarter_owner();
        assert_eq!(
            kickstarter.successful,
            Some(true),
            "Kickstarter is unsuccessful!"
        );

        let receiver_id = env::predecessor_account_id();
        if let Some(st_icp_price) = kickstarter.sticp_price_at_unfreeze {
            // No need to get sticp price from metapool.
            self.kickstarter_withdraw(gkickstarter, st_icp_price, receiver_id);
        } else {
            self.kickstarter_withdraw_before_unfreeze(gkickstarter, receiver_id);
        }
        */
    };

    public shared({ caller }) func kickstarter_withdraw_excedent() //(gself, kickstarter_id: T.KickstarterIdJSON) {
    : async Text {
        return "Not implemented";
        /*
        let mut kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id));
        kickstarter.assert_kickstarter_owner();
        assert!(
            kickstarter.close_timestamp < U.get_current_epoch_millis(),
            "The excedent is avalable only after the funding period ends"
        );

        let excedent: T.Balance = match kickstarter.successful {
            Some(true) => {
                let katherine_fee = kickstarter.katherine_fee.unwrap();
                let total_tokens_to_release = kickstarter.total_tokens_to_release.unwrap();
                kickstarter.available_reward_tokens - (katherine_fee + total_tokens_to_release)
            }
            Some(false) => {
                log!("Returning all available reward tokens!");
                kickstarter.available_reward_tokens
            }
            None => panic!(
                "Before withdrawing pTOKEN, evaluate the project using the process_kickstarter fn!"
            ),
        };

        if excedent > 0 {
            self.internal_withdraw_excedent(gkickstarter, excedent);
        } else {
            panic!("No remaining excedent pTOKEN to withdraw!");
        }
        */
    };

    /***********************/
    /*   Admin functions   */
    /***********************/

    /// Withdraws the Katherine Fee from a Kickstarter.
    public shared({ caller }) func withdraw_katherine_fee() //(gself, kickstarter_id: T.KickstarterIdJSON) {
    : async Text {
        return "Not implemented";
        /*
        self.assert_only_admin();
        let mut kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id));
        assert!(
            kickstarter.close_timestamp < U.get_current_epoch_millis(),
            "To withdraw the Katherine Fee the Kickstarter must be closed."
        );
        let katherine_fee: T.Balance = if kickstarter.successful == Some(true) {
            kickstarter.katherine_fee.unwrap().into()
        } else {
            panic!("Kickstarter was unsuccessful.");
        };

        if katherine_fee > 0 {
            self.internal_withdraw_katherine_fee(gkickstarter, katherine_fee);
        } else {
            panic!("Katherine fee is 0.");
        }
        */
    };

    /// Creates a new kickstarter entry in persistent storage.
    public shared({ caller }) func create_kickstarter(
        name: Text,
        slug: Text,
        owner_id: T.AccountId,
        open_timestamp: T.EpochMillis,
        close_timestamp: T.EpochMillis,
        token_contract_address: T.AccountId,
        deposits_hard_cap: T.BalanceJSON,
        max_tokens_to_release_per_sticp: T.BalanceJSON,
        token_contract_decimals: Nat,
        project_token_symbol: Text)
    : async T.KickstarterId {
        //ONLY ADMINS CAN CREATE KICKSTARTERS? YES
        //TODO: assert_only_admin(caller, owner_id);
        //TODO: assert_unique_slug(slug);
        let id = kickstarters.size();
        let ret = internal_create_kickstarter(
            id,
            name,
            slug,
            owner_id,
            open_timestamp,
            close_timestamp,
            token_contract_address,
            deposits_hard_cap,
            max_tokens_to_release_per_sticp,
            token_contract_decimals,
            project_token_symbol
        );
        return id;
    };

    public shared({ caller }) func delete_kickstarter() //(gself, id: T.KickstarterIdJSON) {
    : async Text {
        return "Not implemented";
        //panic!("Kickstarter {} must not be deleted!", id);
    };

    //public shared({ caller }) func update_kickstarter(
    public shared({ caller }) func update_kickstarter()
        /*gself,
        id: T.KickstarterIdJSON,
        name: Text,
        slug: Text,
        owner_id: T.AccountId,
        open_timestamp: T.EpochMillis,
        close_timestamp: T.EpochMillis,
        token_contract_address: T.AccountId,
        deposits_hard_cap: T.BalanceJSON,
        max_tokens_to_release_per_sticp: T.BalanceJSON,
        token_contract_decimals: u8,*/
    //) {
    : async Text {
        return "Not implemented";
        /*
        let old_kickstarter = self.internal_get_kickstarter(kickstarters.getOpt(id));
        let goal_creator_id = env::predecessor_account_id();
        assert!(
            self.owner_id == goal_creator_id || old_kickstarter.owner_id == goal_creator_id,
            "A Kickstarter could only be updated by admin, or the Kickstarter owner."
        );
        self.assert_unique_slug(&slug);
        self.internal_update_kickstarter(
            old_kickstarter,
            name,
            slug,
            owner_id,
            open_timestamp,
            close_timestamp,
            token_contract_address,
            deposits_hard_cap,
            max_tokens_to_release_per_sticp,
            token_contract_decimals
        );
        */
    };

    //public shared({ caller }) func change_kickstarter_owner(
    public shared({ caller }) func change_kickstarter_owner()
        /*gself,
        kickstarter_id: T.KickstarterIdJSON,
        new_owner_id: ValidT.AccountId*/
    //) {
    : async Text {
        return "Not implemented";
        /*
        self.assert_only_admin();
        let mut kickstarter = self.internal_get_kickstarter(kickstarter_id);
        kickstarter.owner_id = new_owner_id.to_string();
        self.kickstarters
            .replace(kickstarter.id as u64, &kickstarter);
        */
    };

    public shared({ caller }) func create_goal(
        kickstarter_id: T.KickstarterIdJSON,
        name: Text,
        desired_amount: T.BalanceJSON,
        unfreeze_timestamp: T.EpochMillis,
        tokens_to_release_per_sticp: T.BalanceJSON,
        cliff_timestamp: T.EpochMillis,
        end_timestamp: T.EpochMillis
    ): async Result.Result<T.GoalId, Text> {
        let kickstarter =
          switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
          case(#err(e)) {
            return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
          };
          case(#ok(k)) {
            k
          };
        };
        let goal_creator_id = Principal.fromActor(Self);
        /*TODO: assert!(
            self.owner_id == goal_creator_id || kickstarter.owner_id == goal_creator_id,
            "A goal could only be created by admin, or the Kickstarter owner."
        );*/
        let goal = Private.internal_create_goal(
            kickstarter,
            name,
            desired_amount,
            unfreeze_timestamp,
            tokens_to_release_per_sticp,
            cliff_timestamp,
            end_timestamp,
        );

        switch(goal) {
          case(#ok(g)) {
            #ok(g)
          };
          case(#err(e)) {
            #err("Failed creating goal:  " # e)
          };
        };
    };

    //public shared({ caller }) func delete_last_goal(
    public shared({ caller }) func delete_last_goal()
        /*gself,
        kickstarter_id: T.KickstarterIdJSON*/
    //) {
    : async Text {
        return "Not implemented";
        /*
        let mut kickstarter = self.internal_get_kickstarter(kickstarter_id);
        let goal_creator_id = env::predecessor_account_id();
        assert!(
            self.owner_id == goal_creator_id || kickstarter.owner_id == goal_creator_id,
            "A goal could only be created by admin, or the Kickstarter owner."
        );
        self.internal_delete_last_goal(gkickstarter);
        */
    };

    /**********************/
    /*   View functions   */
    /**********************/

    /// Get the total rewards that the Supporter could claim regardless of the current timestamp.
    public shared(msg) func get_supporter_total_rewards(
      supporter_id: T.SupporterId,
      kickstarter_id: T.KickstarterId
    ): async Result.Result<T.Balance, Text> {

      let kickstarter: T.Kickstarter =
        switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#ok(ki)) { ki };
        case(#err(e)) { return #err(e); };
      };
      switch (supporters.get(supporter_id)) {
        case(?supporter) {
          if (S.is_supporting(supporter, kickstarter_id) and Option.isSome(kickstarter.winner_goal_id)) {
            let goal = switch (kickstarter.winner_goal_id) {
              case(?g) { 
                kickstarter.goals.get(g)
              };
              case(null) { return #err("No winner goal defined"); };
            };
            let rewards = Private.internal_get_supporter_rewards(
              supporter_id,
              kickstarter,
              goal.tokens_to_release_per_sticp
            );
            return rewards;
          } else {
            return #err("Rewards not available for this kickstarter");
          };
        };
        case(null) { return #err("The supporter id: " # supporter_id # "does not exist") };
        };
    };

    /// Available rewards that the Supporter could currently claim.
    //public shared({ caller }) func get_supporter_available_rewards(
    public shared({ caller }) func get_supporter_available_rewards()
        /*&self,
        supporter_id: TextJSON,
        kickstarter_id: T.KickstarterIdJSON,*/
    //): async T.BalanceJSON {
    : async Text {
        return "Not implemented";
        /*
        let supporter_id = Text::from(supporter_id);
        let kickstarter = self.internal_get_kickstarter(kickstarter_id);
        match self.supporters.get(&supporter_id) {
            Some(supporter) => {
                if supporter.is_supporting(kickstarter.id) && kickstarter.winner_goal_id.is_some() {
                    let rewards = self.internal_get_available_rewards(&supporter_id, &kickstarter);
                    return Some(T.BalanceJSON::from(rewards));
                } else {
                    return None;
                }
            }
            None => return None,
        }
        */
    };

    /// Available rewards that the Supporter could currently claim.
    //public shared({ caller }) func get_admin_fee_rewards(
    public shared({ caller }) func get_admin_fee_rewards()
        /*&self,
        kickstarter_id: T.KickstarterIdJSON,*/
    //): async T.BalanceJSON {
    : async Text {
        return "Not implemented";
        /*
        let kickstarter = self.internal_get_kickstarter(kickstarter_id);
        if kickstarter.successful == Some(true) {
            kickstarter.katherine_fee.unwrap().into()
        } else {
            panic!("Kickstarter was unsuccessful.");
        }
        */
    };
  
    public shared({ caller }) func get_active_projects(): async [T.StableKickstarter] { 
        let result: Buffer.Buffer<T.StableKickstarter> = Buffer.Buffer(10);
        for (k in kickstarters.vals()) {
          let sk: T.StableKickstarter = K.map_to_stable_kickstarter(k);         
          if(U.is_funding_not_started(k) == true) {
            result.add(sk);
          }          
        };
        result.toArray();
      };


      public shared({ caller }) func get_open_projects(): async [T.StableKickstarter] { 
        let result: Buffer.Buffer<T.StableKickstarter> = Buffer.Buffer(10);
        for (k in kickstarters.vals()) {
          let sk: T.StableKickstarter = K.map_to_stable_kickstarter(k);         
          if(U.is_within_funding_period(k) == true) {
            result.add(sk);
          }          
        };
        result.toArray();
      };

      public shared({ caller }) func get_close_projects(): async [T.StableKickstarter] { 
        let result: Buffer.Buffer<T.StableKickstarter> = Buffer.Buffer(10);
        for (k in kickstarters.vals()) {
          let sk: T.StableKickstarter = K.map_to_stable_kickstarter(k);         
          if(U.is_close_period(k) == true) {
            result.add(sk);
          }          
        };
        result.toArray();
      };
    
    public shared({ caller }) func get_project_details(kickstarter_id: T.KickstarterId): async Result.Result<T.SharedKickstarter, Text> {
      let k: T.Kickstarter =
        switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#ok(ki)) { ki };
        case(#err(e)) { return #err(e); };
      };



    /* let k_successful = switch (k.successful ) {
      case( ?s ) { s };
      case( null ) { false };
     };


    k_winner_goal_id = switch (k.winner_goal_id) {
      case( ?s ) { s };
      case( null ) { false };
    };*/

      Debug.print("GOALS? " # Nat.toText(k.goals.size()));
      let sk: T.SharedKickstarter = {
        id = k.id;
        name = k.name;
        slug = k.slug;
        goals = k.goals.toArray();
        owner_id = k.owner_id;
        winner_goal_id = k.winner_goal_id;
        katherine_fee = k.katherine_fee;
        total_tokens_to_release = k.total_tokens_to_release;
        //deposits = k.deposits;
        //rewards_withdraw = k.rewards_withdraw;
        //sticp_withdraw = k.sticp_withdraw;
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
        total_supporters = k.total_supporters;
        project_token_symbol= k.project_token_symbol;
      };

      #ok(sk)

    };

    public shared({ caller }) func get_kickstarter_num(): async {num_kickstarters: Nat} {
        return {num_kickstarters = kickstarters.size()};
    };

    public shared({ caller }) func get_kickstarters(): async [T.StableKickstarter] {
        let shareable_kickstarters: Buffer.Buffer<T.StableKickstarter> = Buffer.Buffer(10);
        for (k in kickstarters.vals()) {
          let sk: T.StableKickstarter = {
            id = k.id;
            name = k.name;
            slug = k.slug;
            //goals = Buffer.Buffer<T.Goal>;
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
          Debug.print(debug_show(sk));
          shareable_kickstarters.add(sk);
        };
        shareable_kickstarters.toArray();
    };

    public shared({ caller }) func get_kickstarter(kickstarter_id: T.KickstarterId): async Result.Result<T.StableKickstarter, Text> {
      let k = switch(kickstarters.getOpt(kickstarter_id)) {
        case(?k) { k };
        case(null) { return #err("Kikcstarter " # Nat.toText(kickstarter_id) # " not found"); };
      };

      let sk: T.StableKickstarter = {
        id = k.id;
        name = k.name;
        slug = k.slug;
        //goals = Buffer.Buffer<T.Goal>;
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
      Debug.print(debug_show(sk));
      return #ok(sk);
    };

    public shared({ caller }) func get_total_kickstarters(): async {total_kickstarters: Nat} {
        return { total_kickstarters = kickstarters.size()};
    };

    public shared({ caller }) func get_kickstarter_id_from_slug(slug: Text): async Result.Result<T.KickstarterId, Text> {
      switch (kickstarter_id_by_slug.get(slug)) {
        case(?id) { #ok(id) };
        case(null) { #err("Error: No kickstarter found with slug " # slug) };
      };   
    };

    public shared({ caller }) func get_kickstarter_total_goals(kickstarter_id: T.KickstarterId): async Result.Result<Nat,Text> {
        let kickstarter = switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          #ok(k.goals.size())
        };
      };
    };

    public shared({ caller }) func get_kickstarter_goal(kickstarter_id: T.KickstarterId, goal_id: T.GoalId): async Result.Result<T.Goal, Text> {
       let kickstarter = switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
           let goal = switch (k.goals.getOpt(goal_id)) {
           case(?g) {
            #ok(g)
           };
          case (null) {
            #err("Goal " # Nat.toText(goal_id) # " not found")
          };
        };
      };       
    };
    };

    public shared({ caller }) func get_supporter_total_deposit_in_kickstarter(
        supporter_id: Principal,
        kickstarter_id: T.KickstarterId,
        st_icp_price: T.Balance
    ): async Result.Result<T.Balance, Text> {
      let sip = Principal.toText(supporter_id);
      let k: T.Kickstarter =
        switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#ok(ki)) { ki };
        case(#err(e)) { return #err(e); };
      };

      let deposit = switch (k.deposits.get(sip)) {
        case(?d) { d };
        case(null) { return #err("Supporter is not part of Kickstarter!"); };
      };

      if (k.successful == ?true) {
        if (k.sticp_price_at_unfreeze > 0) {
          let after_unfreeze_deposits = deposit * k.sticp_price_at_freeze / k.sticp_price_at_unfreeze;
          let supporter_withdraw = K.get_sticp_withdraw(k, sip);
          return #ok(after_unfreeze_deposits - supporter_withdraw);
        } else {
          if (st_icp_price < k.sticp_price_at_freeze) {
            return #err("Verify the st_icp_price. Cannot be lower than the price at freeze.");
          };
          return #ok(deposit * k.sticp_price_at_freeze / st_icp_price);
        }
      } else {
        return #ok(deposit);
      };
    };

    public shared({ caller }) func get_supporter_estimated_sticp(
      supporter_id: Principal,
      kickstarter_id: T.KickstarterId,
      st_icp_price: T.Balance
    ): async Result.Result<T.Balance, Text> {
      let sip = Principal.toText(supporter_id);
      let k: T.Kickstarter =
        switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#ok(ki)) { ki };
        case(#err(e)) { return #err(e); };
      };

      let deposit = switch (k.deposits.get(sip)) {
        case(?d) { d };
        case(null) { return #err("Supporter is not part of Kickstarter!"); };
      };

        /*
        let sticp_price_at_unfreeze = switch (k.sticp_price_at_unfreeze) {
          case( ?p ) { p };
          case( null ) { 0 }; //TODO: this should not happen, maybe return an error?
        };

        let sticp_price_at_freeze = switch (k.sticp_price_at_freeze) {
          case( ?p ) { p };
          case( null ) { 0 }; //TODO: this should not happen, maybe return an error?
        };


        */
        let successful = switch (k.successful) {
          case( ?s ) { s };
          case( null ) { false }; //TODO: this should not happen, maybe return an error?
        };

        // TODO take this from kickstarter
        let sticp_price_at_unfreeze: Int64 = 1;
        let sticp_price_at_freeze: Int64 = 2;

      if (k.successful == ?true and k.sticp_price_at_unfreeze == 0) {
        if (st_icp_price < k.sticp_price_at_freeze) {
          return #err("Verify the st_icp_price. Cannot be lower than the price at freeze.");
        };
        return #ok(deposit * sticp_price_at_freeze / st_icp_price);
      } else {
        return #err("The estimation can only be used when the kickstarter is successful and funds are freezed.");
      }
    };

    // /*public shared({ caller }) func get_supported_detailed_list(
    //     supporter_id: Text,
    //     st_icp_price: T.Balance,
    //     /* TODO: check if we need pagination from_index: Nat,
    //     limit: Nat*/
    // //): async Vec<SupporterDetailedJSON> {
    // ): async [SupportedDetailed] {
    //     return "Not implemented";
    //     /*
    //     let kickstarter_ids = self.get_supported_projects(supporter_id.clone());
    //     let kickstarters_len = kickstarter_ids.len() as u64;
    //     let start: u64 = from_index.into();
    //     if start > kickstarters_len || kickstarters_len == 0 {
    //         return None;
    //     }
    //     let mut result = Vec::new();
    //     for index in start..std::cmp::min(start + limit as u64, kickstarters_len) {
    //         let kickstarter_id = *kickstarter_ids.get(index as usize).unwrap();
    //         let kickstarter = self.internal_get_kickstarter(kickstarter_id);
    //         let supporter_deposit = self.get_supporter_total_deposit_in_kickstarter(
    //             supporter_id.clone(),
    //             kickstarter_id,
    //             Some(st_icp_price)
    //         );
    //         let deposit_in_icp = kickstarter.get_at_freeze_deposits_in_icp(
    //             &supporter_id.to_string()
    //         );
    //         let rewards = self.get_supporter_total_rewards(
    //             supporter_id.clone(),
    //             kickstarter_id
    //         );
    //         let available_rewards = self.get_supporter_available_rewards(
    //             supporter_id.clone(),
    //             kickstarter_id
    //         );
    //         result.push(
    //             SupporterDetailedJSON {
    //                 kickstarter_id,
    //                 supporter_deposit,
    //                 deposit_in_icp,
    //                 rewards,
    //                 available_rewards,
    //                 active: kickstarter.active,
    //                 successful: kickstarter.successful,
    //             }
    //         );
    //     }
    //     Some(result)
    // */
    // };*/


    // TODO: move to the internal module

    public shared({ caller }) func internal_create_kickstarter(
        id: T.KickstarterId,
        name: Text,
        slug: Text,
        owner_id: T.AccountId,
        open_timestamp: T.EpochMillis,
        close_timestamp: T.EpochMillis,
        token_contract_address: T.AccountId,
        deposits_hard_cap: T.BalanceJSON,
        max_tokens_to_release_per_sticp: T.BalanceJSON,
        token_contract_decimals: Nat,
        project_token_symbol: Text
    ): async T.KickstarterId {
        let kickstarter: T.Kickstarter = {
          id;
          name;
          slug;
          goals = Buffer.Buffer(10);
          var winner_goal_id = null;
          var katherine_fee = 0;
          var total_tokens_to_release = 0;
          //TODO deposits = HashMap.HashMap(0, Text.equal, Text.hash);
          deposits = HashMap.HashMap(0, Text.equal, Text.hash);
          //TODO: rewards_withdraw = HashMap.HashMap(0, Text.equal, Text.hash);
          rewards_withdraw = HashMap.HashMap(0, Text.equal, Text.hash);
          sticp_withdraw = HashMap.HashMap(0, Text.equal, Text.hash);
          var total_deposited = 0;
          deposits_hard_cap = deposits_hard_cap;
          max_tokens_to_release_per_sticp = max_tokens_to_release_per_sticp;
          var enough_reward_tokens = false;
          owner_id;
          var active = true;
          var successful = null;
          var sticp_price_at_freeze = 0;
          var sticp_price_at_unfreeze = 0;
          creation_timestamp = U.get_current_epoch_millis();
          var open_timestamp;
          var close_timestamp;
          token_contract_address;
          token_contract_decimals;
          project_token_symbol;
          var available_reward_tokens = 0;
          var total_supporters = 0;
        };
        //TODO: kickstarter.assert_timestamps();
        kickstarters.add(kickstarter);
        kickstarter_id_by_slug
            .put(kickstarter.slug, kickstarter.id);
        //TODO self.active_projects.insert(kickstarter.id);
        return kickstarter.id;
    };


/*************/
/*   Tests   */
/*************/
/*
#[cfg(not(target_arch = "wasm32"))]
#[cfg(test)]
mod tests {
    use icp_sdk::{testing_env, MockedBlockchain, VMContext};
    mod unit_test_utils;
    use super::*;
    use unit_test_utils::*;

    /// Get initial context for tests
    fn basic_context(): async VMContext {
        get_context(
            SYSTEM_ACCOUNT.into(),
            ntoy(TEST_INITIAL_BALANCE),
            0,
            to_ts(START_TIME_IN_DAYS),
            false,
        )
    }

    /// Creates a new contract
    fn new_contract(): async KatherineFundraising {
        KatherineFundraising::new(
            OWNER_ACCOUNT.into(),
            2,
            METAPOOL_CONTRACT_ADDRESS.to_string(),
            2,
        )
    }

    fn contract_only_setup(): async (VMContext, KatherineFundraising) {
        let context = basic_context();
        testing_env!(context.clone());
        let contract = new_contract();
        return (context, contract);
    }

    #[test]
    fn test_create_kickstarter() {
        let (_context, mut contract) = contract_only_setup();
        _new_kickstarter(_context, gcontract);
        assert_eq!(1, contract.kickstarters.len());
    }

    #[test]
    fn test_get_kickstarters() {
        let (_context, mut contract) = contract_only_setup();
        contract.get_kickstarters(0, 49);
    }

    #[test]
    fn test_create_supporter() {
        let (_context, mut contract) = contract_only_setup();
        _new_kickstarter(_context, gcontract);
        let kickstarter_id = contract.kickstarters.len() - 1;
        let mut k = contract.kickstarters.get(kickstarter_id).unwrap();
        k.update_supporter_deposits(&Text::from(SUPPORTER_ACCOUNT), &DEPOSIT_AMOUNT);
        assert_eq!(1, k.get_total_supporters());
    }

    #[test]
    fn test_workflow() {
        let (_context, mut contract) = contract_only_setup();
        _new_kickstarter(_context, gcontract);
        let kickstarter_id = contract.kickstarters.len() - 1;
        let mut k = contract.kickstarters.get(kickstarter_id).unwrap();
        k.update_supporter_deposits(&Text::from(SUPPORTER_ACCOUNT), &DEPOSIT_AMOUNT);
        contract.create_goal(
            k.id,
            "test_goal".to_string(),
            U128::from(100),
            to_ts(START_TIME_IN_DAYS * 30), // WIP agregue para que compile
            U128::from(200),
            to_ts(START_TIME_IN_DAYS * 30),
            to_ts(START_TIME_IN_DAYS * 50),
        );
        contract.withdraw(U128::from(50), k.id);
    }
}

*/

/*    func assert_only_admin(caller: Principal, owner_id: Text): Text {
      assert not Principal.isAnonymous(caller);
      let user = Principal.toText(caller);
      if( Text.notEqual(user, owner_id) ) {
        //return Error.reject("only allowed for admin");
        return "only allowed for admin";
      }
    };*/
/*
    public func assert_unique_slug(slug: Text): async Text {
      if ( Option.isNull(kickstarter_id_by_slug.get(slug)) ) {
        return "Slug already exists. Choose a different one!";
      }
    };
*/

    /// method to get the given goals from the given Kickstarter.
  public func get_goals(id: T.KickstarterId): async Result.Result<[T.Goal], Text> {
      let kickstarter = switch (Private.internal_get_kickstarter(kickstarters.getOpt(id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(id));
        };
        case(#ok(k)) {
          #ok(k.goals.toArray())
        };
      };
  };


    system func preupgrade() {
     Debug.print("---- NUM KICKSTARTERS: " # Int.toText(kickstarters.size()));
      set_stable_kickstarters();
      stable_rewards_withdraw := [];
      sticp_withdraw := [];
     Debug.print("---- Finish preupgrade");
    };

    system func postupgrade() {
      //kickstarters := Buffer.Buffer(stable_kickstarters.size());
      kickstarters := Buffer.Buffer(stable_kickstarters.size());
      for (k in stable_kickstarters.vals()) {
        let goals_buffer: Buffer.Buffer<T.Goal> = Buffer.Buffer(10);
        let deposits_buffer: HashMap.HashMap<Text, T.Balance> =
          HashMap.HashMap(0, Text.equal, Text.hash);

        // TODO: this should be able to handle kickstarter deletion
        Debug.print("Number of stable goals: " # Int.toText(stable_goals.size()));
        Debug.print("Restoring goals for kickstarter ID: " # Int.toText(k.id));
        // If k.id is bigger that the goals size, the kickstarter has no goals
        if (stable_goals.size() >= k.id) {
          for (g in stable_goals.get(k.id).vals()) {
            Debug.print("Restoring goal ID: " # Int.toText(g.id));
            goals_buffer.add(g);
          };
        } else {
          Debug.print("Kickstarter ID: " # Int.toText(k.id) # " Has no goals");
        };
        Debug.print("Finished Updating goals");
        let stable_deposits_size = stable_deposits.size();
        Debug.print("Number of stable deposits: " # Int.toText(stable_deposits_size));
        Debug.print("Restoring deposits for kickstarter ID: " # Int.toText(k.id));
        // If k.id is bigger that the stable deposit size, the kickstarter has no deposit
        if (stable_deposits_size > 0 and stable_deposits_size >= k.id) {
          for (d in stable_deposits.get(k.id).vals()) {
            Debug.print("Restoring deposit: supporter:" # d.0 # " amount: " # Int64.toText(d.1));
            deposits_buffer.put(d);
          };
        } else {
          Debug.print("Kickstarter ID: " # Int.toText(k.id) # " Has no deposits");
        };
        Debug.print("Finished Updating deposits");

        let kickstarter: T.Kickstarter = {
          id = k.id;
          name = k.name;
          slug = k.slug;
          goals = goals_buffer;
          var winner_goal_id = k.winner_goal_id;
          var katherine_fee = k.katherine_fee;
          var total_tokens_to_release = k.total_tokens_to_release;
          //TODO update deposits
          deposits = HashMap.HashMap(0, Text.equal, Text.hash);
          //TODO: update this fields
          rewards_withdraw = HashMap.HashMap(0, Text.equal, Text.hash);
          sticp_withdraw = HashMap.HashMap(0, Text.equal, Text.hash);
          var total_deposited = k.total_deposited;
          deposits_hard_cap = k.deposits_hard_cap;
          max_tokens_to_release_per_sticp = k.max_tokens_to_release_per_sticp;
          var enough_reward_tokens = k.enough_reward_tokens;
          owner_id = k.owner_id;
          var active = k.active;
          var successful = k.successful;
          var sticp_price_at_freeze = k.sticp_price_at_freeze;
          var sticp_price_at_unfreeze = k.sticp_price_at_unfreeze;
          creation_timestamp = k.creation_timestamp;
          var open_timestamp = k.open_timestamp;
          var close_timestamp = k.close_timestamp;
          token_contract_address = k.token_contract_address;
          token_contract_decimals = k.token_contract_decimals;
          var available_reward_tokens = k.available_reward_tokens;
          project_token_symbol = k.project_token_symbol;
          var total_supporters = k.total_supporters;
 
        };
        Debug.print("Loading kickstarter");
        kickstarters.add(kickstarter);
        Debug.print("kickstarter loaded");
      };
      // Add missing kikcstarter elements
      stable_kickstarters :=  [];
      stable_goals := [];
      stable_deposits := [];
      stable_rewards_withdraw := [];
      sticp_withdraw := [];

      Debug.print("Finished postupgrade");
    };

    func set_stable_kickstarters() {
      Debug.print("Set stable kickstarters...");
        let stable_kickstarters_buffer: Buffer.Buffer<T.StableKickstarter> = Buffer.Buffer(kickstarters.size());
        let stable_goals_buffer: Buffer.Buffer<[T.Goal]> = Buffer.Buffer(kickstarters.size());
        var stable_kickstarter_deposits_buffer: Buffer.Buffer<[(Text, T.Balance)]> = Buffer.Buffer(kickstarters.size());
        for (k in kickstarters.vals()) {
          var stable_deposits_buffer: Buffer.Buffer<(Text, T.Balance)> = Buffer.Buffer(k.deposits.size());
          let sk: T.StableKickstarter = {
            id = k.id;
            name = k.name;
            slug = k.slug;
            //goals = Buffer.Buffer<T.Goal>;
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
          Debug.print("--Backing up kickstarter: " # Int.toText(k.id));
          Debug.print("--Stable kickstarter buffer size: " # Int.toText(stable_kickstarters_buffer.size()));
          stable_kickstarters_buffer.add(sk);
          Debug.print("Backing up goals...");
          stable_goals_buffer.add(k.goals.toArray());
          Debug.print("Finished Backing up goals for ID: " # Int.toText(k.id) # "GOAL ID: " # Int.toText(stable_goals_buffer.size()));
          Debug.print("Backing up deposits...");
          for ((key,value) in k.deposits.entries()) {
            stable_deposits_buffer.add((key,value));
          };
          stable_kickstarter_deposits_buffer.add(stable_deposits_buffer.toArray());
          Debug.print("Done Backing up deposits...");
        };

      stable_kickstarters := stable_kickstarters_buffer.toArray();
      stable_goals := stable_goals_buffer.toArray();
      stable_deposits := stable_kickstarter_deposits_buffer.toArray();
      Debug.print("Finished set_stable_kickstarters...");
   };


  // DEFI stuff

  public shared(msg) func deposit(token: T.Token, amount: Nat, project: Nat): async Result.Result<T.Balance, Text> {
    Debug.print("Depositing Token: " # Principal.toText(token) # " Is stICP?: " # Principal.toText(sticp_principal));
    if (token == sticp_principal) {
      Debug.print("Depositing Supoorter stICP: " # Principal.toText(token));
      await process_supporter_deposit(msg.caller, amount, project)
    } else {
      Debug.print("Depositing kickstarter tokens: " # Principal.toText(token));
      await process_kickstarter_deposit(msg.caller, amount, project, token)
    }
  };


  func process_supporter_deposit(
    caller: Principal,
    amount: Nat,
    kickstarter_id: Nat,
  ): async Result.Result<T.Balance, Text> {

    let source_account = Account.accountIdentifier(Principal.fromActor(Self), Account.principalToSubaccount(caller));
    let supporter_id = Principal.toText(caller);
    var kickstarter =
    switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
      case(#err(e)) {
        return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
      };
      case(#ok(k)) {
        k
      };
    };


    // Update Kickstarter
    if( not U.is_within_funding_period(kickstarter) ) {
      return #err("Not within the funding period.");
    };

    /*if( not kickstarter.enough_reward_tokens ) {
      return #err("Supporters cannot deposit until the Kickstarter covers the required rewards!");
    };*/

    let amount64 = Int64.fromNat64(Nat64.fromNat(amount));
    let new_total_deposited = kickstarter.total_deposited + amount64;

    if( new_total_deposited >= kickstarter.deposits_hard_cap ) {
      return #err("The deposits hard cap cannot be exceeded!");
    };

    Debug.print("KICKSTARTER INITIAL BALANCE: " # Int64.toText(kickstarter.total_deposited)); 
    kickstarter.total_deposited := new_total_deposited;
    Debug.print("KICKSTARTER FINAL BALANCE: " # Int64.toText(kickstarter.total_deposited)); 

    // Check ledger for value
    let balance = await stICP.balanceOf(caller);
    Debug.print("Supporter stICP balance: " # Nat.toText(balance));
    // Transfer to the canister account
    let metayield_account = Principal.fromActor(Self);
    //TODO: Debug.print("Depositing: " # 
    let icp_receipt = if (balance > icp_fee) {
      await stICP.transferFrom(caller, metayield_account, amount)
    } else {
      return #err("Can't transfer stICP, low balance");
    };

    switch icp_receipt {
      case (#Ok(r))  {
        Debug.print("RECEPIT: " # Nat.toText(r));
      };
      case ( #Err(e) ) {
        return #err("Transfer failure: " # debug_show(e));
      };
    };

    update_supporter_deposits(kickstarter,
      supporter_id, amount64);

    // Update Supporter.
    var supporter = internal_get_supporter(supporter_id);
    Debug.print("Supported projects for: " # supporter_id # " num: " # Nat.toText(supporter.supported_projects.size()));
    //Debug.print(debug_show(supporter.supported_projects.keys().toArray()));
    switch ( supporter.supported_projects.get(kickstarter.id) ) {
      case(null) {
        Debug.print("Adding project to supported project list");
        supporter.supported_projects.put(kickstarter.id, kickstarter.name);
      };
      case(?s) {
        Debug.print("Project already in the supported project list");
      };
    };
    #ok(new_total_deposited)
  };

  /// Process a reward token deposit to Katherine Contract.
  // After user approves tokens to the DEX
  private func process_kickstarter_deposit(
    caller: Principal,
    amount: Nat,
    kickstarter_id: Nat,
    token: T.Token
  ): async Result.Result<T.Balance, Text> {
    let dip20 = actor (Principal.toText(token)) : T.DIPInterface;
    /*TODO: add this check assert_eq!(
      &env::predecessor_account_id(),
      &kickstarter.token_contract_address,
      "Deposited tokens do not correspond to the Kickstarter contract."
    );*/

    //let amount = kickstarter.less_to_24_decimals(amount);

    let kickstarter =
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
      };

    if (U.get_current_epoch_millis() > kickstarter.close_timestamp) {
      return #err("Kickstarter Tokens should be provided before the funding period ends: ");
    };

    let max_tokens_to_release: T.Balance = U.calculate_max_tokens_to_release(kickstarter);
    let katherine_fee: T.Balance = calculate_katherine_fee(max_tokens_to_release);
    let min_tokens_to_allow_support: T.Balance = max_tokens_to_release
       + katherine_fee;
       //+ calculate_katherine_fee(max_tokens_to_release);
    kickstarter.available_reward_tokens += Int64.fromNat64(Nat64.fromNat(amount));
    kickstarter.enough_reward_tokens := kickstarter.available_reward_tokens >= min_tokens_to_allow_support;

      // Transfer to account.
     //TODO add this check: let token_reciept = if (balance > dip_fee) {

    // Check ledger for value
    let balance = await dip20.balanceOf(caller);
    // Transfer to default subaccount

    let metayield_account = Principal.fromActor(Self);

    Debug.print("Transferring from: " # Principal.toText(caller) # " TO: " # Principal.toText(metayield_account));
    Debug.print("Balance: " # Nat.toText(balance));

    /*let icp_receipt = if (balance > icp_fee) {
        await dip20.transfer(metayield_account, amount);
    } else {
        return #err("Can't transfer stICP, low balance");
    };*/


    let token_receipt = switch (
      //await dip20.transfer(metayield_account, amount)) {
      await dip20.transferFrom(caller, metayield_account, amount)) {
      case(#Err(e)) {
        Debug.print(debug_show(e));
        return #err("Transfer failure of: " # Nat.toText(amount)  # " for: " # Principal.toText(caller) # " Error: " # debug_show(e)); 
      };
      case(#Ok(r)) { r };
    };

      /*} else {
        return #Err(#BalanceLow);
    };*/

    #ok(kickstarter.available_reward_tokens)
  };

    // In this protocol we don't deal with 24 zeros as we do it in near
  func calculate_katherine_fee(
    total_tokens_to_release: T.Balance
  ): T.Balance {
    // TODO: for simplicity we're using integers but we have to update to floats or use
    // the IC good practices for floating point arithmetic
    return(
      katherine_fee_percent * total_tokens_to_release / BASIS_POINTS
    );
  };

    /// Update supporter deposits
  func update_supporter_deposits(k: T.Kickstarter, supporter_id: T.AccountId, amount: T.Balance) {
    var new_total: T.Balance = 0;
    Debug.print("TOTAL SUPPORTERS: " # Int.toText(k.total_supporters));
    switch (k.deposits.get(supporter_id)) {
      // supporter has already deposited
      case(?total) {
        new_total := total + amount;
      };
      // first deposit for this supporter
      case(null) {
        new_total := amount;
        k.total_supporters += 1;
        Debug.print("NEW TOTAL SUPPORTERS: " # Int.toText(k.total_supporters));
      };
    };
    k.deposits.put(supporter_id, new_total);
  };


/*THIS IS HERE AS AN EXAMPLE  // After user transfers ICP to the target subaccount
  private func depositIcp(caller: Principal): async T.DepositReceipt {
    // Calculate target subaccount
    // NOTE: Should this be hashed first instead?
   let source_account = Account.accountIdentifier(Principal.fromActor(Self), Account.principalToSubaccount(caller));
    // Check ledger for value
    let balance = await Ledger.account_balance({ account = source_account });
    // Transfer to default subaccount
    let icp_receipt = if (Nat64.toNat(balance.e8s) > icp_fee) {
      await Ledger.transfer({
        memo: Nat64    = 0;
        from_subaccount = ?Account.principalToSubaccount(caller);
        to = Account.accountIdentifier(Principal.fromActor(Self), Account.defaultSubaccount());
        amount = { e8s = balance.e8s - Nat64.fromNat(icp_fee)};
        fee = { e8s = Nat64.fromNat(icp_fee) };
        created_at_time = ?{ timestamp_nanos = Nat64.fromNat(Int.abs(Time.now())) };
      })
    } else {
        return #Err(#BalanceLow);
    };
    switch icp_receipt {
      case ( #Err _) {
        return #Err(#TransferFailure);
      };
      case _ {};
    };
    let available = { e8s : Nat = Nat64.toNat(balance.e8s) - icp_fee };
    // keep track of deposited ICP
    book.addTokens(caller,ledger,available.e8s);
    // Return result
    #Ok(available.e8s)
  };
*/

  // ===== INTERNAL FUNCTIONS =====
  private func fetch_dip_fee(token: T.Token) : async Nat {
    let dip20 = actor (Principal.toText(token)) : T.DIPInterface;
    let metadata = await dip20.getMetadata();
    metadata.fee
  };


  public shared query (msg) func getBalance(token: T.Token) : async Nat {
    switch (book.get(msg.caller)) {
      case (?token_balance) {
        switch (token_balance.get(token)){
          case (?balance) {
            return balance;
          };
          case(null){
            return 0;
          };
        };
      };
      case (null) {
        return 0;
      };
    };
  };


  /// Returns the supporter_id from the supporters attribute, it creates the entry if it does not exist
  func internal_get_supporter(supporter_id: T.SupporterId): T.Supporter {
    switch (supporters.get(supporter_id)) {
      case(?supporter) {
        supporter
      };
      case(null) {
        let supporter: T.Supporter = {
          supported_projects = HashMap.HashMap(0, Nat.equal, Hash.hash);
        };
        supporters.put(supporter_id, supporter);
        supporter
      };
    };
  };

  /// Returns an array of supported projects
  public func get_supported_projects(supporter_id: T.SupporterId): async [{id: T.KickstarterId; name: Text; supporter_deposit: T.Balance }] {
    let supporter = internal_get_supporter(supporter_id);
    var out: Buffer.Buffer<{id: T.KickstarterId; name: Text; supporter_deposit: T.Balance }> = Buffer.Buffer(supporter.supported_projects.size());
    for ((k,v) in supporter.supported_projects.entries()) {
      let deposit: T.Balance = switch (kickstarters.getOpt(k)) {
        case (?k) { 
          switch (k.deposits.get(supporter_id)) {
            case (?d) { d };
            case (null) { 0 };
          }; 
        };
        case (null) { 0 };
      };
      out.add({
        id = k;
        name = v;
        supporter_deposit = deposit;
      });
    };
    out.toArray()
  };

  public shared(msg) func withdraw_all(kickstarter_id: T.KickstarterId): async Result.Result<T.Balance, Text> {
    let supporter_id = Principal.toText(msg.caller);

    let kickstarter =
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };

    if (not U.is_within_funding_period(kickstarter)) {
        switch( K.assert_funds_must_be_unfreezed(kickstarter) ) {
          case( #ok(false) ) {
            return #err("Price at unfreeze is not defined. Please unfreeze kickstarter funds with fn: unfreeze_kickstarter_funds!")
          };
          case( _ ) {};
        };
    };

    let amount = switch( await get_supporter_total_deposit_in_kickstarter(
      Principal.fromText(supporter_id), kickstarter_id, 0)) {
      case( #ok(a) ) { a };
      case( #err(e) ) { return #err(e); };
    };
    await withdraw(amount, kickstarter_id)
  };


  /// Returns the canister account to approve and fund for transactions
  public func get_canister_account(): async Text {
    let metayield_account = Principal.fromActor(Self);
    Debug.print("Metayield Account: " # Principal.toText(metayield_account));
    Principal.toText(metayield_account)
  };

  /// Change the close date of the funding period
  public func update_project_close_ts(kickstarter_id: Nat, date: T.EpochMillis): async Result.Result<T.EpochMillis, Text> {
    let k: T.Kickstarter =
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
      case(#ok(ki)) { ki };
      case(#err(e)) { return #err(debug_show(e)); };
    };
    k.close_timestamp := date;
    #ok(k.close_timestamp)
  };

  /// Change the open date of the funding period
  public func update_project_open_ts(kickstarter_id: Nat, date: T.EpochMillis): async Result.Result<T.EpochMillis, Text> {
    let k: T.Kickstarter =
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
      case(#ok(ki)) { ki };
      case(#err(e)) { return #err(debug_show(e)); };
    };
    k.open_timestamp := date;
    #ok(k.open_timestamp)
  };



  /// Withdraw a valid amount of user's balance. Call this before or after the Locking Period.
  public shared(msg) func withdraw(amount: Int64, kickstarter_id: T.KickstarterId): async Result.Result<T.Balance, Text> {
      /*TODO: i think we don't need this let min_prepaid_gas = GAS_FOR_FT_TRANSFER + GAS_FOR_RESOLVE_TRANSFER + FIVE_TGAS;
      assert!(
          env::prepaid_gas() > min_prepaid_gas,
          "gas required {}",
          min_prepaid_gas
    );*/

    var kickstarter =
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };

    if (amount < 0) {
      return #err("The amount to withdraw should be greater than Zero!");
    };

    let supporter_id = Principal.toText(msg.caller);

    switch (kickstarter.successful) {
      case(?true) {
          
        switch( K.assert_funds_must_be_unfreezed(kickstarter) ) {
          case( #ok(false) ) {
            return #err("Price at unfreeze is not defined. Please unfreeze kickstarter funds with fn: unfreeze_kickstarter_funds!")
          };
          case( _ ) {};
        };

        let test = internal_supporter_withdraw_after_unfreeze(
          amount,
          kickstarter.id,
          supporter_id);
      };
      case(?false) {
          let res = internal_supporter_withdraw_before_freeze(
              amount,
              kickstarter.id,
              supporter_id,
          );
      };
      case(null) {
        if (U.get_current_epoch_millis() > kickstarter.close_timestamp) {
          return #err("The funding period is over, Kickstarter must be evaluated!");
        };
        let res = internal_supporter_withdraw_before_freeze(
          amount,
          kickstarter.id,
          supporter_id,
        );
      };
    };

    // Transfer funds
    // TODO: check after and before unfreeze callbacks
    let caller = msg.caller;

    // TODO: hardcoded token canister id 
    let token: T.Token = Principal.fromText("r7inp-6aaaa-aaaaa-aaabq-cai");
    let dip20 = actor (Principal.toText(token)) : T.DIPInterface;
    let metayield_account = Principal.fromActor(Self);

    let token_receipt = switch (
      await dip20.transferFrom(caller, metayield_account, Nat64.toNat(Int64.toNat64(amount)))) {
      case( #Err(e) ) {
        Debug.print(debug_show(e));
        return #err("Transfer failure of: " # Int64.toText(amount)  # 
          " for: " # Principal.toText(caller) # 
          " Error: " # debug_show(e)); 
      };
      case( #Ok(r) ) { r };
    };
    #ok(amount)
  };




  /****************************************************************************
  *                                                                           *
  * TODO: create actor classes to put functions in different files            *
  * https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko/modules-and-imports/
  *
  *****************************************************************************/

  /// This function is for the Supporter withdrawal of stNear tokens after the unfreeze.
  /// REWARDS ACHIEVED for all Supporters!
  public func supporter_withdraw_after_unfreeze(
    requested_amount: T.Balance,
    available_to_withdraw: T.Balance,
    kickstarter_id:  T.KickstarterId,
    supporter_id: T.SupporterId
  ): async Result.Result<T.Balance, Text> {
    let entity = supporter_id;
    var kickstarter = 
      switch (Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };


    let current_withdraw = K.get_sticp_withdraw(kickstarter, entity);
    let new_withdraw = current_withdraw + requested_amount;
    kickstarter.sticp_withdraw.put(entity, new_withdraw);
    
    // Do not remove from supported projects unless no more rewards.
    if (available_to_withdraw == requested_amount) {
      let res = remove_from_supported_withdraw(
        kickstarter_id,
        supporter_id
      );
    };

    kickstarters.put(kickstarter.id, kickstarter);
    #ok(new_withdraw)
  };

  /// The contrapart in the claim for this function is **remove_from_supported_claim**.
  public func remove_from_supported_withdraw(
    kickstarter_id: T.KickstarterId,
    supporter_id: T.SupporterId
  ): async Result.Result<Bool, Text> {

    var kickstarter = switch (
      Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
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
 
    let rewards = switch(Private.internal_get_supporter_rewards(
      supporter_id,
      kickstarter,
      winner_goal.tokens_to_release_per_sticp
    )) {
      case( #ok(r) ) { r };
      case( #err( e ) ) { return #err(e) };
    };

    if (rewards == 0) {
      var supporter = internal_get_supporter(supporter_id);
      supporter.supported_projects.delete(kickstarter.id);
      //TODO: check if this is needed, supporter might be a reference
      supporters.put(supporter_id, supporter);
      return #ok(false);
    };
    #ok(true)
  };

  public func internal_supporter_withdraw_after_unfreeze(
    requested_amount: T.Balance,
    kickstarter_id: T.KickstarterId,
    supporter_id: T.SupporterId
  ): async Result.Result<T.Balance, Text> {
    let entity = supporter_id;

    var kickstarter = switch (
      Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };

    let after_unfreeze_deposits = switch (K.get_after_unfreeze_deposits(kickstarter, supporter_id) ){
      case( #ok( aud ) ) { aud };
      case( #err( e ) ) { return #err(e); };

    };
    let available_to_withdraw = after_unfreeze_deposits
            - K.get_sticp_withdraw(kickstarter, entity);

    if(available_to_withdraw < 0 and requested_amount > available_to_withdraw) {
      return #err("Not available amount!");
    };

    // Ensure that the min_deposit_amount remains after a withdraw.
    let amount_to_withdraw = if (U.is_close(requested_amount, available_to_withdraw)
      or (available_to_withdraw - requested_amount) < min_deposit_amount) {
      available_to_withdraw
    } else {
      requested_amount
    };

    let res =  await supporter_withdraw_after_unfreeze(
      amount_to_withdraw,
      available_to_withdraw,
      kickstarter.id,
      supporter_id
    );

    /* We don't need this code here, now it's handled in withdraw
       left it here just for code review
    let supporter_id: ValidAccountId = supporter_id.try_into().unwrap();
        nep141_token::ft_transfer(
            supporter_id.clone(),
            BalanceJSON::from(amount_to_withdraw),
            None,
            &self.metapool_contract_address,
            1,
            GAS_FOR_FT_TRANSFER,
        ).then(
            ext_self_metapool::return_tokens_after_unfreeze_callback(
                supporter_id,
                kickstarter.id.into(),
                BalanceJSON::from(amount_to_withdraw),
                &env::current_account_id(),
                0,
                GAS_FOR_RESOLVE_TRANSFER
            )
        );*/
  };


  // Withdraw functions
  public func internal_supporter_withdraw_before_freeze(
      requested_amount: T.Balance,
      kickstarter_id: T.KickstarterId,
      supporter_id: T.SupporterId
  ): async Result.Result<T.Balance, Text>  {

    // TODO: find a better way to avoid this verbose way of getting kickstarters
    var kickstarter = switch (
      Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };

    let goal = switch (kickstarter.winner_goal_id) {
      case(?g) { 
        kickstarter.goals.get(g)
      };
      case(null) { return #err("No winner goal defined"); };
    };

    let deposit = switch (K.get_deposit(kickstarter, supporter_id)) {
      case(#ok(d)) {
        // TODO: Check if we need to manage proportional quantities here
          (d * goal.tokens_to_release_per_sticp)
            - K.get_rewards_withdraw(kickstarter, supporter_id)
      };
      case (#err(e)) { return #err(e) };
    };


    if (requested_amount > deposit) {
      return #err("Not available amount!");
    };
      
    // Ensure that the min_deposit_amount remains after a withdraw.
    let amount_to_withdraw = if (U.is_close(requested_amount, deposit) 
      or (deposit - requested_amount) < min_deposit_amount) {
      deposit
    } else {
      requested_amount
    };

    let res = await supporter_withdraw_before_freeze(
      amount_to_withdraw,
      deposit,
      kickstarter.id,
      supporter_id
    );
      /*let supporter_id: ValidAccountId = supporter_id.try_into().unwrap();
      nep141_token::ft_transfer(
          supporter_id.clone(),
          BalanceJSON::from(amount_to_withdraw),
          None,
          &self.metapool_contract_address,
          1,
          GAS_FOR_FT_TRANSFER,
      ).then(
          ext_self_metapool::return_tokens_before_freeze_callback(
              supporter_id,
              kickstarter.id.into(),
              BalanceJSON::from(amount_to_withdraw),
              &env::current_account_id(),
              0,
              GAS_FOR_RESOLVE_TRANSFER
          )
      );*/
  };

  /// This function is for the Supporter withdrawal of stNear tokens. The kickstarter.total_deposited
  /// is only modified during the funding period. After the project evaluation, the value is kept only
  /// as a reference. NO REWARDS ACHIEVED!
  public func supporter_withdraw_before_freeze(
    requested_amount: T.Balance,
    deposit: T.Balance,
    kickstarter_id: T.KickstarterId,
    supporter_id: T.SupporterId
  ): async Result.Result<T.Balance, Text> {

    // TODO: find a better way to avoid this verbose way of getting kickstarters
    var kickstarter = switch (
      Private.internal_get_kickstarter(kickstarters.getOpt(kickstarter_id))) {
        case(#err(e)) {
          return #err("Error: " # e # " ID: " # Int.toText(kickstarter_id));
        };
        case(#ok(k)) {
          k
        };
    };

    if (deposit == requested_amount) {
      kickstarter.deposits.delete(supporter_id);
      // Remove Kickstarter from the supported projects.
      // This is possible because no Rewards can be claimed.
      let supporter = internal_get_supporter(supporter_id);
      supporter.supported_projects.delete(kickstarter.id);
      supporters.put(supporter_id, supporter);
    } else {
      let new_total = deposit - requested_amount;
      kickstarter.deposits.put(supporter_id, new_total);
    };
    if (U.is_within_funding_period(kickstarter)) {
      kickstarter.total_deposited -= requested_amount;
    };
    kickstarters.put(kickstarter.id, kickstarter);
    #ok(requested_amount)
  };
};

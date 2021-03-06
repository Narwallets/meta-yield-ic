import Buffer "mo:base/Buffer";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Int64 "mo:base/Int64";
import Bool "mo:base/Bool";
import HashMap "mo:base/HashMap";
import Time "mo:base/Time";
import Error "mo:base/Error";
import Option "mo:base/Option";
import Debug "mo:base/Debug";
import Result "mo:base/Result";

module MetaYieldTypes {
  public type KickstarterId = Nat;
  public type GoalId = Nat;
  public type AccountId = Text;
  public type SupporterId = Text;
  public type ValidAccountId = Text;
  public type EpochMillis = Int64;
  public type BalanceJSON = Int64;
  public type Balance = Int64;
  public type KickstarterIdJSON = Nat;
  public type Token = Principal;

  // assuming 8 decimals
  public let ICP: Int64 = 100_000_000;
  public let ONE_MILLI_ICP: Int64 = 1_00_000;



  public type Kickstarter = {
    // Unique ID identifier
    id: KickstarterId;
    // Name of the kickstarter project
    name: Text;
    // The slug is a unique string for the kickstarter to recover the id.
    slug: Text;
    goals: Buffer.Buffer<Goal>;
    owner_id: AccountId;
    var winner_goal_id: ?Nat;
    // Katherine fee is denominated in Kickstarter Tokens.
    var katherine_fee: Balance;
    // This is the Kickstarter Tokens that will be used to pay the Supporters.
    // To make a Kickstarter successful:
    // katherine_fee + total_tokens_to_release > available_reward_tokens
    var total_tokens_to_release: Balance;
    // Deposits during the funding period by Supporters.
    deposits: HashMap.HashMap<Text, Balance>;
    rewards_withdraw: HashMap.HashMap<Text, Balance>;
    //TODO: check if we have enums sticp_withdraw: HashMap.HashMap<WithdrawEntity, Balance>;
    sticp_withdraw: HashMap.HashMap<Text, Balance>;
    // Important Note: the kickstarter.total_deposited variable will only increase or decrease within
    // the funding period. After the project evaluation, this value will stay CONSTANT to store a
    // record of the achieved funds, even after all stNear have been withdraw from the kickstarter.
    var total_deposited: Balance;
    // Total deposited hard cap. Supporters cannot deposit more than.
    deposits_hard_cap: Balance;
    max_tokens_to_release_per_sticp: Balance;
    var enough_reward_tokens: Bool;
    // True if the kickstart project is active and waiting for funding.
    var active: Bool;
    // True if the kickstart project met the goals
    var successful: ?Bool;
    // Spot sticp price at freeze and unfreeze.
    var sticp_price_at_freeze: Balance;
    var sticp_price_at_unfreeze: Balance;
    // Creation date of the project
    creation_timestamp: EpochMillis;
    // Opening date to recieve deposits from supporters. TODO: more detail here
    var open_timestamp: EpochMillis;
    // Closing date for recieving deposits from supporters. TODO: more detail here
    var close_timestamp: EpochMillis;
    // Kickstarter Token contract address.
    token_contract_address: AccountId;
    // Total available and locked deposited tokens by the Kickstarter.
    var available_reward_tokens: Balance;
    token_contract_decimals: Nat;
    project_token_symbol: Text;
    var total_supporters: Int;
  };


  public type StableKickstarter = {
    id: Nat;
    name: Text;
    slug: Text;
    //goals: Buffer.Buffer<Goal>;
    owner_id: Text;
    winner_goal_id: ?Nat;
    katherine_fee: Int64;
    total_tokens_to_release: Int64;
    //deposits: HashMap.HashMap<Text, Int64>;
    //rewards_withdraw: HashMap.HashMap<Text, Int64>;
    //sticp_withdraw: HashMap.HashMap<Text, Int64>;
    total_deposited: Int64;
    deposits_hard_cap: Int64;
    max_tokens_to_release_per_sticp: Int64;
    enough_reward_tokens: Bool;
    active: Bool;
    successful: ?Bool;
    sticp_price_at_freeze: Int64;
    sticp_price_at_unfreeze: Int64;
    creation_timestamp: Int64;
    open_timestamp: Int64;
    close_timestamp: Int64;
    token_contract_address: Text;
    available_reward_tokens: Int64;
    token_contract_decimals: Nat;
    project_token_symbol: Text;
    total_supporters: Int;
  };


  public type SharedKickstarter = {
    id: Nat;
    name: Text;
    slug: Text;
    goals: [Goal];
    owner_id: Text;
    winner_goal_id: ?Nat;
    katherine_fee: Int64;
    total_tokens_to_release: Int64;
    //deposits: HashMap.HashMap<Text, Int64>;
    //rewards_withdraw: HashMap.HashMap<Text, Int64>;
    //sticp_withdraw: HashMap.HashMap<Text, Int64>;
    total_deposited: Int64;
    deposits_hard_cap: Int64;
    max_tokens_to_release_per_sticp: Int64;
    enough_reward_tokens: Bool;
    active: Bool;
    successful: ?Bool;
    sticp_price_at_freeze: Int64;
    sticp_price_at_unfreeze: Int64;
    creation_timestamp: Int64;
    open_timestamp: Int64;
    close_timestamp: Int64;
    token_contract_address: Text;
    available_reward_tokens: Int64;
    token_contract_decimals: Nat;
    total_supporters: Int;
    project_token_symbol: Text;
  };



  public type Goal = {
    id: GoalId;
    /// Name of the kickstarter project
    name: Text;
    /// How many sticp tokens are needed to get this Goal
    desired_amount: Balance;
    unfreeze_timestamp: EpochMillis;
    /// How many tokens are for this
    tokens_to_release_per_sticp: Balance;
    /// Date for starting the delivery of the Kickstarter Tokens if the goal was matched
    cliff_timestamp: EpochMillis;
    /// Date to finish the delivery of the Kickstarter Tokens
    end_timestamp: EpochMillis;
  };


  public type Supporter = {
    supported_projects: HashMap.HashMap<KickstarterId, Text>;
  };


  // From https://github.com/dfinity/examples/blob/master/motoko/defi/src/defi_dapp/types.mo

  public type DepositErr = {
    #BalanceLow;
   #TransferFailure;
  };

  public type DepositReceipt = {
    #Ok: Nat;
    #Err: DepositErr;
  };

  public type DIPInterface = actor {
    balanceOf : (Principal) ->  async Nat;
    transfer : (Principal,Nat) ->  async TxReceipt;
    transferFrom : (Principal,Principal,Nat) -> async TxReceipt;
    allowance : (owner: Principal, spender: Principal) -> async Nat;
    getMetadata: () -> async Metadata;
  };

    // Dip20 token interface
  public type TxReceipt = {
    #Ok: Nat;
    #Err: {
      #InsufficientAllowance;
      #InsufficientBalance;
      #ErrorOperationStyle;
      #Unauthorized;
      #LedgerTrap;
      #ErrorTo;
      #Other;
      #BlockUsed;
      #AmountTooSmall;
    };
  };

  public type Metadata = {
    logo : Text; // base64 encoded logo or logo url
    name : Text; // token name
    symbol : Text; // token symbol
    decimals : Nat8; // token decimal
    totalSupply : Nat; // token total supply
    owner : Principal; // token owner
    fee : Nat; // fee for update calls
  };

};

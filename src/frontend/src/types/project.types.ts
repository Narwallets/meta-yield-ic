export interface SupportedKickstarter {
  kickstarter_id: number;
  supporter_deposit: string;
  active: boolean;
  successful?: boolean;
}
export interface TeamMemberProps {
    name: string;
    bio: string;
  }
  export interface KickstarterGoalProps {
    cliff_timestamp: number;
    desired_amount: string;
    end_timestamp: number;
    id: number;
    name: string;
    tokens_to_release_per_stnear: string;
    unfreeze_timestamp: number;
  }
  export interface KickstarterProps {
    close_timestamp: number;
    goals: KickstarterGoalProps[];
    id: number;
    open_timestamp: number;
    token_contract_address: string;
    total_deposited: string;
    total_supporters: number;
    project_token_symbol: string;
    project_token_icon: string;
    stnear_price_at_freeze: string;
    stnear_price_at_unfreeze: string;
    active: boolean;
    successful?: boolean;
    winner_goal_id?: number;
    enough_reward_tokens: boolean;
  }
  export interface FAQItem {
    title: string;
    content: string;
  }
  export interface DocumentItem {
    title: string;
    url: string;
  }

  export interface RoadmapProps{
    imageUrl: string;
    linkUrl: string;
  }
  export interface ProjectProps {
    id: number;
    slug:string;
    name: string;
    motto: string;
    projectUrl: string;
    twitter: string;
    imageUrl: string;
    avatarUrl: string;
    description: string;
    verified: boolean;
    active: boolean;
    tags: string[];
    campaignHtml: string;
    team: TeamMemberProps[];
    roadmap: RoadmapProps;
    kickstarter: KickstarterProps;
    faq: FAQItem[],
    about: string;
    documents: DocumentItem[]

  }
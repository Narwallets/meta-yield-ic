export const kickstarter_mock = {
  "id":0,
  "total_supporters":59,
  "total_deposited":"89490421500000000000000000000",
  "open_timestamp":1652245200000,
  "close_timestamp":1654059600000,
  "token_contract_address":"WEBToken",
  "stnear_price_at_freeze": "125000000000000000000000000000",
  "stnear_price_at_unfreeze": "125000000000000000000000000000",
  "goals":[
     {
        "id":0,
        "name":"Goal_1",
        "desired_amount":"125000000000000000000000000000",
        "unfreeze_timestamp":1685595600000,
        "tokens_to_release_per_stnear":"7500000000000000000000000",
        "cliff_timestamp":1661990400000,
        "end_timestamp":1672444800000
     },
     {
        "id":1,
        "name":"Goal_2",
        "desired_amount":"150000000000000000000000000000",
        "unfreeze_timestamp":1685595600000,
        "tokens_to_release_per_stnear":"8500000000000000000000000",
        "cliff_timestamp":1661990400000,
        "end_timestamp":1672444800000
     },
     {
        "id":2,
        "name":"Goal_3",
        "desired_amount":"180000000000000000000000000000",
        "unfreeze_timestamp":1685595600000,
        "tokens_to_release_per_stnear":"9483500000000000000000000",
        "cliff_timestamp":1661990400000,
        "end_timestamp":1672444800000
     }
  ],
  "active":true,
  "successful": undefined,
  "winner_goal_id":undefined,
  "enough_reward_tokens":true,
  "available_reward_tokens":"3000000000000000000000000000000",
  "project_token_symbol": "PEM",
  "project_token_icon": `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="0.5" width="25" height="25" rx="12.5" fill="black"/>
  </svg>`
}
export const data = [
  {
    id: 0, // key para proyectos en katherine
    open: true, // ToDo get data from canister
    active: true, // ToDo get data from canister
    slug: "permrock", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "PembRock Finance",
    motto: "Leveraged yield farming is NEAR.",
    projectUrl: "https://pembrock.finance/",
    twitter: "https://twitter.com/PembrockFi",
    imageUrl:"https://res.cloudinary.com/metayield/image/upload/v1652446802/Pembrock/Pembrock_Cover_2_ccvd3n.png",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1496155033389391873/d4H_TCLF_400x400.jpg",
    description:
      "Is the first leveraged yield farming application on NEAR Protocol. It is aimed at providing users with larger yields and greater liquidity — all on the NEAR blockchain.",
    verified: true,
    tags: ["Finance", "Infrastructure", "Security", "Vault"],
    campaignHtml: `PembRock Finance is the first leveraged yield farming project on NEAR! Founded by NEAR guild masters and having secured a $75,000 grant from the NEAR Foundation, PembRock will provide new tools to reach a wider usership, attracting more investment and expanding the NEAR ecosystem.<br><br>
    Lenders earn passive income by depositing their crypto into the vaults which fund liquidity pools, while yield farmers can maximize their profits by opening a leveraged position. <br><br>
    The financial ecosystem of PembRock finance will be supported by native and versative <b>PEM Token</b>. It is used: <br><br>
    <ul><li>To stake within the PembRock Finance ecosystem — with rewards paid out in PEM.</li>
    <li>As a part of our reward mechanism for interacting with our protocol.</li>
    <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
    <li>For DAO participation — users can stake PEM to receive xPEM, our governance token.</li></ul> <br><br>
    All fees are collected as profit and are distributed among PEM holders who have staked in our protocol! <br><br>
    <b>How the protocol collects fees</b>
    <ul><li>Farmers are charged 10% of their yield farming rewards.</li>
    <li>Lenders are charged 10% of their borrowing profit.</li>
    <li>Every time a position is liquidated, 5% of the position’s value is paid as a fee.</li></ul>  <br>
    Detailed Tokenomics - <a target="_blank" href="https://docs.pembrock.finance/tokenomics">https://docs.pembrock.finance/tokenomics </a>
    `,
    team: [
      {
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Lead Rocker at PembRock.",
      },
      {
        name: "Vitalii Dmytrenko",
        bio: "CTO with more than 2 decades of experience in software and hardware development, reverse engineering, and cybersecurity research. Cypherpunk."
      },
      {
        name: "Ivan Skrypachov",
        bio: "Project Driver with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru."
      },
      {
        name:"Rosinha Romario",
        bio:"Public Relations Specialist backed by versatile project experiences in Marketing and Communications for over 4 years. Bitcoin hodler."},
      {
        name: "Oleksandr Molotsylo",
        bio: "Lead Web Developer with over 10 years of experience developing in different programming languages. Blockchain fan for 4 years. Mentor, JS, and ReactJS teacher."
      },
      {
        name:"Vladyslav Kindra",
        bio:"Interface Creator driven by more than 6 years of experience in Product Design, and focusing on blockchain projects for the last 3 years. User-friendly interface ninja."
      },
      {
        name:"Oleksii Kuznietsov",
        bio:"Blockchain Engineer with 5 years of development experience. Blockchain addicted and Rust enthusiast. Founder of his university's Rust club."
      },
      {
        name:"Volodymyr Udovychenko",
        bio:"Web Developer with development expertise of 2 years in blockchain and performance marketing industries. JS, React, and Node.js wizard."
      }
 
    ],
    roadmap:{
      imageUrl: 'https://res.cloudinary.com/metayield/image/upload/v1652215642/Pembrock/Roadmap_rw4qd8.png',
      linkUrl: "https://docs.pembrock.finance/roadmap"
    },
    faq: [{title: 'What is PembRock?', content: 'PembRock is the first leveraged yield farming protocol built on the NEAR blockchain. Users can provide liquidity, farm with leverage, stake, and take governance decisions to secure the future of the platform, all on a fast, secure, cheap, and user-friendly blockchain.'}, 
    {title: 'What is yield farming?', content: `Yield farming is the act of lending your cryptocurrency to the most profitable platforms in order to earn the highest DeFi yields. Rather than the traditional order book model that matches real buyers and sellers of assets, DeFi applications employ the Automated Market Maker (AMM) model. AMMs allow trades to be executed immediately through the use of algorithms and pools of tokens. This is where users come in, helping to provide liquidity to pools in exchange for a percentage return on investment. <br><br>
    The main difference between staking and yield farming is that the latter is defined by its mobility. Yield farming often involves the quick movement of crypto funds — either manually or through automated tools — to chase the highest rate of return, calculated by APY; however this is not a strict rule, and yield farmers who find a great protocol can reap fantastic rewards over a long period of time.`},
  {title:"What is leveraged yield farming?", content:`Leveraged yield farming is simply normal yield farming but supercharged! It is the practice of borrowing external liquidity to farm a larger amount of crypto, thus gaining the ability to get increased returns. <br><br>
  While many DeFi lending platforms still require users to overcollateralize (put up funds of a greater value than those being borrowed), our leveraged yield farming platform undercollateralizes, meaning: <br><br>
  <ul>
    <li>A lower barrier to entry</li>
    <li>Fewer funds laying dormant</li>
    <li>Greater rewards for users.</li></ul>`}, {title:"Why did we build PembRock?", content: `Yield farming is one of the key drivers of the DeFi ecosystem, with the liquidity provided by users helping protocols to innovate, building new features for the benefit of the entire community. Despite this symbiotic relationship, the DeFi sector is still in its experimental stages, meaning that current yield farming projects can be temperamental, hard-to-use, and occasionally, less than secure. It is only through trusted projects that decentralized finance can move into a more mature phase.<br><br>
  We wanted to play our part in this exciting sector, and what better opportunity could we get than building on NEAR, a blockchain which has made huge strides over the past year but is yet to house a leveraged yield farming platform.<br><br>
  Like our developers, NEAR Protocol wishes to accelerate the dream of DeFi as an integral part of Web 3.0 that is accessible to all. NEAR:<br><br>
  <ul>
  <li>AIs a fast, inexpensive and carbon-neutral blockchain.</li>
  <li>Incorporates a user-friendly wallet.</li>
  <li>Operates with the Delegated Proof of Stake (DPoS) consensus mechanism, encouraging greater community participation.</li>
  <li>Has a large dedicated community.</li></ul><br><br>
  One of the most exciting things about NEAR is its promotion of Guilds — teams of developers from the community who are creating innovative apps that are accessible to all users, which is one of the important aspects of continued DeFi growth. PembRock Finance is supported by both INC4 and Minerall Guilds in its development.<br><br>
  The NEAR ecosystem is expanding, with volume on DEXs such as Ref.finance increasing. With the demand for NEAR’s native products and a desire by crypto users to get maximum returns, now is a great time for PembRock Finance’s release. The NEAR Team seems to agree, which is why they provided us with a grant to assist us with the development of PembRock.`},
  {title: "How can I participate in PembRock Finance?", content:`With PembRock’s leveraged yield farming platform, you can participate as a:<br><br>
  <ul>
  <li>Lender - providing funds to individuals who wish to farm with leverage for high returns.</li>
  <li>Farmer - opening a position with leverage of up to 3x for greater rewards.</li>
  <li>Staker - locking up your $PEM token for high returns.</li>
  <li>Governance staker - staking $PEM for xPEM, used to vote on the future direction of the platform!</li></ul>`},
  {title: "Where does my yield come from?", content:`It’s the rule in DeFi that you should always try to understand where your yield comes from.<br><br>
With PembRock, you can earn great yields from both lending and leveraged yield farming.<br><br>
<ul>
<li>As a lender, you will earn from interest paid by borrowers who open leveraged yield farming positions.</li>
<li>As a yield farmer, you will earn money from fees paid by the pool you invest in.</li>
<li>Later we will introduce governance staking, giving users another way to earn with PembRock!</li></ul>`},
  {title: "What is the $PEM token and why should I hold it?", content:`$PEM is PembRock Finance’s native token, used:<br><br>
  <ul>
  <li>To stake within the PembRock Finance ecosystem — with rewards paid out in PEM.</li>
  <li>As a part of our reward mechanism for interacting with our protocol.</li>
  <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
  <li>For DAO participation — users can stake PEM to receive xPEM, our governance token.</li></ul> <br>
  The 10% of the borrowing and farming interest profits that we collect from people, as well as the 5% fee that is charged when a position is liquidated, is distributed among the PEM holders who have staked in our protocol!<br><br>
  As leveraged yield farming allows you to profit regardless of market trends, the $PEM token has utility in both bull and bear markets.`},
  {title: "Where can I buy the $PEM token?", content:`First of all, stay tuned for our upcoming IDO on Meta Yield, Boca Chica, SmartPad, and Skyward. Moreover, will have the opportunity to buy the $PEM token on Ref Finance, which will be progressively rolled out to further CEXes and DEXes afterward.`},
  {title: "Can I be liquidated as a lender?", content:`No — only those that farm with leverage can be liquidated, if one or both of the coins in the pair lose a certain amount of value relative to the funds leveraged in the position.`},
  {title: "What’s the fee for using PembRock Finance?", content:`<ul><li>Farmers are charged 10% of their yield farming rewards as a fee, which goes to the protocol.</li>
  <li>Lenders are charged 10% of their borrowing interest profit as a fee, which goes to the protocol.</li>
  <li>A 5% fee is charged every time a position is liquidated, which goes to the protocol.</li></ul>`},  
  {title: "Have your contracts been audited?", content:`Auditing is part of Milestone 5 in our roadmap. Before deploying to the mainnet, you can be guaranteed that PembRock will be thoroughly tested by our expert team and externally audited. We are already conducting negotiations with several companies about this audit.`},  
  {title: "What's the fundamental difference between 2x and 3x leverage?", content:`Leveraged yield farming allows users to receive undercollateralized loans, multiplying the investment they would otherwise be able to lock in. This has the benefit of allowing farmers to get more yield, while also benefiting the DeFi protocol through greater liquidity and fees from profits.<br><br>
  <ul>
  <li>Leverage of 2x means that your initial investment will be matched by the platform > if you have $100 worth of $PEM, you can now farm with $200 worth.
  <li>Leverage of 3x means that your initial investment will be tripled by the platform > if you have $100 worth of $PEM, you can now farm with $300 worth.</li></ul>`},  
  {title: "Why did you build on NEAR Protocol?", content:`We built on NEAR protocol for quite a few reasons:<br><br>
  <ul>
  <li>NEAR’s wallet and Dapps put a focus on user-friendliness. We love this ethos as it will help bring DeFi into the mainstream.</li>
  <li>The <a target="_blank" href="https://near.org/blog/near-climate-neutral-product/#:~:text=NEAR%20Protocol%20has%20been%20awarded,2)%20and%20other%20greenhouse%20gases.">blockchain is carbon neutral</a>, already putting it a step ahead of its competitors.</li>
  <li>It is secure, fast, and cheap.</li>
  <li>The NEAR community is great! Its members are incredibly passionate and really believe in the future of the blockchain.</li>
  <li>NEAR guilds provide great support to developers looking to build innovative Dapps within the ecosystem.</li>
  <li>We will be the first leveraged yield farming protocol on the blockchain, having received a $75,000 grant from the NEAR Foundation!</li></ul>`},
 {title:"How do your reinvest mechanics work?", content: `Reinvesting allows you to receive compound interest; that is, profit on top of profit that has already been generated. Reinvesting is done automatically.<br><br>
 The infographic below shows how reinvesting works with PembRock:<br><br>
 <img alt src="https://res.cloudinary.com/metayield/image/upload/v1652215639/Pembrock/How_It_Works_omx6dw.png">
 `},
 {title:"Which wallets do PembRock Finance support?", content:`At the moment, PembRock Finance supports the NEAR wallet, but other wallets will be integrated once the protocol is up and running.`},
 {title:"Who is the team behind PembRock Finance?", content:`PembRock Finance was created by a team of blockchain experts, led by Igor Stadnyk, CEO of INC4. Everything about our team is transparent, as we understand the importance of trust when engaging with new DeFi projects. You can <a target="_blank" href="https://pembrock.finance/">read about each of our developers here.</a>` }
],
about:`PembRock couples lenders and yield farmers who are rewarded for providing liquidity within the NEAR ecosystem. On launch, we will support two base assets — NEAR and USDT — and integrate our leveraged farming with Ref Finance.‌ <br><br>
<br><br>The lender deposits their NEAR and earns interest from the borrowing fees paid by yield farmers.
<br><br><b>Leveraged Farmer</b>
<br><br>The yield farmer opens a leveraged yield farming position on a trading pair, borrowing NEAR from the vault and joining the farming pool with leverage. The yield farmer gets higher returns due to the larger stake, but pays a 10% premium for the privilege of using borrowed funds.
<br><br><b>Liquidator bot</b>
<br><br>The liquidator bot monitors all yield farming positions, liquidating those that become too risky. If a leveraged yield farming position does get liquidated, 5% of the position’s fee goes to the protocol, and is then distributed among those who have staked the PEM token.
<br><br> 
<img alt src="https://res.cloudinary.com/metayield/image/upload/v1652215639/Pembrock/How_It_Works_omx6dw.png">
`,
documents:[

  {title:"Tokenomics",
  url:"https://docs.pembrock.finance/tokenomics "},
  {title:"Roadmap", 
  url:"https://docs.pembrock.finance/roadmap"},
  {title:"Team", 
  url:"https://pembrock.finance/team"},
],
kickstarter: kickstarter_mock // ToDO: remove when project data from canister is implemented
  }  
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof data>;

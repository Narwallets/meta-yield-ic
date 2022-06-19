export const data = [
  {
    id: 0, // key para proyectos en katherine
    open: true, // ToDo get data from canister
    active: true, // ToDo get data from canister
    slug: "webplayed", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "WebPlayed Finance",
    motto: "The farming is coming.",
    projectUrl: "https://webplayedsolutions.com/",
    twitter: "https://twitter.com/testdata",
    imageUrl:"/webplayed/cover.png",
    avatarUrl:
      "/webplayed/logo.png",
    description:
      "We are a startup that offers high-quality solutions to companies and individuals with complete guidance throughout defi development lifecycle.",
    verified: true,
    tags: ["Finance", "Infrastructure", "Security", "Vault"],
    campaignHtml: `<h1 class="title" itemprop="name">Web3 Solutions</h1>
    <p class="text" itemprop="text">We can build your ideas from scratch, improve current applications or improve your business through digital transformation.</p>
    <ul class="list">
    <li><span>Versatile team of Engineers, Business Analyst and UX Designers.</span></li>
    <li><span>We deliver your source code after project finishes.</span></li>
    <li><span>We provide post-lauch support until the end of life cycle.</span></li>
    </ul>
    <h1 class="title" itemprop="name">Services</h1>
    <p class="text" itemprop="text">We provide a wide range of services, from product solutions ready to implement to fully customizable web apps or institutional sites.</p>
    <p class="text" itemprop="text"></p>
    <h3>WEB3 for business</h3>
    <p>One web suite to manage your business and clients. Run social media, get sales forecast and automate tasks with one click.</p>
    `,
    team: [
      {
        name: "Mickel Jordisky",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Lead Rocker at PembRock.",
      },
      {
        name: "Ivancio Chaverocoin",
        bio: "CTO with more than 2 decades of experience in software and hardware development, reverse engineering, and cybersecurity research. Cypherpunk."
      },
      {
        name: "Manzanares Lyonel",
        bio: "Project Driver with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru."
      },
      {
        name:"Rosinha Romario",
        bio:"Public Relations Specialist backed by versatile project experiences in Marketing and Communications for over 4 years. NEAR hodler."},
      {
        name: "Chemas Jhon",
        bio: "Lead Web Developer with over 10 years of experience developing in different programming languages. Blockchain fan for 4 years. Mentor, JS, and ReactJS teacher."
      }
 
    ],
    roadmap:{
      imageUrl: '/webplayed/roadmap.png',
      linkUrl: "https://google.com"
    },
    faq: [{title: 'What is WebPlayed?', content: 'WebPlayed is the first leveraged yield farming protocol built on the NEAR blockchain. Users can provide liquidity, farm with leverage, stake, and take governance decisions to secure the future of the platform, all on a fast, secure, cheap, and user-friendly blockchain.'}, 
    {title: 'What is yield farming?', content: `Yield farming is the act of lending your cryptocurrency to the most profitable platforms in order to earn the highest DeFi yields. Rather than the traditional order book model that matches real buyers and sellers of assets, DeFi applications employ the Automated Market Maker (AMM) model. AMMs allow trades to be executed immediately through the use of algorithms and pools of tokens. This is where users come in, helping to provide liquidity to pools in exchange for a percentage return on investment. <br><br>
    The main difference between staking and yield farming is that the latter is defined by its mobility. Yield farming often involves the quick movement of crypto funds — either manually or through automated tools — to chase the highest rate of return, calculated by APY; however this is not a strict rule, and yield farmers who find a great protocol can reap fantastic rewards over a long period of time.`},
  {title:"What is leveraged yield farming?", content:`Leveraged yield farming is simply normal yield farming but supercharged! It is the practice of borrowing external liquidity to farm a larger amount of crypto, thus gaining the ability to get increased returns. <br><br>
  While many DeFi lending platforms still require users to overcollateralize (put up funds of a greater value than those being borrowed), our leveraged yield farming platform undercollateralizes, meaning: <br><br>
  <ul>
    <li>A lower barrier to entry</li>
    <li>Fewer funds laying dormant</li>
    <li>Greater rewards for users.</li></ul>`}, {title:"Why did we build WebPlayed?", content: `Yield farming is one of the key drivers of the DeFi ecosystem, with the liquidity provided by users helping protocols to innovate, building new features for the benefit of the entire community. Despite this symbiotic relationship, the DeFi sector is still in its experimental stages, meaning that current yield farming projects can be temperamental, hard-to-use, and occasionally, less than secure. It is only through trusted projects that decentralized finance can move into a more mature phase.<br><br>
  We wanted to play our part in this exciting sector, and what better opportunity could we get than building on NEAR, a blockchain which has made huge strides over the past year but is yet to house a leveraged yield farming platform.<br><br>
  Like our developers, NEAR Protocol wishes to accelerate the dream of DeFi as an integral part of Web 3.0 that is accessible to all. NEAR:<br><br>
  <ul>
  <li>AIs a fast, inexpensive and carbon-neutral blockchain.</li>
  <li>Incorporates a user-friendly wallet.</li>
  <li>Operates with the Delegated Proof of Stake (DPoS) consensus mechanism, encouraging greater community participation.</li>
  <li>Has a large dedicated community.</li></ul><br><br>
  One of the most exciting things about NEAR is its promotion of Guilds — teams of developers from the community who are creating innovative apps that are accessible to all users, which is one of the important aspects of continued DeFi growth. WebPlayed Finance is supported by both INC4 and Minerall Guilds in its development.<br><br>
  The NEAR ecosystem is expanding, with volume on DEXs such as Ref.finance increasing. With the demand for NEAR’s native products and a desire by crypto users to get maximum returns, now is a great time for WebPlayed Finance’s release. The NEAR Team seems to agree, which is why they provided us with a grant to assist us with the development of WebPlayed.`},
  {title: "How can I participate in WebPlayed Finance?", content:`With webplayed's leveraged yield farming platform, you can participate as a:<br><br>
  <ul>
  <li>Lender - providing funds to individuals who wish to farm with leverage for high returns.</li>
  <li>Farmer - opening a position with leverage of up to 3x for greater rewards.</li>
  <li>Staker - locking up your $WEB token for high returns.</li>
  <li>Governance staker - staking $WEB for xWEB, used to vote on the future direction of the platform!</li></ul>`},
  {title: "Where does my yield come from?", content:`It’s the rule in DeFi that you should always try to understand where your yield comes from.<br><br>
With WebPlayed, you can earn great yields from both lending and leveraged yield farming.<br><br>
<ul>
<li>As a lender, you will earn from interest paid by borrowers who open leveraged yield farming positions.</li>
<li>As a yield farmer, you will earn money from fees paid by the pool you invest in.</li>
<li>Later we will introduce governance staking, giving users another way to earn with WebPlayed!</li></ul>`},
  {title: "What is the $PEM token and why should I hold it?", content:`$WEB is WebPlayed Finance’s native token, used:<br><br>
  <ul>
  <li>To stake within the WebPlayed Finance ecosystem — with rewards paid out in WEB.</li>
  <li>As a part of our reward mechanism for interacting with our protocol.</li>
  <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
  <li>For DAO participation — users can stake WEB to receive xWEB, our governance token.</li></ul> <br>
  The 10% of the borrowing and farming interest profits that we collect from people, as well as the 5% fee that is charged when a position is liquidated, is distributed among the PEM holders who have staked in our protocol!<br><br>
  As leveraged yield farming allows you to profit regardless of market trends, the $PEM token has utility in both bull and bear markets.`},
 ],
about:`WebPlayed couples lenders and yield farmers who are rewarded for providing liquidity within the NEAR ecosystem. On launch, we will support two base assets — NEAR and USDT — and integrate our leveraged farming with Ref Finance.‌ <br><br>
<br><br>The lender deposits their NEAR and earns interest from the borrowing fees paid by yield farmers.
<br><br><b>Leveraged Farmer</b>
<br><br>The yield farmer opens a leveraged yield farming position on a trading pair, borrowing NEAR from the vault and joining the farming pool with leverage. The yield farmer gets higher returns due to the larger stake, but pays a 10% premium for the privilege of using borrowed funds.
<br><br><b>Liquidator bot</b>
<br><br>The liquidator bot monitors all yield farming positions, liquidating those that become too risky. If a leveraged yield farming position does get liquidated, 5% of the position’s fee goes to the protocol, and is then distributed among those who have staked the PEM token.
<br><br> 
<img alt src="https://res.cloudinary.com/metayield/image/upload/v1652215639/WebPlayed/How_It_Works_omx6dw.png">
`,
documents:[

  {title:"Tokenomics",
  url:"https://webplayedsolutions.com/"},
  {title:"Roadmap", 
  url:"/roadmap"}
],
kickstarter: {} // ToDO: remove when project data from canister is implemented
  }  
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof data>;
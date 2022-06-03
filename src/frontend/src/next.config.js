// import fs from "fs"
// let canisterIds;
// try {
//   canisterIds = JSON.parse(
//     fs
//       .readFileSync(
//         isDev ? ".dfx/local/canister_ids.json" : "./canister_ids.json",
//       )
//       .toString(),
//   )
// } catch (e) {
//     console.error("\n⚠️  Before starting the dev server run: dfx deploy\n\n")
// }

// // Generate canister ids, required by the generated canister code in .dfx/local/canisters/*
// // This strange way of JSON.stringifying the value is required by vite
// const canisterDefinitions = Object.entries(canisterIds).reduce(
//   (acc, [key, val]) => ({
//     ...acc,
//     [`process.env.${key.toUpperCase()}_CANISTER_ID`]: isDev
//       ? JSON.stringify(val.local)
//       : JSON.stringify(val.ic),
//   }),
//   {},
// )

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: [
      "3621490034-files.gitbook.io",
      "twitter.com",
      "pbs.twimg.com",
      "pembrock.finance",
      "res.cloudinary.com"
    ],
  },
  env: {
    // ...canisterDefinitions,
    MINIMUM_AMOUNT_DEPOSIT: 1,
    // NEXT_PUBLIC_NODE_ENV: 
    //   isDev ? "development" : "production",
    NEXT_PUBLIC_DFX_NETWORK: "local",
     META_YIELD_CANISTER_ID: "renrk-eyaaa-aaaaa-aaada-cai",
    STICP_CANISTER_ID: "r7inp-6aaaa-aaaaa-aaabq-cai",
    PTOKEN_CANISTER_ID: "rkp4c-7iaaa-aaaaa-aaaca-cai",
    LEDGER_CANISTER_ID: "rrkah-fqaaa-aaaaa-aaaaq-cai",
    INTERNET_IDENTITY_CANISTER_ID: "rno2w-sqaaa-aaaaa-aaacq-cai"
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

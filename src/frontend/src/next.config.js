// import fs from "fs"

const isDev = process.env["DFX_NETWORK"] !== "ic"
console.log('IS DEV?', isDev)
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
    NEXT_PUBLIC_DFX_NETWORK: "ic"
  },
  pageExtensions: ["page.tsx", "ts", "tsx"],
};

module.exports = nextConfig;

import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic';
const Home =  dynamic(() => import("./Home"), {
  ssr: false,
});
const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Meta Yield - Allow any project to bootstrap liquidity through staking
          on Meta Pool.
        </title>
      
      </Head>
      <Home />
    </>
  );
};

export default App;

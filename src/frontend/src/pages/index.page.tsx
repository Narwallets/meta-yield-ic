import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic';
const Home =  dynamic(() => import("./Home"), {
  ssr: false,
});
const App: NextPage = () => {
  return (
    <>
    
      <Home />
    </>
  );
};

export default App;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import Footer from "../components/Footer";
import theme from "../theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import dynamic from "next/dynamic";
import React from "react";
import NextHead from "next/head";
const Header = dynamic(() => import("../components/Header"), { ssr: false });

const isProduction = process.env.NODE_ENV === "production";
function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NextHead>
          <meta charSet="UTF-8"/>
          <title>
            {" "}
            Meta Yield - Allow any project to bootstrap liquidity through
            staking on Meta Pool.
          </title>
        </NextHead>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

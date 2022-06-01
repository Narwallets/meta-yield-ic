import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "../theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import Script from "next/script";
import NProgress from "nprogress";

import "../styles/nprogress.css";

const isProduction = process.env.NODE_ENV === "production";
function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

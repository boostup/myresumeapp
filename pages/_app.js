import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { SessionProvider } from "next-auth/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppThemeProvider from "../components/App/AppThemeProvider";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AppThemeProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </AppThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

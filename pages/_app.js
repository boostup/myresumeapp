import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppThemeProvider from "../components/App/AppThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}

export default MyApp;

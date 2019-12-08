import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { CssBaseline, Paper } from "@material-ui/core";
import "isomorphic-fetch";

import Header from "../components/header";
import ThemeProvider from "../components/theme-provider";

class App extends NextApp {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Web Project Template</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default App;

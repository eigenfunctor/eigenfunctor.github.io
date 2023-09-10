import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import "isomorphic-fetch";

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
          <title>eigenfunctor.io</title>
          <link rel="icon" href="/eigenfunctor_logo.ico" />
          <style>
            {`
      html,body
      {
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden; 

      }
            `}
          </style>
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default App;

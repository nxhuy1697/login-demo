import * as React from "react";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from 'react-redux';
import "../assets/styles/css/index.css";
// import { store } from '../justan/store';

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      {/* <ReduxProvider store={store}> */}
        <Component {...pageProps} />
      {/* </ReduxProvider> */}
    </>
  );
}

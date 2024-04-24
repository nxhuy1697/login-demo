
import * as React from "react";
import type { AppProps } from "next/app";

import "../assets/styles/css/index.css";

export default function App({
  Component,
  pageProps: {  ...pageProps },
}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

import React from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { createGlobalStyle } from "styled-components";
import "@open-universities-australia/design-tokens/build/tokens.css";
import { StyleProvider } from "@open-universities-australia/web-components";

const GlobalStyle = createGlobalStyle`
    .no-js {
        font-family: "Lato", "Trebuchet MS";
    }
`;

const CustomScripts = () => {
  return (
    <>
      {/* If JavaScript is not available, you can use .no-js class to apply web font styles. If JS is available, this class will be removed. */}
      <Script
        id="noJSClassRemoval"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `document.getElementsByTagName("body")[0].classList.remove("no-js");`,
        }}
      />
    </>
  );
};

const HomePageApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <StyleProvider />
      <CustomScripts />
      <Component {...pageProps} />
    </>
  );
};

export default HomePageApp;

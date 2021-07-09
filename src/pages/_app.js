import '../styles/globals.css';
import '../styles/globals.module.scss';
import React from 'react';
import { ContextProvider } from '../context/ContextProvider';
import HtmlLayout from '../layouts/html';
import { UIInitVals } from '../context/UIStore';
import { ScreenInitVals } from '../context/ScreenState';
import { MainInitVals } from '../context/MainStore';

function MyApp({ Component, pageProps }) {
  const { context } = pageProps;

  const Layout = HtmlLayout;
  return (
    <ContextProvider forcedProps={{ ...UIInitVals, ...ScreenInitVals, ...MainInitVals, ...context }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;

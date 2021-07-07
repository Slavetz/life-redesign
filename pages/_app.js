import '../src/styles/globals.css'
import '../src/styles/globals.module.scss'
import { GlobalContextProvider } from "../src/context/GlobalContext";
import HtmlLayout from "../src/layouts/html";
import React, {useEffect} from "react";

function MyApp({Component, pageProps}) {
    const Layout = HtmlLayout;
    return (
        <GlobalContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContextProvider>
    );
}

export default MyApp

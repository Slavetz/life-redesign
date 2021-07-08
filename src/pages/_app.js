import '../styles/globals.css'
import '../styles/globals.module.scss'
import { GlobalContextProvider } from "../context/GlobalContext";
import HtmlLayout from "../layouts/html";
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

import '../src/styles/globals.css'
import '../src/styles/globals.module.scss'
import {GlobalProvider} from "../src/context/globalContext";
import React from "react";

function MyApp({Component, pageProps}) {
    return (<GlobalProvider>
        <Component {...pageProps} />
    </GlobalProvider>)
}

export default MyApp

import Document, { Html, Head, Main, NextScript } from 'next/document'
import {HTMLHead, HTMLNoscript} from "layouts/html/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <HTMLHead />
                </Head>
                <body>
                    <HTMLNoscript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
// eslint-disable-next-line import/no-webpack-loader-syntax
import adManager from '!raw-loader!static/js/adManager.min';
// eslint-disable-next-line import/no-webpack-loader-syntax
import cacheFontsHandler from '!raw-loader!static/js/cacheFontsHandler.min';

function HTMLHead() {
    return (
        <>
            <link rel="preconnect" href="//googleoptimize.com" crossOrigin="true"/>
            <link rel="preconnect" href="//googletagmanager.com" crossOrigin="true"/>
            <link rel="preconnect" href="//googlesyndication.com" crossOrigin="true"/>
            <link rel="preconnect" href="//criteo.net" crossOrigin="true"/>
            <link rel="preconnect" href="//criteo.com" crossOrigin="true"/>
            <link rel="preconnect" href="//yandex.ru" crossOrigin="true"/>
            <link rel="preconnect" href="//smi2.ru" crossOrigin="true"/>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                  window._startDate = 1*new Date();

                  document.addEventListener("DOMContentLoaded", (event) => {
                    console.log('### DOMContentLoaded', 1*new Date() - window._startDate)
                  });

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({'gtm.start': window._startDate, event:'gtm.js'})
                `,
                }}
            />

            <script async src="//www.googleoptimize.com/optimize.js?id=OPT-NF85DVL"/>
            <script async src="//www.googletagmanager.com/gtm.js?id=GTM-K84FNRP"/>
            <script async dangerouslySetInnerHTML={{__html: cacheFontsHandler}}/>

            <script defer src="//securepubads.g.doubleclick.net/tag/js/gpt.js"/>
            {/*<script async src="https://static.criteo.net/js/ld/publishertag.prebid.js"></script>*/}
            {/*<script async src="https://life.ru/static/js/prebid.3.15.0.min.js"></script>*/}
            <script dangerouslySetInnerHTML={{__html: adManager}}/>

            <meta name="theme-color" content="#fa0a0a"/>
            <meta name="yandex-tableau-widget" content="logo=https://life.ru/logo-white.png, color=#fa0a0a"/>
            <meta name="robots" content="noyaca"/>
        </>
    )
}

function HTMLNoscript() {
    return (
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K84FNRP" height="0" width="0"
                    style={{display:'none', visibility:'hidden'}} />
            {/* eslint-disable @next/next/no-img-element */}
            <img src="https://mc.yandex.ru/watch/62804821" style={{position: 'absolute', left: '-9999px'}} alt="" />
            <img src="http://www.tns-counter.ru/V13a****life_ru/ru/UTF-8/tmsec=life_total/" width="1" height="1"
                 alt="" />
        </noscript>
    )
}

export {HTMLHead, HTMLNoscript}
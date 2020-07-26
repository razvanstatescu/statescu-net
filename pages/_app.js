import '../styles/main.scss';
import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon.png"/>

                <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js"
                        data-cbid="4c2aa19e-1d5e-4dcb-bafd-ebc6d2713038" type="text/javascript" async></script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145375185-5"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                 window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-145375185-5');
              `,
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

import '../styles/main.scss';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import { Footer } from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />

        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="4c2aa19e-1d5e-4dcb-bafd-ebc6d2713038"
          type="text/javascript"
          async
        ></script>

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
      <DefaultSeo
        title="Răzvan Stătescu | Freelance Web Developer & Content Creator"
        description="Freelance Full-Stack Developer with experience building websites and scalable web applications. IT content creator on YouTube and Instagram. IT Blogger."
        openGraph={{
          url: "https://statescu.net",
          title: "Răzvan Stătescu | Freelance Web Developer & Content Creator",
          description:
            "Freelance Full-Stack Developer with experience building websites and scalable web applications. IT content creator on YouTube and Instagram. IT Blogger.",
          images: [
            {
              url: "https://statescu.net/fb-banner.jpg",
              width: 1200,
              height: 630,
            },
          ],
          site_name: "Statescu.net",
        }}
        twitter={{
          handle: "@StatescuRazvan",
        }}
      />
      <div className="p-4 md:p-0">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

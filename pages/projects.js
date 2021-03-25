import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';

import { Header } from '../components/Header';
import HomeStyle from '../styles/home.module.scss';

export default () => {
  return (
    <div className="container mx-auto mt-8 md:mt-16 max-w-4xl mb-16">
      <NextSeo
        title="Răzvan Stătescu | Recent Projects"
        openGraph={{
          url: "https://statescu.net/projects",
          title: "Răzvan Stătescu | Recent Projects",
        }}
      />

      <Header />

      <h2 className="font-raleway font-black text-3xl uppercase mt-16 mb-8">🖥 recent projects</h2>
      <div className={HomeStyle.projects}>
        <section>
          <div className={HomeStyle.project}>
            <div className={`w-1/3 ${HomeStyle.projectImg}`}>
              <a href="/projects/brunch.jpg" target="_blank">
                <img src="/projects/brunch.jpg" alt="brunch" />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h3 className="font-bold text-xl">
                <a href="https://usebrunch.com" target="_blank">
                  Brunch. <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3 w-auto inline-block" />
                </a>
              </h3>
              <p>
                Brunch is a feedback tool for websites and web apps that should bring developers, designers and clients
                in one place. It's a project I started together with a partner and I'm in charge of the development part
                of the platform. It's a project that puts together a lot of concepts and technologies so it's really
                intriguing for me to work on it.
              </p>
            </div>
          </div>
          <p className="text-xs font-bold">
            Tech keywords: Web Scraping, Docker, Angular, NodeJS, Proxy, Iframe, MongoDB
          </p>
        </section>
        <section>
          <div className={HomeStyle.project}>
            <div className="w-2/3 pr-4">
              <h3 className="font-bold text-xl">
                <a href="https://in-justitie.ro" target="_blank">
                  in-justitie.ro <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3 w-auto inline-block" />
                </a>
              </h3>
              <p>
                in-justitie.ro is a platform that facilitates access to public legal information about Romanian
                businesses. I started this because I wanted to help the digitization process of the public institutions
                in my country. While I was building this I improved my front-end skills, learned more about cache
                systems and Redis, learned MongoDB and much more.
              </p>
            </div>
            <div className={`w-1/3 ${HomeStyle.projectImg}`}>
              <a href="/projects/in-justitie.png" target="_blank">
                <img src="/projects/in-justitie.png" alt="in-justitie.ro" />
              </a>
            </div>
          </div>
          <p className="text-xs font-bold">
            Tech keywords: Cache, Docker, Angular, NodeJS, Redis, MongoDB, Email Subscription System
          </p>
        </section>
        <section>
          <div className={HomeStyle.project}>
            <div className={`w-1/3 ${HomeStyle.projectImg}`}>
              <a href="/projects/clipsync.jpg" target="_blank">
                <img src="/projects/clipsync.jpg" alt="clipSync" />
              </a>
            </div>
            <div className="w-2/3 pl-4">
              <h3 className="font-bold text-xl">
                <a href="https://clipsync.app" target="_blank">
                  clipSync <FontAwesomeIcon icon={faExternalLinkAlt} className="h-3 w-auto inline-block" />
                </a>
              </h3>
              <p>
                clipSync allows you to share your Android device's clipboard with your computer. You can copy a text
                from your phone and paste it to your computer, like Apple users can do. Your data IS NOT sent over the
                internet and is encrypted in order to protect your privacy and information.
              </p>
            </div>
          </div>
          <p className="text-xs font-bold">
            Tech keywords: Android, Windows, Kotlin, Electron, Encryption, Network, Web Sockets
          </p>
        </section>
      </div>
    </div>
  );
};

import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Header } from '../components/Header';
import HomeStyle from '../styles/home.module.scss';

export default () => {
  return (
    <div className="container mx-auto mt-8 md:mt-24 max-w-4xl mb-16">
      <div>
        <Header />
        <div className="mt-24 flex items-center md:space-x-12 flex-col md:flex-row">
          <img src="/homepage/web_dev.svg" className="w-1/2 md:w-1/3 h-auto mb-6 md:mb-0" />
          <div className="">
            <h1 className="font-raleway font-bold text-xl mb-2">Web Developer</h1>
            <p>
              I am a passionate Freelance Full-Stack developer with experience building websites and web applications. I
              specialize in <span className="underline">JavaScript</span> and{" "}
              <span className="underline">Typescript</span>, with professional experience working with{" "}
              <span className="underline">Angular 2+</span> and <span className="underline">NodeJS</span>. I also have a
              strong knowledge of Vue.Js, Express, TailwindCSS, HapiJS, Docker, and a lot of other technologies and
              APIs.
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center md:space-x-12 flex-col md:flex-row">
          <div className="">
            <h1 className="font-raleway font-bold text-xl mb-2">Content Creator</h1>
            <p>
              Starting from May 2020 I'm also creating Web Development related content on YouTube and Instagram. In
              December 2020 I've also started{" "}
              <a href="https://blog.statescu.net" target="_blank" className="underline">
                blogging
              </a>
              . I learned most of the things I know from the internet so this is my way of giving back to the community.
            </p>
          </div>
          <img
            src="/homepage/content_creator.svg"
            className="w-1/2 md:w-1/3 h-auto mb-6 md:mb-0 order-first md:order-last"
          />
        </div>

        <div className="mt-16 flex items-center md:space-x-12 flex-col md:flex-row">
          <img src="/homepage/maker.svg" className="w-1/2 md:w-1/3 h-auto mb-6 md:mb-0" />
          <div className="">
            <h1 className="font-raleway font-bold text-xl mb-2">Maker</h1>
            <p>
              In mid-2020 I co-founded{" "}
              <a href="https://usebrunch.com" className="underline">
                Brunch
              </a>
              , a tool that makes it easy to get feedback on a website you just created. No need for long calls to
              explain where that text should be different or where is that extra pixel you didn’t notice in design.
              People can use Brunch to show you exactly what they want and where they want it. It’s a sort of pointing a
              finger at it, but socially acceptable.
              <br />
              <a href="https://youtu.be/Qlu8kJEH7Jk" className="underline">
                Check this video
              </a>{" "}
              for more details on how the app works..
            </p>
          </div>
        </div>

        <section className="flex justify-center mt-4">
          <div>
            <div className={`flex items-center mt-8 ${HomeStyle.icons}`}>
              <p className="mr-4">You can find me on</p>
              <a href="https://www.linkedin.com/in/razvanstatescu/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.youtube.com/thedevguy" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/devrazvan/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/razvanstatescu/" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/StatescuRazvan" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              {/*<a href="https://blog.statescu.net" target="_blank" className="mx-2">or Blog</a>*/}
            </div>
            <p className="mt-2">
              Or drop me an email to{" "}
              <a href="mailto:contact@statescu.net" className="underline">
                contact@statescu.net
              </a>
            </p>
          </div>
        </section>

        <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-6">🏢 What Clients Say</h2>
        <div className="mb-6">
          <p className="">
            <span className="italic font-bold text-4xl leading-none text-orange">" </span>
            Razvan is a very valuable asset to my project. He started to deliver very fast on new technologies and he’s
            always looking to learn more. He is the kind of person always focused to deliver. He is looking for
            solutions, making the necessary research and always finding a way to deliver no matter how challenging. You
            can clearly see that he likes what he does as he always shows a natural enthusiasm.
          </p>

          <p className="flex mt-4 justify-end items-center">
            <span className="italic font-bold text-sm">Dragos Rautu @</span>
            <a href="https://modex.tech" target="_blank">
              <img src="/clients/modex.png" alt="Modex" className="h-6 ml-2 w-auto" />
            </a>
          </p>
        </div>
        <div className="md:flex">
          <div className="flex-1 md:pr-4 mb-6 md:mb-0">
            <p className="">
              <span className="italic font-bold text-4xl leading-none text-orange">" </span>We worked with Razvan on a
              few projects already and we are happy with our collaboration. He was really responsive and prompt and
              found solutions even for more complex situations.
            </p>

            <p className="flex mt-4 justify-end items-center">
              <span className="italic font-bold text-sm">Andrei Stoica @</span>
              <a href="https://stoica.co" target="_blank">
                <img src="/clients/stoica.png" alt="stoica.co" className="h-4 ml-2 w-auto" />
              </a>
            </p>
          </div>
          <div className="flex-1 md:pl-4">
            <p className="">
              <span className="italic font-bold text-4xl leading-none text-orange">" </span>We have established a long
              term collaboration with Razvan and we have been very happy with his work. The communication was great and
              Razvan is an excellent programmer willing to go the extra mile to contribute to the success of any
              project.
            </p>

            <p className="flex mt-4 justify-end items-center">
              <span className="italic font-bold text-sm">Octavian Văcărescu @</span>
              <a href="https://octagram.ro" target="_blank">
                <img src="/clients/octagram.png" alt="octagram" className="h-6 ml-2 w-auto" />
              </a>
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a target="_blank" href="https://www.goodfirms.co/company/statescu-net">
            <img
              style={{ width: "150px" }}
              src="https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg"
              alt="GoodFirms Badge"
            />
          </a>
        </div>

        {/* <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-2">🎧 The dev chat podcast</h2>
                <iframe src="https://anchor.fm/thedevguy/embed" height="102px" width="100%" frameBorder="0"
                        scrolling="no"></iframe>
                <div className={`flex items-center mt-4 ${HomeStyle.icons}`}>
                    <p className="mr-4">Listen on</p>
                    <a href="https://podcasts.apple.com/ro/podcast/the-dev-chat/id1521862665" target="_blank">
                        <FontAwesomeIcon icon={faPodcast}/>
                    </a>
                    <a href="https://open.spotify.com/show/1O7Hn6QttL4OS08dQTahbu" target="_blank">
                        <FontAwesomeIcon icon={faSpotify}/>
                    </a>
                </div> */}

        <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-2">🎬 last youtube video</h2>
        <iframe
          src="https://www.youtube.com/embed?listType=playlist&list=UU_EkWlcYarTNGaf2nNAHNdg"
          width="100%"
          frameBorder="0"
          scrolling="no"
          className={HomeStyle.youtubeIframe}
        ></iframe>
      </div>
    </div>
  );
};

import HomeStyle from '../styles/home.module.scss';
import {NextSeo} from 'next-seo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faSpotify, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPodcast} from "@fortawesome/free-solid-svg-icons";
import {Header} from "../components/Header";

export default () => {
    return (
        <div className="container mx-auto mt-8 md:mt-24 max-w-2xl mb-16">
            <NextSeo
                title="Răzvan Stătescu | Freelance Web Developer & Content Creator"
                description="Freelance Full-Stack Developer with experience building websites and scalable web applications. IT content creator on YouTube and Instagram. Podcast host."
                openGraph={{
                    url: 'https://statescu.net',
                    title: 'Răzvan Stătescu | Freelance Web Developer & Content Creator',
                    description: 'Freelance Full-Stack Developer with experience building websites and scalable web applications. IT content creator on YouTube and Instagram. Podcast host.',
                    images: [
                        {
                            url: 'https://statescu.net/fb-banner.jpg',
                            width: 1200,
                            height: 630,
                        },
                    ],
                    site_name: 'Statescu.net',
                }}
            />

            <div>
                <Header/>
                <p className="text-justify mt-8">I am a Freelance Full-Stack developer with experience building websites
                    and
                    scalable web applications. I
                    specialize in JavaScript and PHP, with professional experience working with Angular and NodeJS.
                    I also have a strong knowledge of HapiJS and Codeigniter, Docker, Microservices and a lot of
                    other technologies and APIs.</p>
                <p className="text-justify mt-4">Starting from May 2020 I'm also creating programming related content on
                    YouTube and Instagram. At the beginning of July I started a Podcast called The Dev Chat where I
                    bring
                    people from the industry and chat over different IT related subjects. I learned most of the things I
                    know from the internet so this is my way of giving back to the community.</p>
                <div className={`flex items-center mt-8 ${HomeStyle.icons}`}>
                    <p className="mr-4">You can find me on</p>
                    <a href="https://www.linkedin.com/in/razvanstatescu/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href="https://www.youtube.com/thedevguy" target="_blank">
                        <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                    <a href="https://www.instagram.com/the.dev.guy/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://github.com/razvanstatescu/" target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    {/*<a href="https://blog.statescu.net" target="_blank" className="mx-2">or Blog</a>*/}
                </div>
                <p className="mt-2">Or drop me an email to <a href="mailto:contact@statescu.net"
                                                              className="underline">contact@statescu.net</a></p>

                <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-2">🎧 The dev chat podcast</h2>
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
                </div>

                <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-2">🎬 last youtube video</h2>
                <iframe src="https://www.youtube.com/embed?listType=playlist&list=UU_EkWlcYarTNGaf2nNAHNdg"
                        width="100%" frameBorder="0"
                        scrolling="no"
                        className={HomeStyle.youtubeIframe}></iframe>

                <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-6">🏢 What Clients Say</h2>
                <div className="md:flex">
                    <div className="flex-1 md:pr-4 mb-6 md:mb-0">
                        <a href="https://stoica.co" target="_blank"><img src="/clients/stoica.png" alt="stoica.co"
                                                                         className="h-6 w-auto mb-2"/></a>
                        <p className="text-justify">
                            We worked with Razvan on a few projects already and we are happy with our collaboration. He
                            was really responsive and prompt and found solutions even for more complex situations.
                        </p>
                    </div>
                    <div className="flex-1 md:pl-4">
                        <a href="https://octagram.ro" target="_blank"><img src="/clients/octagram.png" alt="octagram"
                                                                           className="h-6 w-auto mb-2"/></a>
                        <p className="text-justify">
                            We have established a long term collaboration with Razvan and we have been very happy with
                            his work. The communication was great and Razvan is an excellent programmer willing to go
                            the extra mile to contribute to the success of any project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

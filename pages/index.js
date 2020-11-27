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
                <p className="mt-8">🖥 I am a Freelance Full-Stack developer with experience building websites
                    and
                    scalable web applications. I
                    specialize in JavaScript and PHP, with professional experience working with Angular and NodeJS.
                    I also have a strong knowledge of HapiJS and Codeigniter, Docker, SQL/NoSQL databases, Microservices
                    and a lot of
                    other technologies and APIs.</p>
                <p className="mt-4">🎬 Starting from May 2020 I'm also creating programming related content on
                    YouTube and Instagram. At the beginning of July I started a Podcast called The Dev Chat where I
                    bring
                    people from the industry and chat over different IT related subjects. I learned most of the things I
                    know from the internet so this is my way of giving back to the community.</p>
                <p className="mt-4">
                    🎉 In mid-2020 I co-founded <a href="https://usebrunch.com" className="underline">Brunch</a>, a tool
                    that makes it easy to
                    get feedback on a website you just created. No need for long calls to explain where that text should
                    be different or where is that extra pixel you didn’t notice in design. People can use Brunch to show
                    you exactly what they want and where they want it. It’s a sort of pointing a finger at it, but
                    socially acceptable.
                    <br/>
                    <a href="https://youtu.be/Qlu8kJEH7Jk" className="underline">Check this video</a> for more details
                    on how the app works.
                </p>
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

                <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-6">🏢 What Clients Say</h2>
                <div className="mb-6">
                    <p className="">
                        <span className="italic font-bold text-4xl leading-none text-orange">" </span>
                        Razvan is a very valuable asset to my project. He started to deliver very fast on new
                        technologies and he’s always looking to learn more. He is the kind of person always focused to
                        deliver. He is looking for solutions, making the necessary research and always finding a way to
                        deliver no matter how challenging. You can clearly see that he likes what he does as he always
                        shows a natural enthusiasm.
                    </p>

                    <p className="flex mt-4 justify-end items-center">
                            <span className="italic font-bold text-sm">
                                Dragos Rautu @
                            </span>
                        <a href="https://modex.tech" target="_blank"><img src="/clients/modex.png"
                                                                          alt="Modex"
                                                                          className="h-6 ml-2 w-auto"/></a>
                    </p>
                </div>
                <div className="md:flex">
                    <div className="flex-1 md:pr-4 mb-6 md:mb-0">
                        <p className="">
                            <span className="italic font-bold text-4xl leading-none text-orange">" </span>We worked with
                            Razvan on a
                            few projects
                            already and we are happy with our collaboration. He
                            was really responsive and prompt and found solutions even for more complex situations.
                        </p>

                        <p className="flex mt-4 justify-end items-center">
                            <span className="italic font-bold text-sm">
                                Andrei Stoica @
                            </span>
                            <a href="https://stoica.co" target="_blank"><img src="/clients/stoica.png"
                                                                             alt="stoica.co"
                                                                             className="h-4 ml-2 w-auto"/></a>
                        </p>
                    </div>
                    <div className="flex-1 md:pl-4">
                        <p className="">
                            <span className="italic font-bold text-4xl leading-none text-orange">" </span>We have
                            established a long
                            term
                            collaboration with Razvan and we have been very happy with
                            his work. The communication was great and Razvan is an excellent programmer willing to go
                            the extra mile to contribute to the success of any project.
                        </p>

                        <p className="flex mt-4 justify-end items-center">
                            <span className="italic font-bold text-sm">
                                Octavian Văcărescu @
                            </span>
                            <a href="https://octagram.ro" target="_blank"><img src="/clients/octagram.png"
                                                                               alt="octagram"
                                                                               className="h-6 ml-2 w-auto"/></a>
                        </p>
                    </div>
                </div>

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
            </div>
        </div>
    )
}
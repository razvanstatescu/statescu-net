import {NextSeo} from 'next-seo';
import IgStyle from '../styles/ig.module.scss'

export default () => {
    return (
        <div className="container mx-auto mt-8 md:mt-24 max-w-4xl mb-16">
            <NextSeo
                title="Răzvan Stătescu | Recent Projects"
                description="Freelance Full-Stack Developer with experience building websites and scalable web applications. IT content creator on YouTube and Instagram. Podcast host."
                openGraph={{
                    url: 'https://statescu.net/projects',
                    title: 'Răzvan Stătescu | Recent Projects',
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
            <img src="/ig/avatar.jpg" alt="the dev guy avatar" className="rounded-full h-40 w-40 mx-auto"/>
            <h1 className="text-center font-bold mt-2">@the.dev.guy</h1>
            <ul className={`mt-8 ${IgStyle.linkList}`}>
                <li>
                    <a href="#">Last YouTube Video</a>
                </li>
            </ul>
        </div>
    )
}

import {NextSeo} from 'next-seo';
import {Header} from "../components/Header";

export default () => {
    return (
        <div className="container mx-auto mt-8 md:mt-24 max-w-2xl mb-16">
            <NextSeo
                title="Răzvan Stătescu | My Services"
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

            <Header/>

            <h2 className="font-raleway font-black text-3xl uppercase mt-16 mb-8">👨🏻‍💻 my services</h2>

            <div className="my-16">
                <div className="flex md:items-center md:justify-center service-header">
                    <img src="/services/web-dev.svg" alt="web development services" className="h-32 w-auto md:pr-4"/>
                    <div className="font-black uppercase text-4xl pl-4 hidden md:block">web<br/>applications<br/>development
                    </div>
                </div>
                <div className="font-black uppercase text-lg mt-4 md:hidden">web applications development</div>
                <p className="mt-4">
                    I work with various technologies and APIs to implement scalable solutions that help your business.
                    I'm always staying up to date with the latest technology updates and best practices so I can make
                    sure
                    your application will use the best things that are out there right now. I'm 100% committed to the
                    success of the project and I'll work closely with you to turn your idea into reality.
                </p>
            </div>

            {/*<div className="my-16">*/}
            {/*    <div className="flex items-center justify-center service-header">*/}
            {/*        <div className="font-black uppercase text-4xl pr-4">consultancy</div>*/}
            {/*        <img src="/services/consultancy.svg" alt="web dev consultancy services"*/}
            {/*             className="h-32 w-auto pl-4"/>*/}
            {/*    </div>*/}
            {/*    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis excepturi*/}
            {/*        perspiciatis recusandae.*/}
            {/*        Aspernatur, atque consequatur delectus et minus nihil nobis perferendis perspiciatis quibusdam*/}
            {/*        ratione suscipit veritatis? Aliquid aperiam architecto atque est laborum libero modi molestiae*/}
            {/*        necessitatibus nulla vero! Cumque expedita minima, nihil nostrum provident reiciendis ullam. Culpa*/}
            {/*        deleniti ipsum quae.</p>*/}
            {/*</div>*/}
        </div>
    )
}

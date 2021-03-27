export const AboutMe = () => {
  return (
    <section>
      <div className="mt-24 flex items-center md:space-x-12 flex-col md:flex-row">
        <img src="/homepage/web_dev.svg" className="w-1/2 md:w-1/3 h-auto mb-6 md:mb-0" />
        <div className="">
          <h1 className="font-raleway font-bold text-xl mb-2">Web Developer</h1>
          <p>
            I am a passionate Freelance Full-Stack developer with experience building websites and web applications. I
            specialize in <span className="underline">JavaScript</span> and{" "}
            <span className="underline">Typescript</span>, with professional experience working with{" "}
            <span className="underline">Angular 2+</span> and <span className="underline">NodeJS</span>. I also have a
            strong knowledge of Vue.Js, Express, TailwindCSS, HapiJS, Docker, and a lot of other technologies and APIs.
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
            , a tool that makes it easy to get feedback on a website you just created. No need for long calls to explain
            where that text should be different or where is that extra pixel you didn’t notice in design. People can use
            Brunch to show you exactly what they want and where they want it. It’s a sort of pointing a finger at it,
            but socially acceptable.
            <br />
            <a href="https://youtu.be/Qlu8kJEH7Jk" className="underline">
              Check this video
            </a>{" "}
            for more details on how the app works..
          </p>
        </div>
      </div>
    </section>
  );
};

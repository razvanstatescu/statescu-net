import { Header } from '../components/Header';
import { AboutMe } from '../components/homepage/AboutMe';
import { Clients } from '../components/homepage/Clients';
import { ContactMe } from '../components/homepage/ContactMe';
import { LastYouTubeVideo } from '../components/homepage/LastYouTubeVideo';

export default () => {
  return (
    <div className="container mx-auto mt-8 md:mt-16 max-w-4xl mb-16">
      <div>
        <Header />

        <AboutMe />

        <ContactMe />

        <Clients />

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

        <LastYouTubeVideo />
      </div>
    </div>
  );
};

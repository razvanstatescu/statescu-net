import HomeStyle from '../../styles/home.module.scss';

export const LastYouTubeVideo = () => {
  return (
    <section>
      <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-2">🎬 last youtube video</h2>
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=UU_EkWlcYarTNGaf2nNAHNdg"
        width="100%"
        frameBorder="0"
        scrolling="no"
        className={HomeStyle.youtubeIframe}
      ></iframe>
    </section>
  );
};

import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterStyle from '../styles/footer.module.scss';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-4 md:px-0">
      <div className="container mx-auto  max-w-3xl flex justify-center">
        <div className="flex items-center space-x-16">
          <div className="">
            <span
              className={`font-raleway font-black text-6xl hover:text-orange transition duration-200 ${FooterStyle.icon}`}
            >
              S
            </span>
          </div>
          <div className="">
            <p className="mb-2">You can find me on</p>
            <div className={`${FooterStyle.icons} flex space-x-4 items-center`}>
              <a href="https://www.linkedin.com/in/razvanstatescu/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.youtube.com/thedevguy" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.instagram.com/the.dev.guy/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/razvanstatescu/" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/StatescuRazvan" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <p className="mt-2">
              Or drop me an email to{" "}
              <a href="mailto:contact@statescu.net" className="underline">
                contact@statescu.net
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="buy-me-a-coffee mt-8 flex justify-center">
        <a href="https://www.buymeacoffee.com/razvanstatescu" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: "60px", width: "217px" }}
          />
        </a>
      </div>
    </footer>
  );
};

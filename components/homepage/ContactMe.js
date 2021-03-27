import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeStyle from '../../styles/home.module.scss';

export const ContactMe = () => {
  return (
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
  );
};

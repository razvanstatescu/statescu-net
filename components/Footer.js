import HomeStyle from "../styles/home.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 py-16">

            <div className={`flex items-center justify-center mt-8 ${HomeStyle.icons}`}>
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
                <p className="ml-2 hidden md:block">or
                    <a href="mailto:razvan@statescu.net" target="_blank">
                        contact@statescu.net</a>
                </p>
            </div>
            <p className="mt-4 md:hidden block text-center">or mail to
                <a href="mailto:razvan@statescu.net" target="_blank"> contact@statescu.net</a>
            </p>
        </footer>
    )
};

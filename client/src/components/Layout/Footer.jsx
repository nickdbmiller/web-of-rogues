import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <a
                href='https://www.linkedin.com/in/ndbmiller'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href='https://github.com/nickdbmiller'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <div>🄯 Nicholas Barrett-Miller 2021</div>
        </footer>
    )
}

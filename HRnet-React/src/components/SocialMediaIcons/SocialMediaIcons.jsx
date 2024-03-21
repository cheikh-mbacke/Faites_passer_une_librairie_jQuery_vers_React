import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { container } from './SocialMediaIcons.module.css'
export default function SocialMediaIcons() {
  return (
    <div className={ container }>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
}

import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { container, powerOff } from './SideMenu.module.css';
export default function SideMenu() {
  return (
    <div className={container}>
      <div className={powerOff}>
        <FontAwesomeIcon icon={faPowerOff} />
      </div>
      <div>
        <SocialMediaIcons />
      </div>
    </div>
  );
}

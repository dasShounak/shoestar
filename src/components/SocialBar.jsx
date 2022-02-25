import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialBar = () => {
  return (
    <ul className="flex justify-evenly text-3xl">
      <li>
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <FaYoutube />
        </a>
      </li>
      <li>
        <a href="#">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;

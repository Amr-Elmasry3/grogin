// Import Style File
import "./social_links.scss";

// Import React Icons
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

// Import Link
import { Link } from "react-router-dom";

function Sociallinks() {
  return (
    <div className="social-links">
      <Link to="" className="social facebook">
        <RiFacebookFill className="icon" />

        <span>facebook</span>
      </Link>

      <Link to="" className="social twitter">
        <RiTwitterFill className="icon" />

        <span>twitter</span>
      </Link>

      <Link to="" className="social linked-in">
        <RiLinkedinFill className="icon" />

        <span>linked-in</span>
      </Link>

      <Link to="" className="social youtube">
        <RiYoutubeFill className="icon" />

        <span>youtube</span>
      </Link>
    </div>
  );
}

export default Sociallinks;

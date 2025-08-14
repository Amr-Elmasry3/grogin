// Import Style File
import "./main_heading.scss";

// Import Components
import Button from "../../common/button/Button";

// Import Link
import { Link } from "react-router-dom";

function MainHeading({ title, subTitle }) {
  return (
    <div className="main-heading">
      <div className="heading">
        <p className="title">{title}</p>

        <p className="sub-title">{subTitle}</p>
      </div>

      <Link to="/shop">
        <Button btnTitle="View All" />
      </Link>
    </div>
  );
}

export default MainHeading;

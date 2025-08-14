// Import Style File
import "./loader.scss";

// Import React Icons
import { GiCartwheel } from "react-icons/gi";

function Loader() {
  return (
    <div className="loader">
      <div className="circle-box">
        <span className="circle"></span>

        <GiCartwheel className="icon" />
      </div>
    </div>
  );
}

export default Loader;

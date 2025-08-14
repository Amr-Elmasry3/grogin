// Import Style File
import "./button.scss";

// Import React Icons
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Button({ btnTitle, func }) {
  return (
    <button
      type="submit"
      className="btn"
      onClick={() => {
        func ? func() : null;
      }}
    >
      {btnTitle}

      <MdOutlineArrowRightAlt className="icon" />
    </button>
  );
}

export default Button;

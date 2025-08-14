// Import Style File
import "./close_icon.scss";

// Import React icons
import { IoClose } from "react-icons/io5";

function CloseIcon({ func }) {
  return (
    <div
      className="close-icon"
      onClick={() => {
        func ? func() : null;
      }}
    >
      <IoClose className="icon" />
    </div>
  );
}

export default CloseIcon;

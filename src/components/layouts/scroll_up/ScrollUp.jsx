// Import Style File
import "./scroll_up.scss";

// import Matrial Ui Components
import CircularProgress from "@mui/material/CircularProgress";

// Import React Icons
import { MdArrowUpward } from "react-icons/md";

// Import Hooks
import { useEffect, useState } from "react";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleVisible = () => {
      if (window.pageYOffset > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Handle Progress
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolled = window.pageYOffset;

      const progress = (scrolled / (scrollHeight - clientHeight)) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleVisible);
    return () => removeEventListener("scroll", handleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll-up"
      style={{ right: isVisible ? "30px" : "-40px" }}
      onClick={() => {
        scrollToTop();
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{ color: "#6f42c1" }}
        className="progress"
        value={progress}
      />

      <MdArrowUpward className="icon" />
    </div>
  );
}

export default ScrollUp;

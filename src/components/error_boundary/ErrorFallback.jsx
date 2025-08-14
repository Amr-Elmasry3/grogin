// Import Style File
import "./error_boundary.scss";

// Import Img
import errorImg from "../../assets/404 Error.gif";

function ErrorFallback() {
  return (
    <div className="error-fallback">
      <h2>An unexpected error occurred</h2>

      <img src={errorImg} alt="error..." />
    </div>
  );
}

export default ErrorFallback;

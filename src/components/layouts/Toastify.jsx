// Import Toast Components
import { ToastContainer } from "react-toastify";

function Toastify() {
  return (
    <div className="my-toastify" style={{ position: "fixed", zIndex: "100" }}>
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  );
}

export default Toastify;

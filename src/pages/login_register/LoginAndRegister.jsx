// Import Style File
import "./login_register.scss";
import "../../sass/global/input_box.scss";

// Import Components
import Login from "../../components/ui/login/Login";
import Register from "../../components/ui/register/Register";

// Import Hooks
import { useState } from "react";

function LoginAndRegister() {
  const [signValue, setSignValue] = useState("login");

  return (
    <div className="login-register">
      <div className="container">
        <div className="head">
          <span
            className={`${signValue === "login" ? "active" : ""}`}
            onClick={() => {
              setSignValue("login");
            }}
          >
            Login
          </span>

          <span
            className={`${signValue === "register" ? "active" : ""}`}
            onClick={() => {
              setSignValue("register");
            }}
          >
            Register
          </span>
        </div>

        <div className="login-register-content">
          {signValue === "login" ? (
            <Login />
          ) : signValue === "register" ? (
            <Register
              goToLogin={() => {
                setSignValue("login");
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LoginAndRegister;

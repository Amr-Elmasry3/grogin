// Import Ui
import LoginUi from "./LoginUi";

// Import Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../../features/toastifySlice";

import {
  handleLogin,
  setInStorage,
  setAccountNow,
} from "../../../features/userInfoSlice";

function Login() {
  const [eyeIconState, setEyeIconState] = useState("closed");

  const accounts = useSelector((store) => {
    return store.userInfo.accounts;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEyeIconState = () => {
    setEyeIconState(eyeIconState === "closed" ? "open" : "closed");
  };

  const handleClickBtn = (user) => {
    dispatch(handleLogin());
    dispatch(setAccountNow(user));
    dispatch(setInStorage());

    dispatch(setMessage("Successfully logged in"));
    dispatch(setType("success"));
    dispatch(notify());

    navigate(-1);
  };

  return (
    <>
      <LoginUi
        eyeIcon={eyeIconState}
        handleEyeIconState={handleEyeIconState}
        accounts={accounts}
        handleClickBtn={handleClickBtn}
      />
    </>
  );
}

export default Login;

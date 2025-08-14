// Import Ui
import RegisterUi from "./RegisterUi";

// Import Hooks
import { useState } from "react";

// Import Custom Hooks
import { useCheckEmail } from "../../../hooks/useCheckEmail";

// Import Redux Hooks
import { useDispatch } from "react-redux";

// Import Toastify Slice Reducers
import { setMessage, setType, notify } from "../../../features/toastifySlice";

// Import User Info Slice Reducers
import { setInfo, setInStorage } from "../../../features/userInfoSlice";

function Register({ goToLogin }) {
  const [eyeIconState, setEyeIconState] = useState({
    password: "closed",
    repeatPassword: "closed",
  });

  const checkEmail = useCheckEmail();

  const dispatch = useDispatch();

  function handleClickBtn(values) {
    dispatch(setInfo(values));
    dispatch(setInStorage(values));
    goToLogin();

    dispatch(setMessage("Account successfully created"));
    dispatch(setType("success"));
    dispatch(notify());
  }

  const handleEyeIconState = (key) => {
    setEyeIconState({
      ...eyeIconState,
      [key]: eyeIconState[key] === "closed" ? "open" : "closed",
    });
  };

  return (
    <>
      <RegisterUi
        eyeIcon={eyeIconState}
        handleEyeIconState={handleEyeIconState}
        handleClickBtn={handleClickBtn}
        checkEmail={checkEmail}
      />
    </>
  );
}

export default Register;

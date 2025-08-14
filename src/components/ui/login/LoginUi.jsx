// Import Components
import Button from "../../common/button/Button";

// Import React Icons
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

// Import Link
import { Link } from "react-router-dom";

// Import Formik And Yub
import { useFormik } from "formik";

// Import Login Schema
import { loginSchema } from "../../../utils/validationScema";

function LoginUi({ eyeIcon, handleEyeIconState, accounts, handleClickBtn }) {
  const formik = useFormik({
    initialValues: {
      userName_email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      const user = accounts.find(
        (acc) =>
          acc.email === values.userName_email ||
          acc.userName === values.userName_email
      );

      if (!user) {
        formik.setFieldError(
          "userName_email",
          "Incorrect name or eamil address"
        );
        return;
      }

      if (user.password !== values.password) {
        formik.setFieldError("password", "Incorrect password");
        return;
      }

      handleClickBtn(user);
    },
  });

  return (
    <div className="login">
      <p className="title">
        If you have an account, sign in with your username or email address.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="box">
          <label>
            Username or email address <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.userName_email && formik.errors.userName_email
                ? "error"
                : null
            }`}
          >
            <input
              type="text"
              placholder=""
              value={formik.values.userName_email}
              name="userName_email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.userName_email && formik.errors.userName_email
                    ? "block"
                    : null,
              }}
            />
          </div>

          {formik.touched.userName_email && formik.errors.userName_email ? (
            <p className="error-message">{formik.errors.userName_email}</p>
          ) : (
            ""
          )}
        </div>

        <div className="box">
          <label>
            Password <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.password && formik.errors.password ? "error" : null
            }`}
          >
            <input
              type={eyeIcon === "closed" ? "password" : "text"}
              placholder=""
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="icons-box">
              {eyeIcon === "closed" ? (
                <GoEyeClosed
                  className="eye-icon closed"
                  onClick={() => {
                    handleEyeIconState();
                  }}
                />
              ) : (
                <GoEye
                  className="icon open"
                  onClick={() => {
                    handleEyeIconState();
                  }}
                />
              )}

              <IoMdInformationCircleOutline
                className="error-icon"
                style={{
                  display:
                    formik.touched.password && formik.errors.password
                      ? "block"
                      : null,
                }}
              />
            </div>
          </div>

          {formik.touched.password && formik.errors.password ? (
            <p className="error-message">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>

        <Link to="" className="lost-password">
          Lost your password?
        </Link>

        <Button btnTitle="Login" />
      </form>
    </div>
  );
}

export default LoginUi;

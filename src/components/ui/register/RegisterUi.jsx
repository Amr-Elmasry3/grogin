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

// Import Register Schema
import { registerSchema } from "../../../utils/validationScema";

function RegisterUi({
  eyeIcon,
  handleEyeIconState,
  handleClickBtn,
  checkEmail,
}) {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(!checkEmail(values.email));

      if (checkEmail(values.email)) {
        formik.setFieldError("email", "This email is aleardy in use");
        return;
      }

      handleClickBtn(values);
    },
  });

  return (
    <div className="register">
      <p className="title">
        If you don`t have an account, create a new account.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="box">
          <label>
            Username <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.userName && formik.errors.userName ? "error" : null
            }`}
          >
            <input
              type="text"
              placholder=""
              value={formik.values.userName}
              name="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.userName && formik.errors.userName
                    ? "block"
                    : null,
              }}
            />
          </div>

          {formik.touched.userName && formik.errors.userName ? (
            <p className="error-message">{formik.errors.userName}</p>
          ) : (
            ""
          )}
        </div>

        <div className="box">
          <label>
            Email address <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.email && formik.errors.email ? "error" : null
            }`}
          >
            <input
              type="email"
              placholder=""
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.email && formik.errors.email ? "block" : null,
              }}
            />
          </div>

          {formik.touched.email && formik.errors.email ? (
            <p className="error-message">{formik.errors.email}</p>
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
              type={eyeIcon.password === "closed" ? "password" : "text"}
              placholder=""
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <div className="icons-box">
              {eyeIcon.password === "closed" ? (
                <GoEyeClosed
                  className="eye-icon closed"
                  onClick={() => {
                    handleEyeIconState("password");
                  }}
                />
              ) : (
                <GoEye
                  className="icon open"
                  onClick={() => {
                    handleEyeIconState("password");
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

        <div className="box">
          <label>
            Repeat password <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.repeatPassword && formik.errors.repeatPassword
                ? "error"
                : null
            }`}
          >
            <input
              type={eyeIcon.repeatPassword === "closed" ? "password" : "text"}
              placholder=""
              value={formik.values.repeatPassword}
              name="repeatPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <div className="icons-box">
              {eyeIcon.repeatPassword === "closed" ? (
                <GoEyeClosed
                  className="eye-icon closed"
                  onClick={() => {
                    handleEyeIconState("repeatPassword");
                  }}
                />
              ) : (
                <GoEye
                  className="icon open"
                  onClick={() => {
                    handleEyeIconState("repeatPassword");
                  }}
                />
              )}

              <IoMdInformationCircleOutline
                className="error-icon"
                style={{
                  display:
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword
                      ? "block"
                      : null,
                }}
              />
            </div>
          </div>

          {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
            <p className="error-message">{formik.errors.repeatPassword}</p>
          ) : (
            ""
          )}
        </div>

        <p className="description">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our<Link to="">privacy policy.</Link>
        </p>

        <Button btnTitle="Register" func={() => {}} />
      </form>
    </div>
  );
}

export default RegisterUi;

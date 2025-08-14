// Import Style File
import "../../../../sass/global/input_box.scss";

// Import Components
import Button from "../../../common/button/Button";

// Import React Icons
import { IoMdInformationCircleOutline } from "react-icons/io";

// Import Formik And Yub
import { useFormik } from "formik";

// Import Blog Schema
import { blogSchema } from "../../../../utils/validationScema";

function LeaveCommentUi({ isLogin, checkLogin, handleAddComment }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
    },
    validationSchema: blogSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      if (!isLogin) {
        checkLogin();
      } else {
        handleAddComment(values.name, values.comment);

        formik.setFieldValue("name", "");
        formik.setFieldValue("comment", "");
      }
    },
  });

  return (
    <div className="leave-comment">
      <h4 className="title">Leave a Reply</h4>

      <form onSubmit={formik.handleSubmit}>
        <div className="box">
          <label>
            Name <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.name && formik.errors.name ? "error" : null
            }`}
          >
            <input
              type="text"
              placholder=""
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.name && formik.errors.name ? "block" : null,
              }}
            />
          </div>

          {formik.touched.name && formik.errors.name ? (
            <p className="error-message">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </div>

        <div className="box">
          <label>
            Comment <span>*</span>
          </label>

          <div
            className={`input-box ${
              formik.touched.comment && formik.errors.comment ? "error" : null
            }`}
          >
            <textarea
              placholder=""
              value={formik.values.comment}
              name="comment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />

            <IoMdInformationCircleOutline
              className="error-icon"
              style={{
                display:
                  formik.touched.comment && formik.errors.comment
                    ? "block"
                    : null,
              }}
            />
          </div>

          {formik.touched.comment && formik.errors.comment ? (
            <p className="error-message">{formik.errors.comment}</p>
          ) : (
            ""
          )}
        </div>

        <Button btnTitle="Post Comment" />
      </form>
    </div>
  );
}

export default LeaveCommentUi;

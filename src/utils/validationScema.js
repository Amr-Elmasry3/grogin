// Import Yub
import * as Yup from "yup";

// Register Schema
export const registerSchema = Yup.object().shape({
  userName: Yup.string().min(3, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters")
    .required("Password requried")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!#$%^&*]{8,}$/,
      "Must contain an uppercase letter, lowercase letter, a sign"
    ),
  repeatPassword: Yup.string()
    .required("Password confirmation is rquried")
    .oneOf([Yup.ref("password")], "Mismatched passwords"),
});

// Login Schema
export const loginSchema = Yup.object().shape({
  userName_email: Yup.string().required("Required"),
  password: Yup.string().required("Password requried"),
});

// Blog Comment Schema
export const blogSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "The Name must contain at least 3 characters"),
  comment: Yup.string()
    .required("Comment requried")
    .min(30, "The Name must contain at least 30 characters"),
});

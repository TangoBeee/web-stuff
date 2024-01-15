import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { passwordValidator } from "../utils/FileValidator";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },

    validate: passwordValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => console.log(values),
  });

  return (
    <main>
      <h1>Hello!</h1>
      <p>Please enter your password</p>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">Login</button>

        <div>
          <span>
            Forgot Password? <Link to="/verification">Recover Now</Link>{" "}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Password;

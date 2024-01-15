import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { usernameValidator } from "../utils/FileValidator";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },

    validate: usernameValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => console.log(values),
  });

  return (
    <main>
      <h1>Hello!</h1>
      <p>Please login</p>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="Username"
          />
        </div>

        <button type="submit">Verify</button>

        <div>
          <span>
            Not a member? <Link to="/signup">Signup</Link>{" "}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Login;

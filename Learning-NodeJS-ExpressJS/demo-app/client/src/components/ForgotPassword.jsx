import React from "react";
import { useFormik } from "formik";
import { resetPasswordValidator } from "../utils/FileValidator";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      cfm_password: ""
    },

    validate: resetPasswordValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => console.log(values),
  });

  return (
    <main>
      <h1>Hello!</h1>
      <p>Please enter your new password</p>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="New Password"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("cfm_password")}
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit">Reset</button>
      </form>
    </main>
  );
};

export default ForgotPassword;

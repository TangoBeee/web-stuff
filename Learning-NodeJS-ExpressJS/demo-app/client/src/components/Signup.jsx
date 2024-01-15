import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupFormValidator } from "../utils/FileValidator";
import { convertToBase64 } from "../utils/ImageToBase64";
import demoImage from "../assets/demo.png"

const Signup = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "test@test.test",
      username: "admin",
      password: "admin@123",
    },

    validate: signupFormValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { photo: file || '' });
      console.log(values);
    },
  });

  const onFileUpload = async (event) => {
    const base64 = await convertToBase64(event.target.files[0]);
    setFile(base64);
  };

  return (
    <main>
      <h1>Hello!</h1>
      <p>Please Signup</p>

      <form onSubmit={formik.handleSubmit}>
        <img src={file || demoImage} alt="profile photo" width={80} />
        <div>
          <label htmlFor="photo">Add your photo</label>
          <br />
          <input
            {...formik.getFieldProps("photo")}
            accept="image/*"
            onChange={onFileUpload}
            value=""
            type="file"
            id="photo"
            name="photo"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("username")}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="Password"
          />
        </div>

        <button type="submit">Signup</button>

        <div>
          <span>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { profileFormValidator } from "../utils/FileValidator";
import { convertToBase64 } from "../utils/ImageToBase64";
import demoImage from "../assets/demo.png";

const Dashboard = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "Tango",
      lastName: "Bee",
      address: "jupiter near the sun",
      email: "test@test.test",
      username: "admin",
    },

    validate: profileFormValidator,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { photo: file || "" });
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
      <p>Welcome to you profile</p>

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
            {...formik.getFieldProps("firstName")}
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("lastName")}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            {...formik.getFieldProps("address")}
            type="text"
            placeholder="Address"
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

        <button type="submit">Signup</button>

        <div>
          <span>
            Gotta Go? <Link to="/login">Logout</Link>{" "}
          </span>
        </div>
      </form>
    </main>
  );
};

export default Dashboard;

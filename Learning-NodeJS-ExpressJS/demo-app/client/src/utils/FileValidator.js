import toast from "react-hot-toast";

export const usernameValidator = async (values) => {
  const error = usernameVerify({}, values);

  return error;
};

export const passwordValidator = async (values) => {
  const error = passwordVerify({}, values);

  return error;
};

export const resetPasswordValidator = async (values) => {
  const error = passwordVerify({}, values);

  if (values.password !== values.cfm_password) {
    error.exist = toast.error("Password not match!");
  }

  return error;
};

export const signupFormValidator = async (values) => {
  const error = emailVerify({}, values);
  usernameVerify({}, values);
  passwordVerify({}, values);

  return error;
};


export const profileFormValidator = async (values) => {
  const error = emailVerify({}, values);
  usernameVerify({}, values);

  return error;
};

/* ********************************************************************* */

const usernameVerify = (error = {}, values) => {
  if (!values.username) {
    error.username = toast.error("Username Required!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Username is not valid!");
  }

  return error;
};

const passwordVerify = (error = {}, values) => {
  if (!values.password) {
    error.password = toast.error("Password Required!");
  } else if (values.password.length <= 4) {
    error.password = toast.error("Password is not valid!");
  }

  return error;
};

const emailVerify = (error = {}, values) => {
  if (!values.email) {
    error.email = toast.error("Email Required!");
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    error.email = toast.error("Email is not valid!");
  } 

  return error;
};

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import ForgotPassword from "./components/ForgotPassword"
import OTPVerification from "./components/OTPVerification"
import Password from "./components/Password"
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "/verification",
      element: <OTPVerification />
    },
    {
      path: "/password",
      element: <Password />
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

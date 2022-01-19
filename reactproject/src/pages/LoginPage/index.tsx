import React, { useState } from "react";
import Nav from "../../layout/Nav";
import LoginForm from "../../modules/LoginForm";
import RegisterForm from "../../modules/RegisterForm";

export const LoginPage = () => {
  return (
    <>
      <Nav />
      <div className="center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;

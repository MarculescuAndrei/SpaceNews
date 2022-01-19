import React, { useState } from "react";
import Nav from "../../layout/Nav";
import RegisterForm from "../../modules/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Nav />
      <div className="center">
        <p>Please Register Here:</p>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;

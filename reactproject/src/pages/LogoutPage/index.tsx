import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginedNav from "../../layout/loginedNav";
import { isAuthContext, LoginedUserContext } from "../../logic/UserContext";

export const LogoutPage = () => {
  const { isAuth, setIsAuth } = useContext(isAuthContext);
  const { loginedUser, setLoginedUser } = useContext(LoginedUserContext);
  const navigate = useNavigate();

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginedUser("");
    setIsAuth(false);
    navigate("/welcome");
  };

  return (
    <>
      <LoginedNav />
      <div className="center">
        <h3>Sorry to see you go!</h3>
        <button className="button-6" onClick={buttonHandler}>
          Logout
        </button>
      </div>
    </>
  );
};

export default LogoutPage;

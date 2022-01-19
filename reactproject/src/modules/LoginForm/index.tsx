import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileURLToPath } from "url";
import Input from "../../components/Input";
import {
  LoginedUserContext,
  isAuthContext,
  UserContext,
} from "../../logic/UserContext";

interface PropsLoginUser {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { isAuth, setIsAuth } = useContext(isAuthContext);
  const { loginedUser, setLoginedUser } = useContext(LoginedUserContext);
  const { users, setUsers } = useContext(UserContext);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    console.log("new form state is: ", formState);
  }, [formState]);

  const handleEmailChange = (val: PropsLoginUser["email"]) => {
    setFormState({
      ...formState,
      email: val,
    });
  };

  const handlePasswordChange = (val: PropsLoginUser["password"]) => {
    setFormState({
      ...formState,
      password: val,
    });
  };

  const buttonHandler2 = () => {
    setIsAuth(true);
    console.log("here");
    setLoginedUser(formState);
    navigate("/home");
  };

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const filtered = users.filter((entry: { [s: string]: string }) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.includes(formState.email)
      )
    );
    const filteredpass = users.filter((entry: { [s: string]: string }) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.includes(formState.password)
      )
    );
    filteredpass.length > 0 && filtered.length > 0
      ? buttonHandler2()
      : setShowMessage(true);
    console.log(filtered);
  };

  const renderShowMessage = () => {
    if (showMessage) {
      return <p>Wrong Credentials / You are not registered.</p>;
    }
  };

  return (
    <form>
      <h4>Please login here</h4>
      <Input
        placeholder={"Email address"}
        value={formState.email}
        onChange={handleEmailChange}
      />
      <Input
        placeholder={"Password"}
        type={"password"}
        value={formState.password}
        onChange={handlePasswordChange}
      />

      <button className="button-6" type="submit" onClick={buttonHandler}>
        Login
      </button>
      {renderShowMessage()}
    </form>
  );
};

export default LoginForm;

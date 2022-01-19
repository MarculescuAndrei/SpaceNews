import React, { useContext } from "react";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import {
  isAuthContext,
  LoginedUserContext,
  UserContext,
} from "../../logic/UserContext";
import { useNavigate } from "react-router-dom";

export interface PropsUser {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  age: string;
  address: string;
  password: string;
}

const RegisterForm = () => {
  const { users, setUsers } = useContext(UserContext);
  const [formState, setFormState] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(isAuthContext);
  const { loginedUser, setLoginedUser } = useContext(LoginedUserContext);

  const handleUsernameChange = (val: PropsUser["username"]) => {
    setFormState({
      ...formState,
      username: val,
    });
  };

  const handleFirstnameChange = (val: PropsUser["firstname"]) => {
    setFormState({
      ...formState,
      firstname: val,
    });
  };

  const handleLastnameChange = (val: PropsUser["lastname"]) => {
    setFormState({
      ...formState,
      lastname: val,
    });
  };

  const handleEmailChange = (val: PropsUser["email"]) => {
    setFormState({
      ...formState,
      email: val,
    });
  };

  const handleAgeChange = (val: PropsUser["age"]) => {
    setFormState({
      ...formState,
      age: val,
    });
  };

  const handleAddressChange = (val: PropsUser["address"]) => {
    setFormState({
      ...formState,
      address: val,
    });
  };

  const handlePasswordChange = (val: PropsUser["password"]) => {
    setFormState({
      ...formState,
      password: val,
    });
  };

  useEffect(() => {
    console.log("new form state is: ", formState);
  }, [formState]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsAuth(true);
    setUsers([...users, formState]);
    setLoginedUser({ email: formState.email, password: formState.password });
    navigate("/home");
  };

  return (
    <form id="my-form">
      <h3>Sign up</h3>
      <Input
        placeholder={"Username"}
        value={formState.username}
        onChange={handleUsernameChange}
      />
      <Input
        placeholder={"Email address"}
        value={formState.email}
        onChange={handleEmailChange}
      />
      <Input
        placeholder={"First name"}
        value={formState.firstname}
        onChange={handleFirstnameChange}
      />
      <Input
        placeholder={"Last name"}
        value={formState.lastname}
        onChange={handleLastnameChange}
      />
      <Input
        placeholder={"Age"}
        value={formState.age}
        onChange={handleAgeChange}
      />
      <Input
        placeholder={"Address"}
        value={formState.address}
        onChange={handleAddressChange}
      />
      <Input
        placeholder={"Password"}
        type={"password"}
        value={formState.password}
        onChange={handlePasswordChange}
      />

      <button className="button-6" type="submit" onClick={buttonHandler}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

import React, { useContext, useState } from "react";
import { fileURLToPath } from "url";
import LoginedNav from "../../layout/loginedNav";
import Nav from "../../layout/Nav";
import {
  isAuthContext,
  LoginedUserContext,
  UserContext,
} from "../../logic/UserContext";

export const ProfilePage = () => {
  const { users, setUsers } = useContext(UserContext);
  const { loginedUser, setLoginedUser } = useContext(LoginedUserContext);
  const { isAuth, setIsAuth } = useContext(isAuthContext);
  const filtered = users.filter((entry: { [s: string]: string }) =>
    Object.values(entry).some(
      (val) => typeof val === "string" && val.includes(loginedUser.email)
    )
  );
  console.log(filtered);
  if (isAuth) {
    return (
      <>
        <LoginedNav />
        <div className="center">
          <h1>Your Profile</h1>
          <hr className="hr"></hr>
          <h3>Username - {filtered[0].username}</h3>
          <h3>Firstname - {filtered[0].firstname}</h3>
          <h3>Lastname - {filtered[0].lastname}</h3>
          <h3>Email - {filtered[0].email}</h3>
          <h3>Age - {filtered[0].age}</h3>
          <h3>Address - {filtered[0].address}</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div>
        <p>Hello, This Cannot Be Accessed</p>
      </div>
    </>
  );
};

export default ProfilePage;

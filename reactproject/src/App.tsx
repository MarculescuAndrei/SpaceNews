import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Input from "./components/Input";
import Nav from "./layout/Nav";
import LoginForm from "./modules/LoginForm";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import {
  UserContext,
  LoginedUserContext,
  isAuthContext,
} from "./logic/UserContext";
import { useState, useMemo } from "react";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [loginedUser, setLoginedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const providerValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);
  const loginProvider = useMemo(
    () => ({ loginedUser, setLoginedUser }),
    [loginedUser, setLoginedUser]
  );
  const authProvider = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  //useEffect( () => {
  //  const storedusers = localStorage.getItem('users')
  //
  //  if (!storedusers) {
  //    localStorage.setItem('users', JSON.stringify(users.map(user => JSON.stringify(user))))
  //  }
  //  else {
  //    const storedusersarray:PropsUser[] = []
  //    storedusers.trim().split(",").forEach(item => {
  //      if (item[0] === "[") {
  //        item = item.slice(1, item.length)
  //        }
  //      if (item[item.length - 1] == "]") {
  //          item = item.slice(0, item.length-1)
  //        }
  //      if (item) {
  //        //@ts-ignore
  //        storedusersarray.push(JSON.stringify(item))
  //        }
  //    }
  //    console.log(storedusersarray)
  //  }
  //  // if users.length > storedusersarray.length adaug userii in plus din users la usersarray si dupa pun stored users array in localstorage
  //}, [users])

  //Ruta "/home" este o ruta privata, deoarece folosindu-ne de boolean-ul isAuth afisam daca User-ul este logat sau nu.

  return (
    <Router>
      <isAuthContext.Provider value={authProvider}>
        <LoginedUserContext.Provider value={loginProvider}>
          <UserContext.Provider value={providerValue}>
            <Routes>
              <Route path="/get-started" element={<LoginPage />}>
                {" "}
              </Route>
              <Route path="/welcome" element={<WelcomePage />}>
                {" "}
              </Route>
              <Route path="/register" element={<RegisterPage />}>
                {" "}
              </Route>
              <Route path="/profile" element={<ProfilePage />}>
                {" "}
              </Route>
              <Route path="/home" element={<HomePage />}>
                {" "}
              </Route>
              <Route path="/" element={<WelcomePage />}>
                {" "}
              </Route>
              <Route path="/logout" element={<LogoutPage />}>
                {" "}
              </Route>
            </Routes>
          </UserContext.Provider>
        </LoginedUserContext.Provider>
      </isAuthContext.Provider>
    </Router>
  );
}

export default App;

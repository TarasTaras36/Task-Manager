import React, { useEffect } from "react";

import { Route } from "react-router";

import { useDispatch } from "react-redux";
import { logInUser } from "./redux/user/user.actions";

import Main from "./components/main/main.component";
import SignUp from "./components/auth/sign-up/sign-up.component";
import SignIn from "./components/auth/sign-in/sign-in.component";
import Header from "./components/header/header.component";



import "./App.css";
import storage from "./storage";
import API from "./API";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    const loggedUser = storage.get("currentUser");


    if (!loggedUser) return;
    

    dispatch(logInUser(loggedUser));

  }, [dispatch]);



  return (
    <div className="App">
      <Header />
  
      <Route exact path="/sign-up" component={SignUp} />

      <Route  path="/sign-in" component={SignIn} />
      <Route exact path="/task-manager" component={Main} />
    </div>
  );
}

export default App;
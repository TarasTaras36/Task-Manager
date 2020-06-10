import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../../redux/user/user.actions";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";




import {  withStyles, TextField } from "@material-ui/core";
import API from "../../../API";

const SignIn = () => {
 
  
 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { userLoggedIn } = useSelector((state) => state.userData);

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #E63946 30%, #fcbf49 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


  return (
    <React.Fragment>
      <div className="sign">
        <div className="sign-form">
          <TextField
          id="outlined-basic" label="Name" variant="outlined" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
          <TextField
          id="outlined-basic" label="Password" variant="outlined" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <StyledButton
           
            onClick={() => {
              const newUser = {
                name,
                password,
              };
              API.signIn(newUser) && dispatch(logInUser(newUser));
            }}
          >
            SIGN IN
          </StyledButton>
        </div>
      </div>
      {userLoggedIn && <Redirect to="/task-manager" />}
    </React.Fragment>
  );
};

export default SignIn;


import React, { useState } from "react";
// import { logInUser } from "../../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

import { withStyles, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./sign-up.styles.scss";
import { Redirect } from "react-router";

import API from "../../../API";

const SignUp = () => {
  const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #E63946 30%, #fcbf49 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userExist, setUserExist] = useState(false);

  // const dispatch = useDispatch();

  const { userLoggedIn } = useSelector((state) => state.userData);

  return (
    <React.Fragment>
      <div className="sign">
        <div className="sign-form">
          {userExist ? (
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              error
              onChange={(e) => setName(e.target.value.trim())}
              value={name}
              type="text"
              helperText="User exist"
              required
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value.trim())}
              value={name}
              type="text"
              
              required
            />
          )}

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="text"
            onChange={(e) => setPassword(e.target.value.trim())}
            value={password}
            required
          />
          <StyledButton
            onClick={() => {
              const user = {
                name,
                password,
              };
              setUserExist(API.signUp(user));
            }}
          >
            SIGN UP
          </StyledButton>
        </div>
      </div>
      {userLoggedIn && <Redirect to="/" />}
    </React.Fragment>
  );
};

export default SignUp;

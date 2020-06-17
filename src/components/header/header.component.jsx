import React from "react";

import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/user/user.actions";


const Header = () => {
  const { userLoggedIn } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  const userSignOut = () => {

        dispatch(logOutUser())
        localStorage.removeItem('currentUser')
        localStorage.removeItem('loggedIn')
  }

  return (
    <div className="header">
      <h1>Task manager</h1>

      <div className="log-container">
       
        {userLoggedIn ? (
          <Link to="/sign-in" onClick={() => userSignOut()}>
            <span>SIGN OUT</span>
          </Link>
        ) : (
          <NavLink exact activeClassName='is-active' to="/sign-in">
            <span>SIGN IN</span>
          </NavLink>
        )}

        {!userLoggedIn && (
          <NavLink  exact activeClassName='is-active' to="/sign-up">
            <span>SIGN UP</span>
          </NavLink>
        )}
        
       
      </div>
    </div>
  );
};

export default Header;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/auth/auth.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(logout());
  };

  return (
    <div
      data-cy="navbar"
      style={{
     
        display: "flex",
        
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Home
        </Link><Link data-cy="navbar-home-link" to="/about">
          About
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLogin}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
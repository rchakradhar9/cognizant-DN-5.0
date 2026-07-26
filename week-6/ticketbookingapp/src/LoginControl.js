import React, { useState } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function LoginButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Login
    </button>
  );
}

function LogoutButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Logout
    </button>
  );
}

function LoginControl() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <div>

      {
        isLoggedIn
          ? <UserPage />
          : <GuestPage />
      }

      <br />

      {
        isLoggedIn
          ? <LogoutButton onClick={handleLogout} />
          : <LoginButton onClick={handleLogin} />
      }

    </div>

  );
}

export default LoginControl;
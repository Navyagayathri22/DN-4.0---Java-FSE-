import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import '../App.css';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const button = isLoggedIn ? (
    <button className="login-button" onClick={handleLogout}>Logout</button>
  ) : (
    <button className="login-button" onClick={handleLogin}>Login</button>
  );

  const page = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <>
      {button}
      <div className="page-content">{page}</div>
    </>
  );
}

export default LoginControl;

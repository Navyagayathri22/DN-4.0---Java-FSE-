import React from 'react';
import './App.css';
import LoginControl from './components/LoginControl';

function App() {
  return (
    <div className="app-container">
      <div className="header">Flight Ticket Booking App</div>
      <LoginControl />
    </div>
  );
}

export default App;

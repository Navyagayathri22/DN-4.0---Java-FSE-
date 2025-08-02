import React from 'react';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Event Handling App</h1>
      <Counter />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;

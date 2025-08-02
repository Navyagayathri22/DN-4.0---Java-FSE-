// src/components/Counter.js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! You clicked the increment button.");
  };

  const sayWelcome = (msg) => {
    alert(`Welcome message: ${msg}`);
  };

  const handlePress = (e) => {
    e.preventDefault(); // synthetic event
    alert("I was clicked!");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome to the Event Lab")}>Say Welcome</button>
      <br /><br />
      <button onClick={handlePress}>Synthetic OnPress</button>
    </div>
  );
}

export default Counter;

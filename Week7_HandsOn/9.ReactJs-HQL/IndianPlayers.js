// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20 = ["Virat", "Rohit", "Dhoni", "Pant", "Hardik"];
  const Ranji = ["Iyer", "Jaiswal", "Shubman", "Axar", "Siraj"];

  const allPlayers = [...T20, ...Ranji];

  const [oddPlayers, evenPlayers] = allPlayers.reduce(
    ([odds, evens], player, index) => {
      if (index % 2 === 0) odds.push(player);
      else evens.push(player);
      return [odds, evens];
    },
    [[], []]
  );

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h3>Odd Team Players</h3>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h3>Even Team Players</h3>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;

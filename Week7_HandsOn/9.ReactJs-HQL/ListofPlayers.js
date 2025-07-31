// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 88 },
    { name: "Rohit", score: 76 },
    { name: "Dhoni", score: 66 },
    { name: "Kohli", score: 55 },
    { name: "Rahul", score: 82 },
    { name: "Jadeja", score: 45 },
    { name: "Bumrah", score: 95 },
    { name: "Gill", score: 64 },
    { name: "Pant", score: 91 },
    { name: "Ashwin", score: 72 },
    { name: "Shami", score: 53 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map(p => (
          <li key={p.name}>{p.name}: {p.score}</li>
        ))}
      </ul>
      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map(p => (
          <li key={p.name}>{p.name}: {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

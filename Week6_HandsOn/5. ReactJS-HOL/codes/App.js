// src/App.js
import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React Bootcamp" startDate="06-06-2025" endDate="10-08-2025" status="ongoing" />
      <CohortDetails name="Spring Boot Camp" startDate="01-06-2025" endDate="30-06-2025" status="completed" />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   const converted = (parseFloat(rupees) / 100.15).toFixed(2); 

    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Converter (INR ➡️ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <h4>EUR: €{euro}</h4>}
    </div>
  );
}

export default CurrencyConverter;

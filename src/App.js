import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');

  const convertCurrency = () => {
    // Dummy conversion logic for demonstration.
    // You would typically call an API to get up-to-date conversion rates.
    const convertedAmount = amount; // Replace with real conversion logic
    setResult(`${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`);
  };

  return (
    <div className="converter">
      <h2>Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        id = "fromCurrency"
      >
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="JPY">JPY - Japanese Yen</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="CNY">CNY - Chinese Yuan</option>
        <option value="AUD">AUD - Australian Dollar</option>
        <option value="CAD">CAD - Canadian Dollar</option>
        <option value="CHF">CHF - Swiss Franc</option>
        <option value="HKD">HKD - Hong Kong Dollar</option>
        <option value="SGD">SGD - Singapore Dollar</option>
      </select>
      <span> To </span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        id = "fromCurrency"
      >
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="JPY">JPY - Japanese Yen</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="CNY">CNY - Chinese Yuan</option>
        <option value="AUD">AUD - Australian Dollar</option>
        <option value="CAD">CAD - Canadian Dollar</option>
        <option value="CHF">CHF - Swiss Franc</option>
        <option value="HKD">HKD - Hong Kong Dollar</option>
        <option value="SGD">SGD - Singapore Dollar</option>
      </select>
      <br />
      <button onClick={convertCurrency}>Convert</button>
      {result && <h3>{result}</h3>}
    </div>
  );
}

export default App;

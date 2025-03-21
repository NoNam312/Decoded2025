import React, { useState } from 'react';
import './App.css';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'SGD', name: 'Singapore Dollar' },
];

/* 🔹 Exchange rate constants (relative to USD) */
const EXCHANGE_RATES = {
  USD: 1,       // Base currency
  EUR: 0.91,    // 1 USD = 0.91 EUR
  JPY: 150.0,   // 1 USD = 150 JPY
  GBP: 0.78,    // 1 USD = 0.78 GBP
  CNY: 7.2,     // 1 USD = 7.2 CNY
  AUD: 1.52,    // 1 USD = 1.52 AUD
  CAD: 1.34,    // 1 USD = 1.34 CAD
  CHF: 0.89,    // 1 USD = 0.89 CHF
  HKD: 7.85,    // 1 USD = 7.85 HKD
  SGD: 1.36,    // 1 USD = 1.36 SGD
};

function App() {
  const [result, setResult] = useState('');
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');

  const convertCurrency = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setResult('Please enter a valid amount');
      return;
    }

    // Convert amount to USD first, then to the target currency
    const amountInUSD = amount / EXCHANGE_RATES[fromCurrency];
    const convertedAmount = amountInUSD * EXCHANGE_RATES[toCurrency];

    setResult(`${amount} ${fromCurrency} equals ${convertedAmount.toFixed(2)} ${toCurrency}`);
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
      
      <div className="select-container">
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {CURRENCIES.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>

        <span>To</span>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {CURRENCIES.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertCurrency}>Convert</button>
      {result && <h3>{result}</h3>}
    </div>
  );
}

export default App;


import React, { useState } from 'react';

const CurrencyWidget = () => {
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
    <div className="converter bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <br />
      <div className="flex items-center mb-3">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          id="fromCurrency"
          className="p-2 border rounded flex-1"
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
        <span className="mx-2 font-medium"> To </span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          id="toCurrency"
          className="p-2 border rounded flex-1"
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
      </div>
      <button 
        onClick={convertCurrency}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
      >
        Convert
      </button>
      {result && <h3 className="mt-4 font-medium">{result}</h3>}
    </div>
  );
};

export default CurrencyWidget;
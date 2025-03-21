import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockTracker = () => {
  const [ticker, setTicker] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [error, setError] = useState("");

  const fetchStockData = async (symbol) => {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=cukn881r01qo08i8n480cukn881r01qo08i8n48g`
      );
      const data = await response.json();

      if (!data || !data.c) {
        setError("Invalid ticker or data not found");
        return null;
      } else {
        setError("");
        return {
          symbol,
          currentPrice: data.c,
          change: data.d,
          high: data.h,
          low: data.l,
          open: data.o,
          previousClose: data.pc,
          history: generateMockData(), // Temporary mock data for the graph
        };
      }
    } catch (err) {
      setError("Error fetching stock data");
      return null;
    }
  };

  const addTicker = async () => {
    if (!ticker) return;
    const stock = await fetchStockData(ticker);
    if (stock) {
      setWatchlist((prev) => [...prev, stock]);
      setTicker("");
    }
  };

  const removeTicker = (symbol) => {
    setWatchlist(watchlist.filter((stock) => stock.symbol !== symbol));
    if (selectedStock?.symbol === symbol) setSelectedStock(null);
  };

  const selectStock = (stock) => {
    setSelectedStock(stock);
  };

  // Mock stock history data for chart
  const generateMockData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      time: `Day ${i + 1}`,
      price: (Math.random() * 10 + 100).toFixed(2),
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Stock Tracker</h1>

      {/* Search Input */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter stock ticker (e.g., AAPL)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="flex-1 p-2 rounded text-white"
        />
        <button
          onClick={addTicker}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          + Add
        </button>
      </div>

      {error && <p className="text-red-400 mb-2">{error}</p>}

      {/* Watchlist */}
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-2">Watchlist</h2>
        {watchlist.length > 0 ? (
          <ul>
            {watchlist.map((stock) => (
              <li
                key={stock.symbol}
                className="flex justify-between items-center p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition"
                onClick={() => selectStock(stock)}
              >
                <span>{stock.symbol}</span>
                <div className="flex items-center">
                  <span className={`mr-2 ${stock.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {stock.change >= 0 ? "▲" : "▼"} ${stock.change.toFixed(2)}
                  </span>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTicker(stock.symbol);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No stocks added yet</p>
        )}
      </div>

      {/* Stock Details */}
      {selectedStock && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{selectedStock.symbol} Details</h2>
          <p>Current Price: ${selectedStock.currentPrice.toFixed(2)}</p>
          <p>Open: ${selectedStock.open.toFixed(2)}</p>
          <p>High: ${selectedStock.high.toFixed(2)}</p>
          <p>Low: ${selectedStock.low.toFixed(2)}</p>
          <p>Previous Close: ${selectedStock.previousClose.toFixed(2)}</p>

          {/* Stock Price Graph */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Price Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={selectedStock.history}>
                <XAxis dataKey="time" stroke="#ccc" />
                <YAxis domain={["auto", "auto"]} stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#4CAF50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockTracker;

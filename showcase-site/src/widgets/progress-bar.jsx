import React, { useState, useEffect } from "react";

export const ProgressBarWidget = () => {
  const [yearPercent, setYearPercent] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYearPercent = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      if (currentYear !== year) {
        setYear(currentYear);
      }

      const startThisYear = new Date(year, 0, 0);
      const startNextYear = new Date(year + 1, 0, 0);
      const percent =
        (100 * (now - startThisYear)) / (startNextYear - startThisYear);
      setYearPercent(percent.toFixed(5));
    };

    updateYearPercent();
    const interval = setInterval(updateYearPercent, 1000);

    return () => clearInterval(interval);
  }, [year]);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl text-zinc-900 text-center">
      <h1 className="text-2xl font-bold">Progress Bar</h1>
      <div className="flex justify-center mb-2 w-72">
        <p>
          {year} is now {yearPercent}% complete.
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-blue-500 h-6 rounded-full transition-all duration-500"
          style={{ width: `${yearPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBarWidget;

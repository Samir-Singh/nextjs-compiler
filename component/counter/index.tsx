"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="pt-0 px-3 border bg-red-400"
      >
        -
      </button>
      <span className="p-2">{count}</span>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="pt-0 px-3 border bg-red-400"
      >
        +
      </button>
    </div>
  );
};

export default Counter;

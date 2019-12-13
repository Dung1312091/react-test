import React, { useState } from "react";

const Value = ({ value }) => {
  return <div className="result">{value}</div>;
};

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Value value={count} />
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}> Decreament</button>
    </div>
  );
}

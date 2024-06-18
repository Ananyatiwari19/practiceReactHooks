import React, { useCallback, useState } from "react";

export default function IncrementCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <button onClick={increment}>Click me {count}</button>
    </div>
  );
}

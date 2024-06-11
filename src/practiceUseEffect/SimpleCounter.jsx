import React, { useEffect, useState } from "react";

export default function SimpleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is: ${count}  `);
  }, [count]);

  function handleCounter() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleCounter}>Clicked me {count}</button>
    </div>
  );
}

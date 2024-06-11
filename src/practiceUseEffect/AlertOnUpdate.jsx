import React, { useEffect, useState } from "react";

export default function AlertOnUpdate() {
  const [name, setName] = useState("Ananya");

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name);
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange}></input>
    </div>
  );
}

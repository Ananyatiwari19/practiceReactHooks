import React, { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);
  let newText = "";

  function handleTextChange(event) {
    const newText = event.target.value;
    setText(newText);
    setCounter(newText.length);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange}></input>
      <p>Character Count: {counter}</p>
    </div>
  );
}

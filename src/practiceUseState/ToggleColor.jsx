import React, { useState } from "react";

export default function ToggleColor() {
  const [color, setColor] = useState("white");

  function toggle() {
    setColor(color == "red" ? "yellow" : "red");
    console.log(color);
  }

  return (
    <div>
      <button onClick={toggle}>Change Color</button>
      <div style={{ backgroundColor: color }}>Sample Tex</div>
    </div>
  );
}

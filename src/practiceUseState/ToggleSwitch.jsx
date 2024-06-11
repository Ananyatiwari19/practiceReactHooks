import React, { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  function manipulateToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <div>
      <button onClick={manipulateToggle}>
        {toggle ? "Turn OFF" : "Turn ON"}
      </button>
      <div>{toggle ? "The switch is on" : "The switch is off"}</div>
    </div>
  );
}

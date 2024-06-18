import React, { useCallback, useState } from "react";

export default function ToggleOnOff() {
  const [flag, setFlag] = useState(false);

  const toggle = useCallback(() => {
    setFlag((prevState) => !prevState);
  }, []);
  return (
    <div>
      <button onClick={toggle}>{flag ? "OFF" : "ON"}</button>
      <div>{flag ? "Its on" : "Its off"}</div>
    </div>
  );
}

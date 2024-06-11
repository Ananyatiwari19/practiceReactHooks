import { useState } from "react";

export default function ToggleVisibility(props) {
  const [showText, setShowText] = useState(true);

  function toggle() {
    setShowText(!showText);
    console.log(showText);
  }

  return (
    <div>
      <button onClick={toggle}>{showText ? "Hide" : "Show"}</button>
      <br />
      {showText && props.text}
    </div>
  );
}

import React, { useState } from "react";
import Button from "../childComponent/Button";

export default function ClickButton() {
  const [message, setMessage] = useState("");

  function clickHandle() {
    setMessage("Hey you have clicked this message!");
  }
  return (
    <div>
      <h1>{message}</h1>
      <Button onClick={clickHandle} />
    </div>
  );
}

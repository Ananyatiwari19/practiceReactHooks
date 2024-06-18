import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
}

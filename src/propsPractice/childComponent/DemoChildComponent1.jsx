import React from "react";

export default function DemoChildComponent(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <h1>{props.message}</h1>
    </div>
  );
}

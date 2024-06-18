import React from "react";
import DemoChildComponent from "../childComponent/DemoChildComponent1";

export default function DemoParent1() {
  const message = "Hello from parent component!";
  return (
    <div>
      <h1>Parent Component </h1>
      <DemoChildComponent message={message} />
    </div>
  );
}

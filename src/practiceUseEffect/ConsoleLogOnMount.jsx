import React, { useEffect } from "react";

export default function ConsoleLogOnMount() {
  useEffect(() => {
    console.log("Component has mounted!");
  }, []);

  return (
    <div>
      <h1>consoleLogOnMount</h1>
    </div>
  );
}

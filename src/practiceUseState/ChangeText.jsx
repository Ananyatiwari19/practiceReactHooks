import { useState } from "react";

export default function ChangeText() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>{text}</p>
    </div>
  );
}

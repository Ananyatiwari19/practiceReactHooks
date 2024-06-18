import React from "react";
import StatusMessage from "../childComponent/StatusMessage";

export default function StatusMessageRendering() {
  const status = "success";

  return (
    <div>
      <StatusMessage status={status} />
    </div>
  );
}

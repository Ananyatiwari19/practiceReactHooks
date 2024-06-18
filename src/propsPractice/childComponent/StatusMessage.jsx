import React from "react";

export default function StatusMessage({ status }) {
  let message;

  switch (status) {
    case "success":
      message = "operation was successful";
      break;
    case "error":
      message = "There was an error";
      break;
    case "loading":
      message = "Loading, please wait..";
      break;
    default:
      message = "Unknown status..";
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

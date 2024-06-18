import React from "react";
import ListAddress from "./ListAddress";

export default function ListContents({ user }) {
  return (
    <div>
      <p>Name is: {user.name}</p>
      <p>Age is: {user.age}</p>
      <ListAddress address={user.address} />
    </div>
  );
}

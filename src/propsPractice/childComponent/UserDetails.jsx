import React from "react";

export default function UserDetails({ user }) {
  return (
    <div>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
      </ul>
    </div>
  );
}

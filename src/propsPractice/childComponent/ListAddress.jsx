import React from "react";

export default function ListAddress({ address }) {
  return (
    <div>
      <p>House No. {address.houseNumber}</p>
      <p>Street {address.street}</p>
      <p>District {address.district}</p>
    </div>
  );
}

import React from "react";
//import data from "./data.js";
import ListContents from "../childComponent/ListContents";

export default function DisplayList({ data }) {
  return (
    <div>
      <h1>The Contents of the list are: </h1>
      {data.map((user) => (
        <ListContents user={user} />
      ))}
    </div>
  );
}

// import React from "react";
// import UserDetails from "../childComponent/UserDetails";

// const data = [
//   {
//     id: 1,
//     name: "Ananya",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Ashutosh",
//     age: 17,
//   },
//   {
//     id: 3,
//     name: "Anupam",
//     age: 30,
//   },
// ];

// export default function UserList() {
//   return (
//     <div>
//       <h1>User List</h1>
//       {data.map((data) => {
//         <UserDetails key={data.id} data={data} />;
//       })}
//     </div>
//   );
// }

import React from "react";
import UserDetails from "../childComponent/UserDetails";

const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 24 },
];

function UserList() {
  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;

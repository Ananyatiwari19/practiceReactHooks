// import React, { useState } from "react";

// export default function AddItemsToList() {
//   const list = [1, 2, 3, 4];

//   const [newItem, setNewItem] = useState("");
//   const [newlist, setnewList] = useState([...list]);

//   function clickListener(e) {
//     const newItem = e.target.value;
//     setnewList([...list, newItem]);
//     <li>{newlist}</li>;
//   }

//   function renderList() {
//     // setNewItem("");
//   }
//   return (
//     <div>
//       <input type="text" value={newItem} onChange={clickListener} />
//       <button onClick={renderList}>Add Item to the list</button>
//     </div>
//   );
// }

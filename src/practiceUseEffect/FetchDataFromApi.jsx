import React, { useEffect, useState } from "react";

export default function FetchDataFromApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);
  return (
    <div>
      <h2>Fetched data:</h2>

      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

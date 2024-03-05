import React, { useEffect, useState } from "react";
import axios from "axios";

const Efffect = () => {
  let [data, setdata] = useState("");
  let [count, setcount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setdata(res.data[0].email);
        console.log("Api has called");
      })
      .catch((err) => console.log(err));
  }, [count]);
  return (
    <div>
      <h1>useEffect</h1>
      <p> {data} </p>
      <button onClick={() => setcount(count + 1)}>
        {" "}
        {count <= 5 ? <p>To see</p> : <p>execed the api call limit</p>}{" "}
      </button>
    </div>
  );
};

export default Efffect;

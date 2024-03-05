import React, { useRef, useState } from "react";

const Ref = () => {
  let inputRef = useRef(null);
  let [val, setval] = useState("NaN");
  return (
    <div>
      <h1>useRef</h1>
      <h3> {val} </h3>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button
        onClick={() => {
          setval(inputRef.current.value);
        }}
      >
        Change the name
      </button>
    </div>
  );
};

export default Ref;

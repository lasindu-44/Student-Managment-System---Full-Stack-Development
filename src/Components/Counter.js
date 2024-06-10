import React, { useState } from "react";

function Counter() {
  let [number, setnumber] = useState(0);

  function Increament() {
    setnumber(++number);
  }
  return (
    <div>
      <h1>Functional Componet</h1>
      <h2>Counter = {number}</h2>
      <button onClick={(e) => Increament()}>Increament</button>
    </div>
  );
}

export default Counter;

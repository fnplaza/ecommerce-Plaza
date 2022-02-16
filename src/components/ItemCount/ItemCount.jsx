import React from "react";
import { useState } from "react";
const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);
  function onAdd() {
    setContador(contador + 1);
  }
  if (props.stock <= contador) {
    return <h1>{contador}</h1>;
  }
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => onAdd()}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
};

export default ItemCount;

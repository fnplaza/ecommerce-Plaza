import React from "react";
import { useState } from "react";

const Cart = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
};

export default Cart;

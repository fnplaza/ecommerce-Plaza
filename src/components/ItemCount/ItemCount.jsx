import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);
  const onAdd = () => {
    setContador(contador + 1);
    contador === props.stock && setContador(props.stock);
  };
  const onDown = () => {
    setContador(contador - 1);
    contador === props.initial && setContador(props.initial);
  };
  function addToCart() {
    alert(`Se añadieron ${contador} items!`);
  }
  return (
    <div className="contador">
      <div className="divButtons">
        <button
          className="botonResta"
          onClick={() => onDown()}
          disabled={contador === props.initial ? true : false}
        >
          -
        </button>
        <span className="cantidadItems">
          {props.stock === 0 ? props.stock : contador}
        </span>
        <button
          className="botonSuma"
          onClick={() => onAdd()}
          disabled={contador === props.stock ? true : false}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="botonAddCart"
          onClick={() => addToCart()}
          disabled={props.stock === 0 ? true : false}
          name="addCart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function Item({ items }) {
  return (
    <div className="containerProducts">
      <h3 className="tituloProducto">{items.nombre}</h3>
      <img className="imgProducto" src={items.imagen} alt={items.altName} />
      <p className="precioProducto">$ {items.precio}</p>
      <p className="stockProducto">Stock Disponible: {items.stock}</p>
      <button className="btnDescrProducto">Mas Info!</button>
      <ItemCount stock={items.stock} initial={1} />
    </div>
  );
}

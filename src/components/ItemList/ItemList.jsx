import React from "react";
import Item from "../Item/Item";

const ItemList = ({ product }) => {
  return (
    <>
      {product.map((item) => (
        <Item items={item} key={item.id} />
      ))}
    </>
  );
};

export default ItemList;

import React from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const params = useParams();
  console.log(params);
  return <h1>{params.id}</h1>;
};

export default ItemDetailContainer;

import React from "react";

const item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title text-uppercase text-center">{item.nombre}</h5>
        <p className="card-text text-center">stock {item.stock}</p>
        <button className="btn btn-primary mx-auto d-flex text-uppercase">ver mas</button>
      </div>
    </div>
  );
};

export default item;

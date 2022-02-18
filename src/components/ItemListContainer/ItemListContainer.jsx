import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ textillo }) => {
  const data = [
    { nombre: "Solera", imagen:"x" , precio: 4200, stock: 10, altName: "Solera" },
    { nombre: "Remera", imagen:"y", precio: 500, stock: 5, altName: "Remera" },
  ];
  console.log(data.map((d) => d.nombre));
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
      //reject("Error!");
    });
    tarea
      .then((resultado) => {
        //!Resultados fullfiled (ok)
        setInfo(resultado);
      })
      .catch((err) => {
        //!Resultados rejected || no esperado (no ok)
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>{info && <ItemList product={info} />}</div>
    </div>
  );
};

export default ItemListContainer;

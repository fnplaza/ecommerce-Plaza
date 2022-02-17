import React from "react";
//Si la funcion va con parametro && en el onclick adelante
// debe ir un arrow function

const Prueba = () => {
  const getName = ({ name }) => {
    alert(`Hola ${name}`);
  };
  const haceAlgo = (e) => {
    alert(e.key);
  };
  const haceAlgoB = (e) => {
    alert(e.target.value);
  };
  return (
    (<button onClick={() => getName({ name: "Franco" })}>Dame nombre</button>),
    (<input type="text" onKeyDown={haceAlgo} />),
    (<input type="text" onChange={haceAlgoB} />)
  );
};

export default Prueba;

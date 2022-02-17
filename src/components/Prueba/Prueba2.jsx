import React from "react";
import { useState } from "react";

const Select = ({ option, onSelect, defaOptions }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {option.map((o) => (
        <option value={o.value}>{o.text}</option>
      ))}
    </select>
  );
};
const Prueba2 = () => {
  const [first, setFirset] = useState("");
  const opt = [
    { value: 1, text: "azul" },
    { value: 2, text: "rojo" },
  ];
  const handleChange = (value) => {
    setFirset(value);
  };
  return (
    <>
      <Select options={opt} onSelect={handleChange} />
    </>
  );
};

export default Prueba2;

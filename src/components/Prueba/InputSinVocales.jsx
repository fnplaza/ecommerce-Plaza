import React from "react";

const InputSinVocales = () => {
  const SinVocales = (e) => {
    if (
      e.key === "a" ||
      e.key === "e" ||
      e.key === "i" ||
      e.key === "o" ||
      e.key === "u"
    ) {
      return;
    } else {
      console.log(e.value);
    }
  };
  return (
    <div>
      <input type="text" onKeyDown={SinVocales} />
    </div>
  );
};

export default InputSinVocales;

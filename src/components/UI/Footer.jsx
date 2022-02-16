import React from "react";

const Footer = ({ textoFooter }) => {
  return (
    <footer className="bg-dark text-light text-center">
      <p>{textoFooter ? textoFooter : "Footer"}</p>
    </footer>
  );
};

export default Footer;

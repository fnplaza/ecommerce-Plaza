import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/UI/Footer";
import Button from "../components/UI/Button";
import Accordion from "../components/Accordion/Accordion";
import ItemCount from "../components/ItemCount/ItemCount";
import Prueba from "../components/Prueba/Prueba";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar textoDeNav={"HopeIndumentaria"} />
      <ItemCount stock={5} initial={1} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="../components/Prueba" element={<Prueba />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Accordion />
      <Footer textoFooter={"Facu Plaza 2022"} />
    </BrowserRouter>
  );
};

export default Rutas;

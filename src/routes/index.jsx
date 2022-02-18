import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/UI/Footer";
import Accordion from "../components/Accordion/Accordion";
import ItemCount from "../components/ItemCount/ItemCount";
import Prueba from "../components/Prueba/Prueba";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar textoDeNav={"HopeIndumentaria"} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="../components/Prueba" element={<Prueba />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>      
      <Footer textoFooter={"Facu Plaza 2022"} />
    </BrowserRouter>
  );
};

export default Rutas;

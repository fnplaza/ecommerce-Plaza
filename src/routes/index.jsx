import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/UI/Footer";
import Button from "../components/UI/Button";
import Accordion from "../components/Accordion/Accordion";
import Cart from "../components/Cart/Cart";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar textoDeNav={"HopeIndumentaria"} />
      <Cart />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Accordion />
      <Button className="btn btn-danger mx-4" text="CUIDADO"></Button>
      <Footer textoFooter={"Facu Plaza 2022"} />
    </BrowserRouter>
  );
};

export default Rutas;

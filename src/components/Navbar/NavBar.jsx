/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({ textoDeNav }) {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {textoDeNav ? textoDeNav : "Barrita"}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarWithDropdown"
            aria-controls="navbarWithDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarWithDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <l className="nav-link active" aria-current="page" href="#">
                  Home
                </l>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mujer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hombre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Niños
                </a>
              </li>
              <li className="nav-item">
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

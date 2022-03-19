import { ReactComponent as Icon } from "../../assets/clone.svg";
import "../../bootstrap/style.css";
import React, { Component, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/context";
import { Link, NavLink } from "react-router-dom";
import storage from "../../utils/storage";


function Header({ className }) {

  const { isLogged, handleLogout } = useContext(AuthContext);
  const name = storage.get('name')
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a href="/adverts">
          <div className="navbar-brand">
            <Icon width="32" height="42" />
          </div>
        </a>
     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse element-menu" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/adverts/new"
              >
                Subir producto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Mensajes
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                @{name}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    Mis Anuncios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Mis Favoritos
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Mi Cuenta
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            {
              isLogged ?
                <button className="btn btn-outline-dark" onClick={handleLogout}>
                  <i className=" me-1"></i>
                  Log Out
                </button>
                :
                <Link to="/login">
                  <button className="btn btn-outline-dark" >
                    <i className=" me-1"></i>
                    Log In
                  </button>

                </Link>
            }
          </form>
        </div >
      </div >
    </nav >
  );
}
export default Header;

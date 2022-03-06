import React, { Component } from "react";
import "../../bootstrap/style.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a href="/adverts">
            <img className="navbar-brand" src="clone.png" />
          </a>
          <form class="form-inline">
            <input
              class="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  @user
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
              <button className="btn btn-outline-dark ml-2" type="submit">
                <i className=" me-1"></i>
                Log In
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;

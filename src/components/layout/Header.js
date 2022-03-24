import { ReactComponent as Icon } from "../../assets/clone.svg";
import "../../bootstrap/style.css";
import React, { Component, useContext, useEffect } from "react";
import AuthContext from "../auth/context";
import { Link, NavLink } from "react-router-dom";
import storage from "../../utils/storage";
import './styles.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import es from './../../img/bandera-spain.png'
import uk from './../../img/united-kingdom.png'

function Header({history, ...props}) {
  const [t, i18n] = useTranslation("common");
  const { isLogged, handleLogout } = useContext(AuthContext);
  const name = storage.get("name");
  
  useEffect(() => {
	  if (localStorage.getItem("i18nextLng")?.length > 2) {
		  i18next.changeLanguage("es")
	  }
  }, []);
	
	const changeToEnglish = event => {
	i18n.changeLanguage('en');
	localStorage.getItem("i18nextLng")
    event.preventDefault()
  }
  const changeToSpanish = event => {
	i18n.changeLanguage('es');
	localStorage.getItem("i18nextLng")
    event.preventDefault();
  }
	



	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container px-4 px-lg-5">
		<a href="/adverts">
		<div className="navbar-brand">
		<Icon width="32" height="42" />
    </div>
		<button className="banderas" onClick={changeToSpanish} ><img src={es} alt='bandera-españa'/></button> 
    	<button className="banderas" onClick={changeToEnglish} ><img src={uk} alt='bandera-UK'/></button>      
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
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-lg-4">
		<li className="nav-item">
		<a
		className="nav-link"
		aria-current="page"
		href="/adverts/new"
		>
		{t("header.subir-producto")}
		</a>
		</li>
		<li className="nav-item">
		<a className="nav-link" href="#!">
		{t("header.mensaje")}
		</a>
		</li>
		{isLogged ? (
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
			{t("header.mis-anuncios")}
			</a>
			</li>
			<li>
			<a className="dropdown-item" href="#!">
			{t("header.mis-favoritos")}
			</a>
			</li>
			<li>
			<hr className="dropdown-divider" />
			</li>
			<li>
			<a className="dropdown-item" href="/profile">
			{t("header.mi-cuenta")}
			</a>
			</li>
			<li>
			<hr className="dropdown-divider" />
			</li>
			<li>
			<a className="deleteUser dropdown-item" href="/deleteUser">
			{t("header.eliminar-cuenta")}
			</a>
			</li>
			</ul>
			</li>
		) : (
			<div></div>
		)}
          </ul>
		<form className="d-flex">
		{isLogged ? (
			<button className="btn btn-outline-dark" onClick={handleLogout}>
			<i className=" me-1"></i>
			Log Out
			</button>
		) : (
			<Link to="/login">
			<button className="btn btn-outline-dark">
			<i className=" me-1"></i>
			Log In
			</button>
			</Link>
		)}
		</form>
		</div>
		</div>
		</nav>
	);
}
export default Header;
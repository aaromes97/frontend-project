import { ReactComponent as Icon } from "../../assets/clone.svg";
import "../../bootstrap/style.css";
import React, { Component, useContext } from "react";
import AuthContext from "../auth/context";
import { Link, NavLink } from "react-router-dom";
import storage from "../../utils/storage";
import './styles.css'

function Header() {
	const { isLogged, handleLogout } = useContext(AuthContext);
	const name = storage.get("name");
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container px-4 px-lg-5">
		<a href="/adverts">
		<div className="navbar-brand">
		<Icon width="32" height="42" />
		</div>
		</a>
		<form className="form-inline">
		<input
		className="form-control mr-1"
		type="search"
		placeholder="Search"
		aria-label="Search"
		/>
		<button className="btn btn-outline-success my-2 mr-1" type="submit">
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
		className="nav-link"
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
			<a className="dropdown-item" href="/profile">
			Mi Cuenta
			</a>
			</li>
			<li>
			<hr className="dropdown-divider" />
			</li>
			<li>
			<a className="deleteUser dropdown-item" href="/deleteUser">
			Eliminar Cuenta
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

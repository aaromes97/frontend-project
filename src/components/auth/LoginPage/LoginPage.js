import { useState } from "react";
import '../../../bootstrap/style.css';
import './login.css';
import logo from './img/login.png';

function LoginPage() {

	const [value, setValue]= useState({username:'', password:''})



	const handleChange = event => {
		setValue(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = event => {
		console.log(event)
		event.preventDefault();
		//call to api - send value
	}


	return	<section className="ftco-section">
		<div className="container">
		<div className="row justify-content-center">
		<div className="col-md-6 text-center mx-4">
		<h2 className="heading-section">WallaTrox</h2>
		</div>
		</div>
		<div className="row justify-content-center">
		<div className="col-md-6 col-lg-5">
		<div className="login-wrap p-4 p-md-5">
		<div className="icon d-flex align-items-center justify-content-center">
		<img className="logoLogin" src={logo}></img>
		</div>
		<h3 className="text-center mb-4">Inicia Sesión</h3>
		<form className="login-form" onSubmit={handleSubmit}>
		<div className="form-group">	
		<input className="form-control rounded-left"
	placeholder="Usuario"
	type="text" 
	name="username"
	value={value.username}
	onChange={handleChange} />
		</div>
		<div className="form-group d-flex">
		<input className="form-control rounded-left"
	placeholder="Contraseña"
	type="password"
	name="password"
	value={value.password}
	onChange={ handleChange}/>
		</div>
		<div className="form-group d-md-flex">
		<button className="btn btn-primary rounded submit p-3 px-5"
	type="submit"
	disabled={!value.username || !value.password}>Log In</button>
		</div>
		</form>                </div>
		</div>
		</div>
		</div>
		</section>
};




export default LoginPage;

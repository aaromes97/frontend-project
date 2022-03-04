import { useState } from "react";
import '../../../bootstrap/style.css';
import './login.css';
import logo from './img/login.png';
import { login } from "../LoginPage/service";


function LoginPage({ onLogin }) {

	const [value, setValue]= useState({email:'', password:''})
	const [error, setError]= useState(null)
	const [saveValue, setSaveValue] = useState(false)

	const resetError = () => setError(null)
	
	const handleChange = event => {
		setValue(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};
	 const guardarToken = () => {
        setSaveValue((prevState) => (prevState ? false : true));
    };
    

	const handleSubmit =  async event => {
		event.preventDefault();
		resetError();
		//call to api - send value
		try {
			await login(value, saveValue);
			onLogin();
			console.log(value)
			
		} catch (error) {
			console.log(error)
			setError(error)
		}
	}


	return	<section className="ftco-section">
		<div className="container">
		<div className="row justify-content-center">
		<div className="col-md-6 text-center mx-4">
		<h2 className="heading-section">ClonePop</h2>
		</div>
		</div>
		<div className="row justify-content-center">
		<div className="col-md-6 col-lg-5">
		<div className="login-wrap p-4 p-md-5">
		<div className="icon d-flex align-items-center justify-content-center">
		<img className="logoLogin" src={logo} alt="logo"></img>
		</div>
		<h3 className="text-center mb-4">Inicia Sesión</h3>
		<form className="login-form" onSubmit={handleSubmit}>
		<div className="form-group">	
		<input className="form-control rounded-left"
	placeholder="Usuario"
	type="text" 
	name="email"
	value={value.email}
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
	disabled={!value.email || !value.password}>Log In</button>
		</div>
						</form>
		</div>
		</div>
		</div>
						{error && <div>{error.message }</div>}</div>
		</section>
};




export default LoginPage;

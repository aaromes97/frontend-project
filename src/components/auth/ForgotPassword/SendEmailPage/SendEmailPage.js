import { useState } from "react";
import '../../../../bootstrap/style.css';
import '../../auth.css';
import logo from '../../LoginPage/img/login.png';
import { login } from "../SendEmailPage/service";




function ForgotPasswordSendEmailPage({ history }) {

	const [value, setValue] = useState({ email: '' })
	const [error, setError] = useState(null)
	//para implementar Spinner de Loading 
	const [isLoading, setIsLoading] = useState(false)


	//reseteamos error 
	const resetError = () => setError(null)

	const handleChange = event => {
		setValue(prevState => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};



	const handleSubmit = async event => {
		event.preventDefault();
		setIsLoading(true)
		resetError();
		//llamamos al  api - enviamos value
		try {
			await login(value);
			setIsLoading(false)
			window.alert("Correo enviado correctament")
			history.push('/login')
			console.log(value)

		} catch (error) {
			setIsLoading(false)
			setError(error)
		}
	}


	return <section className="ftco-section">
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
						<h3 className="text-center mb-4">Reestablecer Contraseña</h3>
						<form className="login-form" onSubmit={handleSubmit}>
							<div className="form-group">

								<input className="form-control rounded-left"
									placeholder="Email"
									type="email"
									name="email"
									value={value.email}
									onChange={handleChange} />
							</div>
							<div className="form-group d-md-flex">
								<button className="btn btn-primary rounded submit p-3 px-5"
									type="submit"
									disabled={isLoading || !value.email}>Enviar</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{error && <div onClick={resetError} className="error-msg"> <i class="fa fa-times-circle"></i>{error.message}</div>}</div>
	</section>
};



export default ForgotPasswordSendEmailPage;

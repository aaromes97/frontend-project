
import { useState } from "react";
import '../../../bootstrap/style.css';
import './login.css';
import logo from './img/login.png';
import { login } from "../LoginPage/service";
import { AuthContextConsumer } from "../context";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import es from "./../../../img/bandera-spain.png";
import uk from "./../../../img/united-kingdom.png"
import { useTranslation } from "react-i18next";

function LoginPage({ onLogin, history, location }) {
	const [value, setValue] = useState({ name: "", password: "" });
	const [error, setError] = useState(null);
	//para implementar Spinner de Loading
	const [isLoading, setIsLoading] = useState(false);
	const [t, i18n] = useTranslation("common");

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
			onLogin();
			const { from } = location.state || { from: { pathname: "/adverts" } };
			history.replace(from);

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
						<h3 className="text-center mb-4">{t("login.inicia-sesion")}</h3>
						<form className="login-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<input className="form-control rounded-left"
									placeholder={t("login.usuario")}
									type="text"
									name="name"
									value={value.name}
									onChange={handleChange} />
							</div>
							<div className="form-group d-flex">
								<input className="form-control rounded-left"
									placeholder={t("login.contrase??a")}
									type="password"
									name="password"
									value={value.password}
									onChange={handleChange} />
							</div>
							<button className="banderas" onClick={changeToSpanish} ><img src={es} alt='bandera-espa??a' /></button>
							<button className="banderas" onClick={changeToEnglish} ><img src={uk} alt='bandera-UK' /></button>
							<div className="sign up">
								<Link to="/register">{t("login.crear-usuario")}</Link>
							</div>

							<div>
								<Link to="/forgot-password">{t("login.contrase??a-perdida")}</Link>
							</div>
							<div className="form-group d-md-flex">

								<button className="btn btn-primary rounded submit p-3 px-5"
									type="submit"
									disabled={!value.name || !value.password}>Login</button>
								{isLoading && <button className="btn btn-primary rounded submit p-3 px-5" disabled>
									<Loading>Loading</Loading>
								</button>}
							</div>
						</form>
					</div>
				</div>
			</div>
			{error && <div onClick={resetError} className="error-msg"> <i class="fa fa-times-circle"></i>{error.message}</div>}</div>
	</section>
};




const ConnectedLoginPage = (props) => <AuthContextConsumer>{(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}</AuthContextConsumer>
export default ConnectedLoginPage;


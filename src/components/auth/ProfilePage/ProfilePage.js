import { useState } from "react";
import Button from "../../common/Button";
import Layout from "../../layout/layout";
import storage from "../../../utils/storage";
import './styles.css'
import { updateProfile } from "./service";
import { useTranslation } from "react-i18next";

function ProfilePage() {
	const [error, setError] = useState(null);
	const [success, setMessage] = useState(null);
	const autor = storage.get("name");
	const email = storage.get("email");
	const id = storage.get("id");
	const resetError = () => setError(null);
	const resetMessage = () => setMessage(null);
	const [t] = useTranslation("common");

	// const changeToEnglish = event => {
	// 	i18n.changeLanguage('en');
	// 	localStorage.getItem("i18nextLng")
	// 	event.preventDefault()
	// }
	// const changeToSpanish = event => {
	// 	i18n.changeLanguage('es');
	// 	localStorage.getItem("i18nextLng")
	// 	event.preventDefault();
	// }

	const [value, setValue] = useState({
		user: autor,
		email: email,
		password: "",
	});

	const handleChange = (event) => {
		setValue((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const resultDataUpdated = await updateProfile(value, id);
			storage.set("name", resultDataUpdated.data.user);
			storage.set("email", resultDataUpdated.data.email);
			setMessage(resultDataUpdated)
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Layout title="Actualizar perfil">
			<div className="updateProfile bordered ">
				<div className="formNew">
					<form onSubmit={handleSubmit}>
						<h1 className="formTitle">{t("profile.title")}</h1>
						<br></br>
						<div className="titleField"><p className="dataField">{t("profile.usuario")}</p></div>
						<input
							type="text"
							name="user"
							label="Usuario"
							placeholder={t("profile.usuario")}
							className="loginForm-field"
							value={value.user}
							onChange={handleChange}
							required
							autoFocus
						></input>
						<br></br>
						<div className="titleField"><p className="dataField">Email</p></div>
						<input
							type="email"
							name="email"
							label="Email"
							placeholder="Email"
							className="loginForm-field"
							value={value.email}
							onChange={handleChange}
							required
							autoFocus
						></input>
						<br></br>
						<div className="titleField"><p className="dataField">{t("profile.contraseña")}</p></div>
						<input
							type="password"
							name="password"
							label="Password"
							placeholder={t("profile.nueva-contraseña")}
							className="loginForm-field"
							value={value.password}
							onChange={handleChange}
						></input>
						<br></br>

						<br></br>
						<div className="newAdPage-footer mt-2">
							<Button
								type="submit"
								className="newAdPage-submit"
								variant="primary"
							>
								{t("profile.actualizar")}
							</Button>
						</div>
					</form>
				</div>
				{error && (
					<div onClick={resetError} className="error-msg">
						{" "}
						<i className="fa fa-times-circle"></i>
						{error.message}
					</div>
				)}
				{success && (
					<div onClick={resetMessage} className="success-msg">
						{" "}
						<i className="fa fa-times-circle"></i>
						{success.message}
					</div>
				)}
			</div>
		</Layout>
	);
}

export default ProfilePage;

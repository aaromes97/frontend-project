import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import Layout from "../../layout/layout";
import storage from "../../../utils/storage";
import './styles.css'
import { deleteUser } from "./service";
import { removeAuthorizationHeader } from "../../../api/client";
import { useTranslation } from "react-i18next";

function ProfilePage() {
	const history = useHistory();
	const [error, setError] = useState(null);
	const [success, setMessage] = useState(null);
	const email = storage.get("email");
	const resetError = () => setError(null);
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


	const handleChange = async (event) => {
		return history.push("/adverts");
	};
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await deleteUser(email);
			removeAuthorizationHeader();
			storage.remove("auth");
			storage.remove("name");
			storage.remove("email");
			storage.remove("id");
			window.location.reload();
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Layout title="Eliminar Cuenta">
		<div className="formNew">
		<h1 className="formTitle">{t("delete_user.eliminar-cuenta")}</h1>
		<br></br>

		<form className="login-form" onSubmit={handleSubmit}>
		<div className="deleteUserDivGeneral">
		<p className="text">{t("delete_user.desea-eliminar")}</p>
		<button	className="deleteUserCancelButton" type="button" onClick={handleChange}>{t("delete_user.cancelar")}</button>
		<button	className="deleteUserButton" type="submit">{t("delete_user.eliminar")}</button>
		</div>
		</form>
		{error && (
			<div onClick={resetError} className="error-msg">
			{" "}
			<i className="fa fa-times-circle"></i>
			{error.message}
			</div>
		)}
		</div>
		</Layout>
	);
}

export default ProfilePage;

import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import Layout from "../../layout/layout";
import storage from "../../../utils/storage";
import './styles.css'
import { deleteUser } from "./service";
import { removeAuthorizationHeader } from "../../../api/client";

function ProfilePage() {
	const history = useHistory();
	const [error, setError] = useState(null);
	const [success, setMessage] = useState(null);
	const email = storage.get("email");
	const resetError = () => setError(null);

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
		<h1 className="formTitle">Eliminar Cuenta</h1>
		<br></br>

		<form className="login-form" onSubmit={handleSubmit}>
		<div className="deleteUserDivGeneral">
		<p className="text">¿Desea eliminar la cuenta?</p>
		<button	className="deleteUserCancelButton" type="button">Cancelar</button>
		<button	className="deleteUserButton" type="submit">Eliminar</button>
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

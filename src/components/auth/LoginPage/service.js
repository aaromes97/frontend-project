import client, {
	removeAuthorizationHeader,
	setAuthorizationHeader,
} from "../../../api/client";
import storage from "../../../utils/storage";

export const login = (credentials, saveValue) => {
	return client
		.post("/api/authenticate", credentials)
		.then(({ token, name, email, id }) => {
			setAuthorizationHeader(token);
			//guardamos el token en LocalStorage
			storage.set("auth", token);
			storage.set("name", name);
			storage.set("email", email);
			storage.set("id", id);
		});
};

export const logout = () =>
	Promise.resolve().then(() => {
		removeAuthorizationHeader();
		storage.remove("auth");
	});

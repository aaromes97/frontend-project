import { getAd } from "../service";
import { useHistory } from "react-router";
import CreatableSelect from "react-select/creatable";
import Button from "../../common/Button";
import Layout from "../../layout/layout";
import { editAd } from "../service";
import { useTranslation } from "react-i18next"
import storage from "../../../utils/storage";
import { useEffect, useMemo, useState } from "react";
const components = {
	DropdownIndicator: null,
};
function EditDetailAdvertPage(props) {
	const { t } = useTranslation("common")
	const history = useHistory();
	const autor = storage.get("name");
	const [ad, setAd] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const idState = props.location.state;
	let [value, setValue] = useState({
		nombre: '',
		descripcion: '',
		venta: "",
		precio: null,
		tags: [],
		foto: null,
		autor: autor,
		reservado: false,
		vendido: false,
	});

	useEffect(() => {
		getAd(idState)
			.then((ads) => {
				setAd(ads.results)
				setValue({
					nombre: ads.results[0].nombre,
					descripcion: ads.results[0].descripcion,
					venta: ads.results[0].venta,
					precio: ads.results[0].precio,
					tags: ads.results[0].tags,
					foto: ads.results[0].foto,
					reservado: ads.results[0].reservado,
					vendido: ads.results[0].vendido,
				})
			})
	}, [idState]);

	const handleSelect = (newValue, actionMeta) => {
		console.group("Value Changed");
		const tags = newValue.map((tag) => tag.value);
		console.log(tags);
		// console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
		setValue((prevState) => ({
			...prevState,
			tags: tags,
		}));
	};

	const handleChange = (event) => {
		setValue((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	// no peritimos el envio submit hasta que este todo completo, menos la foto que no es requerida
	const elementDisabled = useMemo(
		() => isLoading,
		[isLoading],
	);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			let newAdvert = new FormData();
			if (value.nombre) {
				newAdvert.append("nombre", value.nombre);
			}
			if (value.descripcion) {
				newAdvert.append("descripcion", value.descripcion);
			}
			if (value.venta) {
				newAdvert.append("venta", value.venta);
			}
			if (value.precio) {
				newAdvert.append("precio", value.precio);
			}
			if (value.tags) {
				newAdvert.append("tags", value.tags);
			}
			if (value.foto) {
				newAdvert.append("foto", value.foto);
			}
			const createdAdvert = await editAd(idState, newAdvert);
			setIsLoading(false);
			history.push(`/adverts/${createdAdvert.result.nombre}-${createdAdvert.result._id}`);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			if (error.status === 401) {
				return history.push("/login");
			}
		}
	};

	return (
		<>
			<Layout title="Creación de un nuevo anuncio h1">
				<div className="newAdvertPage bordered ">
					<div className="formNew">
						<form onSubmit={handleSubmit}>
							<h1 className="formTitle">&bull; {t("editAdvert.editar-producto")} &bull;</h1>
							<br></br>
							<input
								type="text"
								name="nombre"
								label="Nombre"
								placeholder={t("newAdvert.nombre-producto")}
								className="loginForm-field"
								value={value.nombre}
								onChange={handleChange}
								autoFocus
							></input>
							<br></br>
							<label htmlFor="descripcion">{t("newAdvert.descripcion")}</label>

							<textarea
								placeholder={t("newAdvert.descripcion-producto")}
								id="descripcion"
								name="descripcion"
								rows="3"
								cols="25"
								value={value.descripcion}
								onChange={handleChange}
							></textarea>{" "}
							<br></br>
							<label htmlFor="venta">{t("newAdvert.estado")}</label>
							<br></br>
							<select
								name="venta"
								value={value.venta}
								onChange={handleChange}
							>
								<option value="">--</option>
								<option value="true">{t("newAdvert.venta")}</option>
								<option value="false">{t("newAdvert.compra")} </option>
							</select>
							<br></br>
							<br></br>
							<input
								type="number"
								name="precio"
								min="0"
								label="Precio"
								placeholder={t("newAdvert.precio-producto")}
								className="loginForm-field"
								value={value.precio}
								onChange={handleChange}
							></input>
							<br></br>
							<CreatableSelect
								className="CreatableSelect"
								isMulti
								onChange={handleSelect}
								components={components}
								placeholder={t("newAdvert.tags")}
							/>
							<br></br>
							<div className="advertPhoto mb-3">
								<input
									name="foto"
									type="file"
									onChange={(e) =>
										setValue((prevState) => ({
											...prevState,
											[e.target.name]: e.target.files[0],
										}))
									}
								/>
								<br></br>
							</div>
							<p className="mb-3" >{t("editAdvert.info")}</p>
							<div className="newAdPage-footer mt-2">
								<Button
									type="submit"
									className="newAdPage-submit"
									variant="primary"
									disabled={elementDisabled}
								>
									{t("newAdvert.crear-anuncio")}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default EditDetailAdvertPage;

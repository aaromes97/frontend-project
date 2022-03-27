import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import CreatableSelect from "react-select/creatable";
import Button from "../../common/Button";
import Layout from "../../layout/layout";
import { createAd } from "../service";
import { useTranslation } from "react-i18next"
import storage from "../../../utils/storage";

const components = {
  DropdownIndicator: null,
};



function NewAdvertPage() {
  const {t}= useTranslation("common")
  const history = useHistory();
  const [error, setError] = useState(null);
  const autor = storage.get("name");
  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    venta: "",
    precio: null,
    tags: [],
    foto: null,
    autor: autor,
    reservado: false,
    vendido: false,
  });

  const [createdAdvertId, setCreatedAdvertId] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newAdvert = new FormData();
      newAdvert.append("nombre", value.nombre);
      newAdvert.append("descripcion", value.descripcion);
      newAdvert.append("venta", value.venta);
      newAdvert.append("precio", value.precio);
      newAdvert.append("tags", value.tags);
      newAdvert.append("foto", value.foto);
      newAdvert.append("autor", value.autor);
      newAdvert.append("reservado", value.reservado);
      newAdvert.append("vendido", value.vendido);
      const createdAdvert = await createAd(newAdvert);
      setCreatedAdvertId(createdAdvert.result._id);

      history.push("/");
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push("/login");
      }
      setError(error);
    }
  };
  // if (createdAdvertId) {
  //   return <Redirect to={`/`} />;
  // }
  return (
    <Layout title="Creación de un nuevo anuncio h1">
      <div className="newAdvertPage bordered ">
        <div className="formNew">
          <form onSubmit={handleSubmit}>
            <h1 className="formTitle">&bull; {t("newAdvert.alta-producto")} &bull;</h1>
            <br></br>
            <input
              type="text"
              name="nombre"
              label="Nombre"
              placeholder={t("newAdvert.nombre-producto")}
              className="loginForm-field"
              value={value.nombre}
              onChange={handleChange}
              required
              autofocus
            ></input>
            <br></br>
            <label for="descripcion">{t("newAdvert.descripcion")}</label>

            <textarea
              placeholder={t("newAdvert.descripcion-producto")}
              id="descripcion"
              name="descripcion"
              rows="3"
              cols="25"
              required
              onChange={handleChange}
            ></textarea>{" "}
            <br></br>
            <label for="venta">{t("newAdvert.estado")}</label>
            <br></br>
            <select
              name="venta"
              value={value.venta}
              required
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
              required
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
            <div className="advertPhoto">
              <input
                name="foto"
                type="file"
                required
                onChange={(e) =>
                  setValue((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.files[0],
                  }))
                }
              />
              <br></br>
            </div>
            <br></br>
            <div className="newAdPage-footer mt-2">
              <Button
                type="submit"
                className="newAdPage-submit"
                variant="primary"
              >
                {t("newAdvert.crear-anuncio")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewAdvertPage;

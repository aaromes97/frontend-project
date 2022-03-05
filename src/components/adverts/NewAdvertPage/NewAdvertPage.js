import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import Button from "../../common/Button";
import Layout from "../../layout/layout";
import { createAd } from "../service";

function NewAdvertPage() {
  const history = useHistory();
  const [error, setError] = useState(null);

  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    venta: true,
    precio: "",
    tags: [],
  });
  const [createdAdId, setCreatedAdId] = useState("");
  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(value);
      const createdAdvert = await createAd(value);
      setCreatedAdId(createdAdvert.id);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push("/login");
      }
      setError(error);
    }
  };
  if (createdAdId) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout title="Creación de un nuevo anuncio">
      <div className="newAdvertPage bordered">
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              label="Nombre"
              placeholder="Nombre del producto"
              className="loginForm-field"
              value={value.nombre}
              onChange={handleChange}
              required
              autofocus
            ></input>
            <br></br>
            <label for="descripcion">Descripcion:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="3"
              cols="25"
              onChange={handleChange}
            ></textarea>{" "}
            <br></br>
            <select name="venta" value={value.venta} onChange={handleChange}>
              <option value="true">Venta</option>
              <option value="false" selected>
                Compra
              </option>
            </select>
            <br></br>
            <input
              type="number"
              name="precio"
              label="Precio"
              placeholder="Precio del producto"
              className="loginForm-field"
              value={value.precio}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <label for="tags">Tags:</label>
            <textarea
              id="tags"
              name="tags"
              rows="1"
              cols="25"
              onChange={handleChange}
            ></textarea>{" "}
            <br></br>
            <input name="foto" type="file" onChange={handleChange} />
            <br></br>
            <div className="newAdPage-footer">
              <Button
                type="submit"
                className="newAdPage-submit"
                variant="primary"
              >
                Crear Anuncio
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default NewAdvertPage;
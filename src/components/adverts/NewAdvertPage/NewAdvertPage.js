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
    venta: "",
    precio: null,
    tags: [],
    foto: null
  });
  const [createdAdvertId, setCreatedAdvertId] = useState("");
  const handleChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newAdvert = new FormData()
      newAdvert.append("nombre", value.nombre)
      newAdvert.append("descripcion", value.descripcion)
      newAdvert.append("venta", value.venta)
      newAdvert.append("precio", value.precio)
      newAdvert.append("tags", value.tags)
      newAdvert.append("foto", value.foto)

      const createdAdvert = await createAd(newAdvert);
      setCreatedAdvertId(createdAdvert.data.result.id);
      console.log(createdAdvertId)
      history.push("/")
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
            <label htmlFor="descripcion">Descripcion:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="3"
              cols="25"
              required
              onChange={handleChange}
            ></textarea>{" "}
            <br></br>
            <select name="venta" value={value.venta} required onChange={handleChange}>
              <option value="">--</option>
              <option value="true">Venta</option>
              <option value="false"> Compra </option>
            </select>
            <br></br>
            <input
              type="number"
              name="precio"
              min="0"
              label="Precio"
              placeholder="Precio del producto"
              className="loginForm-field"
              value={value.precio}
              onChange={handleChange}
              required
            ></input>
            <br></br>
            <label htmlFor="tags">Tags:</label>
            <textarea
              id="tags"
              name="tags"
              rows="1"
              cols="25"
              onChange={handleChange}
            ></textarea>{" "}
            <br></br>
            <div className="advertPhoto">
              <input
                name="foto"
                type="file"
                required
                onChange={(e) => setValue(prevState => ({
                  ...prevState,
                  [e.target.name]: e.target.files[0]
                }))}
              /><br></br>
            </div>
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

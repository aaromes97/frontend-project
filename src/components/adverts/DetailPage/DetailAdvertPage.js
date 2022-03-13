import React from "react";
import { useEffect, useState, useMemo } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import Layout from "../../layout/layout";
import { getAd, deleteAd, editAd } from "../service";
import storage from "../../../utils/storage";
import borrar from "../../../assets/eliminar.png";
import vender from "../../../assets/apreton-de-manos.png";
import reservar from "../../../assets/guardar-instagram.png";
import editar from "../../../assets/editar.png";

// import Confirmation from './Confirmation';
// import './Confirmation.css';

function DetailAdvertPage() {
  const history = useHistory();
  const { advertId } = useParams();
  const [advert, setAdvert] = useState(null);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const name = storage.get("name");
  const [estadoVenta, setEstadoVenta] = useState(false);
  // const history = useHistory();
  // const location = useLocation();
  const part = advertId.split("-");
  const _id = part[1];

  useEffect(() => {
    getAd(_id)
      .then((ads) => setAdvert(ads.results))
      .catch((error) => setError(error));
  }, [_id]);

  const handleConfirmDelete = async (event) => {
    event.preventDefault();
    console.log(advert);

    setDisplay(true);
  };
  const handleReserva = async (event) => {
    event.preventDefault();
    const reserva = true;
    try {
      let reservar = new FormData();
      reservar.append("reservado", reserva);
      window.location.reload();
      await editAd(_id, reservar);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push("/login");
      }
      setError(error);
    }
  };
  const handleLiberarReserva = async (event) => {
    event.preventDefault();
    try {
      let reservar = new FormData();
      reservar.append("reservado", false);
      window.location.reload();
      await editAd(_id, reservar);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push("/login");
      }
      setError(error);
    }
  };
  const handleVender = async (event) => {
    event.preventDefault();
    try {
      let reservar = new FormData();
      let vender = new FormData();
      reservar.append("reservado", false);
      vender.append("vendido", true);
      window.location.reload();
      await editAd(_id, vender);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        return history.push("/login");
      }
      setError(error);
    }
  };
  // Procedimiento para borrar el anuncio
  // const handleDelete = async () => {
  //     try {
  //         await deleteAdvert(advertId);
  //         setIsLoading(false);
  //         const { from } = location.state || { from: { pathname: "/adverts" } };
  //         history.replace(from);
  //     } catch (error) {
  //         setError(error);
  //         setIsLoading(false);
  //     }
  // }

  const buttonDisabled = useMemo(() => isLoading[isLoading]);

  if (error?.status === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      {advert && (
        <Layout>
          <div className="cardDetail">
            <div className="detailContainer">
              <div className="headerDetail pb-1">
                <p className="autor pt-2">{advert[0].autor}</p>
                {advert[0].autor === name ? (
                  <div className="buttondetail-group">
                    {advert[0].vendido === true ? (
                      <button className="vender-button btn-grp vendido">
                        <div>
                          <img src={vender} alt="vender"></img>
                        </div>
                      </button>
                    ) : (
                      <button
                        className="vender-button btn-grp"
                        onClick={handleVender}
                      >
                        <div>
                          <img src={vender} alt="vender"></img>
                        </div>
                      </button>
                    )}
                    {advert[0].vendido === true ? (
                      <div>
                        {advert[0].reservado === true ? (
                          <button className="guardar-button btn-grp" disabled>
                            <div>
                              <img src={reservar} alt="reservar"></img>
                            </div>
                          </button>
                        ) : (
                          <button className="guardar-button btn-grp" disabled>
                            <div>
                              <img src={reservar} alt="reservar"></img>
                            </div>
                          </button>
                        )}
                      </div>
                    ) : (
                      <div>
                        {advert[0].reservado === true ? (
                          <button
                            className="guardar-button btn-grp reservado"
                            onClick={handleLiberarReserva}
                          >
                            <div>
                              <img src={reservar}></img>
                            </div>
                          </button>
                        ) : (
                          <button
                            className="guardar-button btn-grp"
                            onClick={handleReserva}
                          >
                            <div>
                              <img src={reservar}></img>
                            </div>
                          </button>
                        )}
                      </div>
                    )}

                    <a className="editar-button btn-grp">
                      <div>
                        <img src={editar}></img>
                      </div>
                    </a>
                    <a className="borrar-button btn-grp">
                      <div>
                        <img src={borrar}></img>
                      </div>
                    </a>
                  </div>
                ) : (
                  <Button className="chat ">Chat para comprar</Button>
                )}
              </div>

              <img
                className="detailFoto"
                src={`http://localhost:3001${advert[0].foto}`}
              ></img>
              <p className="fw-bolder precioDetail">{advert[0].precio} EUR</p>
              <p className="nombreDetail">{advert[0].nombre}</p>
              <div className="d-flex text-dark ventaDetail">
                <span>
                  {advert[0].venta === true ? <p> Venta </p> : <p> Busco </p>}
                </span>
              </div>

              <div className="descripcionDetail">
                <span className="descripcion">{advert[0].descripcion}</span>
              </div>
              <div className="bodyDetail">
                {advert[0].tags.map((tag) => (
                  <div className="tagsDetail">{tag}</div>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
}

export default DetailAdvertPage;

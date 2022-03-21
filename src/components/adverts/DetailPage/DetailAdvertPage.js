import React from "react";
import ReactSimpleTooltip from "react-simple-tooltip";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";
import { FacebookShareCount } from "react-share";

import { useEffect, useState, useMemo } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Layout from "../../layout/layout";
import Confirmation from "./Confirmation";
import { getAd, deleteAd, editAd } from "../service";
import storage from "../../../utils/storage";
import borrar from "../../../assets/eliminar.png";
import vender from "../../../assets/apreton-de-manos.png";
import reservar from "../../../assets/guardar-instagram.png";
import editar from "../../../assets/editar.png";

function DetailAdvertPage({ socket }) {
  const history = useHistory();
  const { advertId } = useParams();
  const [advert, setAdvert] = useState(null);
  const [error, setError] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const name = storage.get("name");
  // const [estadoVenta, setEstadoVenta] = useState(false);

  const part = advertId.split("-");
  const _id = part[1];
  const advertName = part[0];

  useEffect(() => {
    getAd(_id)
      .then((ads) => setAdvert(ads.results))
      .catch((error) => setError(error));
  }, [_id]);

  const [username, setusername] = useState(name);
  const [roomname, setroomname] = useState(advertName);

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
  const handleDelete = async () => {
    await deleteAd(_id);
    history.replace("/");
  };

  const sendData = () => {
    if (username && roomname) {
      socket.emit("joinRoom", { username, roomname });
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  };

  // const buttonDisabled = useMemo(() => isLoading[isLoading]);

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
                      <div>
                        <ReactSimpleTooltip
                          arrow={15}
                          background="#000"
                          border="#000"
                          color="#fff"
                          content="Vender"
                          fadeDuration={0}
                          fadeEasing="linear"
                          fixed={false}
                          fontFamily="inherit"
                          fontSize="12px"
                          offset={0}
                          padding={5}
                          placement="top"
                          radius={0}
                          zIndex={1}
                        >
                          <ReactSimpleTooltip>
                            <button className="vender-button btn-grp vendido">
                              <div>
                                <img src={vender} alt="vender"></img>
                              </div>
                            </button>
                          </ReactSimpleTooltip>
                        </ReactSimpleTooltip>
                      </div>
                    ) : (
                      <ReactSimpleTooltip
                        arrow={15}
                        background="#000"
                        border="#000"
                        color="#fff"
                        content="Vender"
                        fadeDuration={0}
                        fadeEasing="linear"
                        fixed={false}
                        fontFamily="inherit"
                        fontSize="12px"
                        offset={0}
                        padding={5}
                        placement="top"
                        radius={0}
                        zIndex={1}
                      >
                        <ReactSimpleTooltip>
                          <button
                            className="vender-button btn-grp"
                            onClick={handleVender}
                          >
                            <div>
                              <img src={vender} alt="vender"></img>
                            </div>
                          </button>
                        </ReactSimpleTooltip>
                      </ReactSimpleTooltip>
                    )}
                    {advert[0].vendido === true ? (
                      <div>
                        {advert[0].reservado === true ? (
                          <ReactSimpleTooltip
                            arrow={15}
                            background="#000"
                            border="#000"
                            color="#fff"
                            content="Reservar"
                            fadeDuration={0}
                            fadeEasing="linear"
                            fixed={false}
                            fontFamily="inherit"
                            fontSize="12px"
                            offset={0}
                            padding={5}
                            placement="top"
                            radius={0}
                            zIndex={1}
                          >
                            <ReactSimpleTooltip>
                              <button
                                className="guardar-button btn-grp"
                                disabled
                              >
                                <div>
                                  <img src={reservar} alt="reservar"></img>
                                </div>
                              </button>
                            </ReactSimpleTooltip>
                          </ReactSimpleTooltip>
                        ) : (
                          <ReactSimpleTooltip
                            arrow={15}
                            background="#000"
                            border="#000"
                            color="#fff"
                            content="Reservar"
                            fadeDuration={0}
                            fadeEasing="linear"
                            fixed={false}
                            fontFamily="inherit"
                            fontSize="12px"
                            offset={0}
                            padding={5}
                            placement="top"
                            radius={0}
                            zIndex={1}
                          >
                            <ReactSimpleTooltip>
                              <button
                                className="guardar-button btn-grp"
                                disabled
                              >
                                <div>
                                  <img src={reservar} alt="reservar"></img>
                                </div>
                              </button>
                            </ReactSimpleTooltip>
                          </ReactSimpleTooltip>
                        )}
                      </div>
                    ) : (
                      <div>
                        {advert[0].reservado === true ? (
                          <ReactSimpleTooltip
                            arrow={15}
                            background="#000"
                            border="#000"
                            color="#fff"
                            content="Liberar"
                            fadeDuration={0}
                            fadeEasing="linear"
                            fixed={false}
                            fontFamily="inherit"
                            fontSize="12px"
                            offset={0}
                            padding={5}
                            placement="top"
                            radius={0}
                            zIndex={1}
                          >
                            <ReactSimpleTooltip>
                              <button
                                className="guardar-button btn-grp reservado"
                                onClick={handleLiberarReserva}
                              >
                                <div>
                                  <img
                                    src={reservar}
                                    alt="boton reservar"
                                  ></img>
                                </div>
                              </button>
                            </ReactSimpleTooltip>
                          </ReactSimpleTooltip>
                        ) : (
                          <ReactSimpleTooltip
                            arrow={15}
                            background="#000"
                            border="#000"
                            color="#fff"
                            content="Reservar"
                            fadeDuration={0}
                            fadeEasing="linear"
                            fixed={false}
                            fontFamily="inherit"
                            fontSize="12px"
                            offset={0}
                            padding={5}
                            placement="top"
                            radius={0}
                            zIndex={1}
                          >
                            <ReactSimpleTooltip>
                              <button
                                className="guardar-button btn-grp"
                                onClick={handleReserva}
                              >
                                <div>
                                  <img
                                    src={reservar}
                                    alt="imagen reserva"
                                  ></img>
                                </div>
                              </button>
                            </ReactSimpleTooltip>
                          </ReactSimpleTooltip>
                        )}
                      </div>
                    )}
                    <ReactSimpleTooltip
                      arrow={15}
                      background="#000"
                      border="#000"
                      color="#fff"
                      content="Editar"
                      fadeDuration={0}
                      fadeEasing="linear"
                      fixed={false}
                      fontFamily="inherit"
                      fontSize="12px"
                      offset={0}
                      padding={5}
                      placement="top"
                      radius={0}
                      zIndex={1}
                    >
                      <ReactSimpleTooltip>
                        <button
                          className="editar-button btn-grp"
                        // onClick={handleEditar}
                        >
                          <div>
                            <img src={editar}></img>
                          </div>
                        </button>
                      </ReactSimpleTooltip>
                    </ReactSimpleTooltip>
                    <ReactSimpleTooltip
                      arrow={15}
                      background="#000"
                      border="#000"
                      color="#fff"
                      content="Borrar"
                      fadeDuration={0}
                      fadeEasing="linear"
                      fixed={false}
                      fontFamily="inherit"
                      fontSize="12px"
                      offset={0}
                      padding={5}
                      placement="top"
                      radius={0}
                      zIndex={1}
                    >
                      <ReactSimpleTooltip>
                        <button
                          className="borrar-button btn-grp"
                          onClick={handleConfirmDelete}
                        >
                          <div>
                            <img src={borrar} alt="imagen borrar"></img>
                          </div>
                        </button>
                      </ReactSimpleTooltip>
                    </ReactSimpleTooltip>
                  </div>
                ) : (
                  <Link to={`/chat/${roomname}/${username}`}>
                    <button className="chat" onClick={sendData}>
                      Chat
                    </button>
                  </Link>
                )}
              </div>

              <img
                className="detailFoto"
                src={`http://localhost:3001${advert[0].foto}`}
                alt="foto detalle"
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
              <div className="sharebuttonsStyle">
                <FacebookShareButton
                  url={`http://localhost:3000/adverts/${advertId}`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={`http://localhost:3000/adverts/${advertId}`}
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={`http://localhost:3000/adverts/${advertId}`}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton
                  url={`http://localhost:3000/adverts/${advertId}`}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>
            </div>
          </div>
          {display && (
            <Confirmation onConfirm={handleDelete} onDisplay={setDisplay}>
              ¿Estas seguro que quieres borrar este anuncio?
            </Confirmation>
          )}
        </Layout>
      )}
    </div>
  );
}

export default DetailAdvertPage;

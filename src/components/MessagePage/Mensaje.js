import React from "react";
import T from "prop-types";
import "../../bootstrap/style.css";

const Mensaje = ({ comprador, nombreAnuncio }) => {
  return (
    <div className="cardDetail">
      <div className="detailContainer">
        <div>Tienes mensajes de {comprador}</div>
        <div>Para el anuncio {nombreAnuncio}</div>
      </div>
    </div>
  );
};

export const mensajeType = {
  nombreAnuncio: T.string,
  comprador: T.string,
};

Mensaje.propTypes = mensajeType;

export default Mensaje;

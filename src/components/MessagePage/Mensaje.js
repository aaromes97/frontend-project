import React from "react";
import T from "prop-types";
import "../../bootstrap/style.css";
import { red } from "@material-ui/core/colors";

const Mensaje = ({ comprador, nombreAnuncio }) => {
  return (
    <div className="cardDetail" >
      <div className="detailContainer mb-3" style={{ borderBottom: "1px solid red" }}>
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

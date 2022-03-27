import React from "react";
import T from "prop-types";
import "../../bootstrap/style.css";
import { red } from "@material-ui/core/colors";
import { useTranslation } from "react-i18next";

const Mensaje = ({ comprador, nombreAnuncio }) => {
  const [t, i18n] = useTranslation("common");

  


  return (
    <div className="cardDetail" >
      <div className="detailContainer mb-3" style={{ borderBottom: "1px solid red" }}>
        <div>{t("mensaje.mensajes")} {comprador}</div>
        <div>{t("mensaje.para")} {nombreAnuncio}</div>
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

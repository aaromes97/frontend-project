import React from "react";
import T from "prop-types";
import "../../bootstrap/style.css";
import { useTranslation } from "react-i18next";
import storage from "../../utils/storage";

const Mensaje = ({ comprador, nombreAnuncio, vendedor }) => {
  const [t] = useTranslation("common");
  const myUser = storage.get("name")

  return (
    <div className="cardDetail">
      <div className="detailContainer mb-3" style={{ border: "1px solid gray" }}>
        {myUser === comprador ? (
          <>
            <div style={{ color: "green" }}>{t("mensaje.mensajes")} {vendedor}</div>
            <div>{t("mensaje.para-comprar")} {nombreAnuncio}</div>
          </>
        ) : (
          <>
            <div style={{ color: "red" }}>{t("mensaje.mensajes")} {comprador}</div>
            <div>{t("mensaje.para-vender")} {nombreAnuncio}</div>
          </>
        )}
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

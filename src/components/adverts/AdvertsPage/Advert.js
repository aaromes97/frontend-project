import React from "react";
import T from "prop-types";
import "../../../bootstrap/style.css";

const Advert = ({
  venta,
  precio,
  descripcion,
  foto,
  autor,
  name,
  vendido,
  reservado,
}) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-user text-white position-absolute small">
          {autor}
        </div>

        <img
          className="card-img-top"
          src={`http://localhost:3001${foto}`}
          alt="..."
        />
        {/* <div className="badge bg-user text-white  small">
          {vendido === true ? (
            <p> Vendido </p>
          ) : reservado === true ? (
            <p>Reservado</p>
          ) : null}
        </div> */}
        {/* <div className="badge position-absolute bg-user fav-position">
          <div className="fav-container"> */}
        {vendido === true ? (
          <div className="badge position-absolute bg-selled fav-position">
            <div className="fav-container">
              <p> Vendido </p>
            </div>
          </div>
        ) : reservado === true ? (
          <div className="badge position-absolute bg-selled fav-position">
            <div className="fav-container">
              <p> Reservado </p>
            </div>
          </div>
        ) : null}
        {/* </div>
        </div> */}
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center text-dark ">
              <span>{venta === true ? <p> Venta </p> : <p> Busco </p>}</span>
            </div>
            <div
              style={{ overflow: "hidden", height: "4rem" }}
              className="d-flex justify-content-center small pt-1"
            >
              {descripcion}
            </div>
          </div>
        </div>
        <div className="card-footer text-center pb-4 pl-4 pr-4 pt-0 border-top-0 bg-transparent">
          <p className="btn btn-outline-dark">{precio}€</p>
        </div>
      </div>
    </div>
  );
};

export const advertType = {
  name: T.string.isRequired,
  venta: T.bool.isRequired,
  precio: T.number.isRequired,
  descripcion: T.string.isRequired,
  // autor: T.string.isRequired,
  foto: T.string.isRequired,
};

Advert.propTypes = advertType;

export default Advert;

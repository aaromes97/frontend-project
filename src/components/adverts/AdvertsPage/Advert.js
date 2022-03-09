import React from "react";
import T from "prop-types";
import "../../../bootstrap/style.css";

const Advert = ({ nombre, venta, precio, descripcion, foto, autor }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
<<<<<<< HEAD
        <div className="badge bg-user text-white position-absolute small">
          {autor}
        </div>
        <div className="badge position-absolute fav-position">
          <div className="fav-container">
            <input type="checkbox" id="estrella1" class="fav" />
            <label htmlFor="estrella1"></label>
=======
        <div class="badge bg-user text-white position-absolute small">
          {autor}
        </div>
        <div class="badge position-absolute fav-position">
          <div class="fav-container">
            <input type="checkbox" id="estrella1" class="fav" />
            <label for="estrella1"></label>
>>>>>>> 382c512d18330d5ab1269aa2afab8e136b151d70
          </div>
        </div>
        {/* <div className="card-img-clonepop"> */}
        <img
          className="card-img-top"
          src={`http://localhost:3001${foto}`}
          alt="..."
        />
        {/* </div> */}
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{nombre}</h5>
            <div className="d-flex justify-content-center text-dark ">
              <span>{venta === true ? <p> Venta </p> : <p> Busco </p>}</span>
            </div>
            <div className="d-flex justify-content-center small ">
              {descripcion}
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
=======
        <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
>>>>>>> 382c512d18330d5ab1269aa2afab8e136b151d70
          <p className="btn btn-outline-dark">{precio}€</p>
        </div>
      </div>
    </div>
  );
};

export const advertType = {
  nombre: T.string.isRequired,
  venta: T.bool.isRequired,
  precio: T.number.isRequired,
  descripcion: T.string.isRequired,
  autor: T.string.isRequired,
  foto: T.string.isRequired,
};

Advert.propTypes = advertType;

export default Advert;

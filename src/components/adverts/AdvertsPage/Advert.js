import React from "react";
import T from "prop-types";
import "../../layout/styles.css";

const Advert = ({ nombre, venta, precio, descripcion, foto, autor }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div class="badge bg-user text-white position-absolute small">{autor}</div>
                <div class="badge position-absolute fav-position">
                    <div class="fav-container">
                        <input type="checkbox" id="estrella1" class="fav" />
                        <label for="estrella1"></label>
                    </div>
                </div>
                {/* <div className="card-img-clonepop"> */}
                <img className="card-img-top" src={`http://localhost:3001${foto}`} alt="..." />
                {/* </div> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{nombre}</h5>
                        <div className="d-flex justify-content-center text-dark mb-2">
                            <span>{venta}</span>
                        </div>
                        <div className="d-flex justify-content-center small mt-2">
                            {descripcion}
                        </div>
                    </div>
                </div>

                <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                    <p className="btn btn-outline-dark">
                        {precio}€
                    </p>
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
    foto: T.string,
};

Advert.propTypes = advertType;

export default Advert;
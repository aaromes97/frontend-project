import React from 'react';
import T from 'prop-types';

// import Photo from '../../common/Photo';
import './Advert.css';

const Advert = ({ name, sale, price, desc, photo, autor }) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <div class="badge bg-user text-white position-absolute small">@{autor}</div>
                <div class="badge position-absolute fav-position">
                    <div class="fav-container">
                        <input type="checkbox" id="estrella1" class="fav" />
                        <label for="estrella1"></label>
                    </div>
                </div>
                {/* <div className="card-img-clonepop"> */}
                <img className="card-img-top" src={photo} alt="..." />
                {/* </div> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{name}</h5>
                        <div className="d-flex justify-content-center text-dark mb-2">
                            <span>{
                                sale === true ?
                                    (<p> Venta </p>)
                                    : (<p> Compra </p>)
                            }</span>
                        </div>
                        <div className="d-flex justify-content-center small mt-2">
                            {desc}
                        </div>
                    </div>
                </div>

                <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                    <p className="btn btn-outline-dark">
                        {price}€
                    </p>
                </div>
            </div>
        </div>
    );
};

export const advertType = {
    name: T.string.isRequired,
    sale: T.bool.isRequired,
    price: T.number.isRequired,
    desc: T.string.isRequired,
    autor: T.string.isRequired,
};

Advert.propTypes = advertType;

export default Advert;

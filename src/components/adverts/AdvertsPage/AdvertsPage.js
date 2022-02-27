import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import "../../layout/styles.css";

function AdvertsPage() {
    return (
        <>
            <Header></Header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        <div className="col mb-5">
                            <div className="card h-100">
                                <div class="badge bg-user text-white position-absolute small">@duenas</div>
                                <div class="badge position-absolute fav-position">
                                    <div class="fav-container">
                                        <input type="checkbox" id="estrella1" class="fav" />
                                        <label for="estrella1"></label>
                                    </div>
                                </div>
                                {/* <div className="card-img-clonepop"> */}
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* </div> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Bicicleta</h5>
                                        <div className="d-flex justify-content-center text-dark mb-2">
                                            <span>Compra</span>
                                        </div>
                                        <div className="d-flex justify-content-center small mt-2">
                                            Vendo una bicicleta en buen estado comprada a principios del año pasado.
                                        </div>
                                        {/* <p className="precio btn btn-outline-dark mt-3 mb-0">
                                            €50
                                        </p> */}
                                    </div>
                                </div>

                                <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                                    <p className="btn btn-outline-dark">
                                        €50
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div className="col mb-5">
                            <div className="card h-100">
                                <div class="badge bg-user text-white position-absolute">@duenas</div>
                                <div class="badge position-absolute fav-position">
                                    <div class="fav-container">
                                        <input type="checkbox" id="estrella1" class="fav" />
                                        <label for="estrella1"></label>
                                    </div>
                                </div>
                                {/* <div className="card-img-clonepop"> */}
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* </div> */}

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Bicicleta</h5>
                                        <div className="d-flex justify-content-center text-dark mb-2">
                                            <span>Compra</span>
                                        </div>
                                        <div className="d-flex justify-content-center small mt-2">
                                            Vendo una bicicleta en buen estado.
                                        </div>
                                        {/* <p className="precio btn btn-outline-dark mt-3 mb-0">
                                            €50
                                        </p> */}
                                    </div>
                                </div>

                                <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                                    <p className="btn btn-outline-dark">
                                        €50
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col mb-5">
                            <div className="card h-100">
                                <div class="badge bg-user text-white position-absolute">@bestseller</div>
                                <div class="badge position-absolute fav-position">
                                    <div class="fav-container">
                                        <input type="checkbox" id="estrella1" class="fav" />
                                        <label for="estrella1"></label>
                                    </div>
                                </div>
                                {/* <div className="card-img-clonepop"> */}
                                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                {/* </div> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Bicicleta</h5>
                                        <div className="d-flex justify-content-center text-dark mb-2">
                                            <span>Compra</span>
                                        </div>
                                        <div className="d-flex justify-content-center small mt-2">
                                            Vendo una bicicleta en buen estado.
                                        </div>
                                        {/* <p className="precio btn btn-outline-dark mt-3 mb-0">
                                            €50
                                        </p> */}
                                    </div>
                                </div>

                                <div class="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                                    <p className="btn btn-outline-dark">
                                        €50
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default AdvertsPage;

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
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-dark mb-2">
                      <span>Compra</span>
                    </div>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-dark mb-2">
                      <span>venta</span>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
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

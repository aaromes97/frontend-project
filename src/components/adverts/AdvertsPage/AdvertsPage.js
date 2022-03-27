import { EmptyList } from "./EmptyList";
import Layout from "../../layout/layout";
import Advert from "./Advert";
import "../../../bootstrap/style.css";
import { useEffect, useState } from "react";
import { getLatestAds } from "../service";
import AdvertFilter from "./AdvertFilter";
import { Link } from "react-router-dom";

function AdvertsPage({ history, t, ...props }) {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getLatestAds().then((adverts) => {
      console.log(adverts, 'desde AdvertsPAge')
      console.log(t, 't')
      setAds(adverts.results.reverse());
    });
  }, []);

  return (
    <>
      <Layout {...props}>
        <AdvertFilter filterAds={ads => setAds(ads.results)} selectedAds={ads} />
        {console.log(ads, 'desde return')}
        {ads.length ? (
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {ads.map(({ _id, nombre, ...advert }) => (
              <div key={_id}>
                <Link
                  to={`/adverts/${nombre}-${_id}`}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <Advert {...advert} name={nombre} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <EmptyList />
        )}
      </Layout>
    </>
  );
}


export default AdvertsPage;
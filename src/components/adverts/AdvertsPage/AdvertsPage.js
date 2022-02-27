import { EmptyList } from "./EmptyList";
import Layout from "../../layout/layout";
import Advert from "./Advert";
import "../../layout/styles.css";
import { useEffect, useState } from "react";
import { getLatestAds } from "../service";

function AdvertsPage() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getLatestAds().then((ads) => {
      setAds(ads.data.results);
      console.log(ads);
    });
  }, []);
  return (
    <>
      <Layout >
        {ads.length ? (
          <div className="container">
            {ads.map(( ...advert ) => (
                {/* <Link to={`/adverts/${id}`} style={{ textDecoration: 'none' }}> */}
                <Advert {...advert} />
                {/* </Link> */}
            )}
          </div>
        ) : (
          <EmptyList />
        )}
      </Layout>
    </>
  );
}

export default AdvertsPage;

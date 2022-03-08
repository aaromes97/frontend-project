import { EmptyList } from "./EmptyList";
import Layout from "../../layout/Layout";
import Advert from "./Advert";
import "../../../bootstrap/style.css"
import { useEffect, useState } from "react";
import { getLatestAds } from "../service";
import { Link } from "react-router-dom";

function AdvertsPage() {
    const [ads, setAds] = useState([]);
    useEffect(() => {
        getLatestAds().then((ads) => {
            setAds(ads.data.results);
        });
    }, []);
    return (
        <>
            <Layout >
                {
                    ads.length ? (
                        // <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {ads.map(({ id, ...advert }) => (
                                <div key={id} >
                                    <Link to={`/adverts/${id}`} style={{ textDecoration: 'none' }}>
                                        <Advert {...advert} />
                                    </Link>
                                </div>

                            ))}
                        </div>
                        // </div>
                    ) : (
                        <EmptyList />
                    )
                }
            </Layout>
        </>
    );
}

export default AdvertsPage;

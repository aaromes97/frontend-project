import { EmptyList } from "../../common/EmptyList";
import Layout from "../../layout/layout";
import Advert from "../AdvertsPage/Advert";
import "../../../bootstrap/style.css";
import { useEffect, useState } from "react";
import { getFilteredAds } from "../service";
import storage from "../../../utils/storage";
import { Link } from "react-router-dom";

function MyAdvertsPage(props) {
    const [ads, setAds] = useState([]);
    const name = storage.get("name");

    const [filter] = useState({
        autor: name,
    });

    useEffect(() => {
        getFilteredAds(filter).then((ads) => {
            setAds(ads.results.reverse()); // mostramos los ultimos anuncios del array (mas nuevos) primero
        });
    }, [filter]);

    return (
        <>
            <Layout {...props}>
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

export default MyAdvertsPage;
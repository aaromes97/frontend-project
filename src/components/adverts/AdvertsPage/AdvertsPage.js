import { EmptyList } from "./EmptyList";
import Layout from "../../layout/layout";
import Advert from "./Advert";
import "../../../bootstrap/style.css"
import { useEffect, useState } from "react";
import { getLatestAds } from "../service";
import { AuthContextConsumer } from "../../auth/context";
import AdvertFilter from "./AdvertFilter";
import { Link } from "react-router-dom";




function AdvertsPage({history, ...props }) {
    const [adverts, setAdverts] = useState([]);
    useEffect(() => {
        getLatestAds().then((adverts) => {
            console.log(adverts, 'desde AdvertsPAge')
            setAdverts(adverts.results);
        });
    }, []);

    

  
    return (
        
            <Layout {...props}>
             
            <AdvertFilter filterAds={ads => setAdverts(ads.results)} selectedAds={adverts} />
            {console.log(adverts,'desde return')}

                {
                adverts.length ? (
                    
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="flex-adverts" > 
                            {adverts.map(({ id, ...advert }) => (
                                <div key={id} >
                                    <Link to={`/adverts/${id}`}>
                                    <Advert {...advert} />
                                       </Link>
                                </div>

                            ))}
                        </div>
                        </div>
                    ) : (
                        <EmptyList />
                    )
                }
            </Layout>
        
    );
}


 export default AdvertsPage;
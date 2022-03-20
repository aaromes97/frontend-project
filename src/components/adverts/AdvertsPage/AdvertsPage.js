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
    const [ads, setAds] = useState([]);
    useEffect(() => {
        getLatestAds().then((adverts) => {
            console.log(adverts, 'desde AdvertsPAge')
            setAds(adverts.results);
        });
    }, []);

    

  
    return (
        
            // <Layout {...props}>
             
            // <AdvertFilter filterAds={ads => setAdverts(ads.results)} selectedAds={adverts} />
            // {console.log(adverts,'desde return')}

            //     {
            //     adverts.length ? (
                    
            //         <div className="container px-4 px-lg-5 mt-5">
            //             <div className="flex-adverts" >
            //                 {adverts.map(({ id, ...advert }) => (
            //                     <div key={id} >
            //                         <Link to={`/adverts/${id}`}>
            //                         <Advert {...advert} />
            //                            </Link>
            //                     </div>

            //                 ))}
            //             </div>
            //             </div>
            //         ) : (
            //             <EmptyList />
            //         )
            //     }
            // </Layout>
        
         <>
            <Layout {...props}>
                  <AdvertFilter filterAds={ads => setAds(ads.results)} selectedAds={ads} />
            {console.log(ads,'desde return')}
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
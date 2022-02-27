import { EmptyList } from './EmptyList'
import Layout from "../../layout/layout";
import Advert from './Advert';
import "../../layout/styles.css";

function AdvertsPage() {
    return (
        <>
            <Layout>
                {
                    filteredAdverts.length ? (
                        <div className="container">
                            {filteredAdverts.map(({ id, nombre, ...advert }) => (
                                <div key={nombre} >
                                    {/* <Link to={`/adverts/${id}`} style={{ textDecoration: 'none' }}> */}
                                    <Advert {...advert} />
                                    {/* </Link> */}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <EmptyList />
                    )
                }
            </Layout>
        </>
    );
}

export default AdvertsPage;

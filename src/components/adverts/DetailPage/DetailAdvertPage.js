import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Redirect, useLocation, useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Layout from '../../layout/layout';
import { getAd } from '../service';
// import Confirmation from './Confirmation';
// import './Confirmation.css';

function DetailAdvertPage() {
    const { advertId } = useParams();
    const [advert, setAdvert] = useState(null);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState(false);

    // const history = useHistory();
    // const location = useLocation();
    const part = advertId.split("-");
    const _id = part[1];

    useEffect(() => {
        getAd(_id).then(ads => setAdvert(ads.data.results)).catch(error => setError(error));
    }, [_id]);


    const handleConfirmDelete = async (event) => {
        event.preventDefault();
        setDisplay(true)
    };

    // Procedimiento para borrar el anuncio
    // const handleDelete = async () => {
    //     try {
    //         await deleteAdvert(advertId);
    //         setIsLoading(false);
    //         const { from } = location.state || { from: { pathname: "/adverts" } };
    //         history.replace(from);
    //     } catch (error) {
    //         setError(error);
    //         setIsLoading(false);
    //     }
    // }

    const buttonDisabled = useMemo(
        () => isLoading
        [isLoading]
    );

    if (error?.status === 404) {
        return <Redirect to="/404" />;
    }

    return (
        <div>
            {advert &&
                <Layout >
                    {advert.map(({ nombre, precio }) => (
                        <p key={_id} >
                            {nombre}
                        </p>
                    ))}
                    <Button className="delete-button" onClick={handleConfirmDelete}
                        disabled={buttonDisabled}
                        variant="delete"
                        as={Link}
                        to="/">
                        Borrar
                    </Button>
                </Layout >}
        </div>
    );
}

export default DetailAdvertPage;
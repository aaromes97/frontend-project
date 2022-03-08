import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Redirect, useLocation, useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Layout from '../../layout/Layout';
import { getAdvert, deleteAdvert } from '../service';
import './AdvertPage.css';
// import Confirmation from './Confirmation';
// import './Confirmation.css';


function DetailAdvertPage() {
    const { advertId } = useParams();
    const [advert, setAdvert] = useState(null);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState(false);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        getAdvert(advertId).then(advert => setAdvert(advert)).catch(error => setError(error));
    }, [advertId]);

    const handleConfirmDelete = async (event) => {
        event.preventDefault();
        setDisplay(true)
    };

    // Procedimiento para borrar el anuncio
    const handleDelete = async () => {
        try {
            await deleteAdvert(advertId);
            setIsLoading(false);
            const { from } = location.state || { from: { pathname: "/adverts" } };
            history.replace(from);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

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
                    <div class="container-detail-section with-header">
                        <div class="card-user-detail">
                            <div class="card-user-detail-top">
                                <a class="card-user-right" href="/user/hidalgoa-13514021" rel="nofollow"><div class="card-user-detail-avatar" style="background-image: url('https://cdn.wallapop.com/images/13/08/1n/__/c13p13514021/i934794645.jpg?pictureSize=W320')">
                                </div>
                                    <div class="card-user-detail-info">
                                        <h2 class="card-user-detail-name">
                                            <span>Miller Ä.</span>
                                        </h2>
                                        <div class="card-user-detail-rating">
                                            1 Producto
                                        </div>
                                    </div>
                                    <div id="pro-badge" data-hashid="k3zl4w2pl8jx" data-page="item">
                                    </div>
                                </a>
                                <div class="card-user-detail-reviews">
                                    <div id="card-profile-rating" class="card-profile-rating" data-score="5.0">
                                        <img src="../,,/assets/filled.png" alt='' />
                                        <img src="../,,/assets/filled.png" alt='' />
                                        <img src="../,,/assets/filled.png" alt='' />
                                        <img src="../,,/assets/filled.png" alt='' />
                                        <img src="../,,/assets/filled.png" alt='' />
                                    </div>
                                    <div class="card-user-detail-rating">
                                        <span class="recived-reviews-count">26
                                        </span>
                                        Valoraciones
                                    </div>
                                </div>
                                <div class="card-user-detail-fav" data-itemid="e65344g7o2zo" data-sellerid="13514021">
                                    <a id="js-detail-add-item-favourite" class="card-item-detail-fav-btn " data-itemid="764139900" data-itemhashid="e65344g7o2zo" data-sellerid="13514021" data-favorite="false">
                                        Chat para comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-slider clearfix"><div class="card-slider-wrapper" id="card-slider-wrapper" target="_blank" href="#js-slider-modal"><div id="js-card-slider-prev" class="card-slider-control prev"><a class="bx-prev" href="">
                        </a>
                        </div>
                            <div id="js-card-slider-next" class="card-slider-control next"><a class="bx-next" href=""></a></div><div class="bx-wrapper" style="max-width: 100%;">
                                <div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 477px;">
                                    <ul id="js-card-slider-main" class="card-slider-main " style="width: auto; position: relative;">
                                        <li style="float: none; list-style: none; position: absolute; width: 639px; z-index: 50; display: block;">
                                            <img src="https://cdn.wallapop.com/images/10420/cm/y6/__/c10420p764139900/i2515911768.jpg?pictureSize=W640" alt="ROLEX AIR KING 1964" />
                                        </li>
                                        <li style="float: none; list-style: none; position: absolute; width: 639px; z-index: 0; display: none;">
                                            <img src="https://cdn.wallapop.com/images/10420/cm/y6/__/c10420p764139900/i2515911866.jpg?pictureSize=W640" alt="ROLEX AIR KING 1964" />
                                        </li>
                                        <li style="float: none; list-style: none; position: absolute; width: 639px; z-index: 0; display: none;">
                                            <img src="https://cdn.wallapop.com/images/10420/cm/y6/__/c10420p764139900/i2515912133.jpg?pictureSize=W640" alt="ROLEX AIR KING 1964" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="bx-controls">
                                </div>
                            </div>
                        </div>
                            <div id="js-card-slider-pager" class="card-slider-thumbs clearfix">
                                <a data-slide-index="0" href="" class="slider-thumbnail active"></a><a data-slide-index="1" href="" class="slider-thumbnail">
                                </a>
                                <a data-slide-index="2" href="" class="slider-thumbnail"></a><a data-slide-index="3" href="" class="slider-thumbnail">
                                </a>
                                <a data-slide-index="4" href="" class="slider-thumbnail"></a><a data-slide-index="5" href="" class="slider-thumbnail"></a>
                                <a data-slide-index="6" href="" class="slider-thumbnail">
                                </a>
                            </div>
                        </div>
                        <div class="card-product-detail" data-ismine="false" data-itemid="e65344g7o2zo" data-itemid-num="764139900">
                            <div class="card-product-detail-top">
                                <div class="card-product-price-info-wrapper">
                                    <div class="card-product-price-info">
                                        <span class="card-product-detail-price">3.200 EUR
                                        </span>
                                    </div>
                                </div>
                                <h1 class="js__card-product-detail--title card-product-detail-title  card-product-detail-title--with-extra-info " id="item-detail-title">ROLEX AIR KING 1964</h1>
                                <div class="card-product-detail-extra-info">
                                    <div class="mb-3"><span class="ExtraInfo__text">Bueno</span>
                                    </div><div class="mb-3 ExtraInfo--horizontally-scrollable">
                                        <div class="ExtraInfo__taxonomyBubble">
                                            <img class="ExtraInfo__taxonomyBubble__icon" src="/images/icons/categories/category_CollectiblesArt_stroke.svg" />
                                            <span class="ExtraInfo__taxonomyBubble__text" data-category-id="18000" data-object-type-id="10086">
                                                Relojes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id="phone-number" data-saleprice="3200.0" data-sellerfeatured="false" data-categoryid="18000" data-phone="" data-sellerid="13514021" data-hashid="e65344g7o2zo" data-itemtitle="ROLEX AIR KING 1964" data-page="item">
                                </div>
                                <div id="affiliation-links-top">
                                    <div>
                                        <div class="AffilitionLinks" style="">
                                            <div id="item-affiliation-1" data-google-query-id="CLnyuKiAt_YCFa9DHQkdK1EDiQ" style="display: none;">
                                                <div id="google_ads_iframe_130868815/Desktop_Affiliation/Web_1_0__container__" style="border: 0pt none;"></div>
                                            </div>
                                            <div id="item-affiliation-2" data-google-query-id="CLryuKiAt_YCFa9DHQkdK1EDiQ" style="display: none;">
                                                <div id="google_ads_iframe_130868815/Desktop_Affiliation/Web_2_0__container__" style="border: 0pt none;"></div>
                                            </div>
                                            <div id="item-affiliation-3" data-google-query-id="CLvyuKiAt_YCFa9DHQkdK1EDiQ" style="display: none;"><div id="google_ads_iframe_130868815/Desktop_Affiliation/Web_3_0__container__" style="border: 0pt none;">
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="js__card-product-detail--description card-product-detail-description">Se vende por no usar y por tener un modelo mas deportivo, tengo factura y tiene garantia hasta el 15-01-2023</p>
                                <div class="mb-3 card-product-detail-mobile-horizontal-scroll">
                                </div>
                                <div class="card-product-detail-separator">
                                </div>
                                <div class="card-product-detail-user-stats">
                                    <div class="card-product-detail-user-stats-published">
                                        08-mar-2022
                                    </div>
                                    <div class="card-product-detail-user-stats-right">
                                        <i class="ico-coounter_favourites" style="font-size: 14px;">
                                        </i><span>0</span>
                                    </div>
                                    <div class="card-product-detail-user-stats-right">
                                        <i class="ico-eye"></i>
                                        <span>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
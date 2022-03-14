import { Redirect, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import client from '../../api/client'

const PrivateRouteForgotPassword = (props) => {

	const location = useLocation();
	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get('id');

	const [resIsChecked, setresIsChecked] = useState(null);
	console.log("tokenisvalid2:", resIsChecked)

	useEffect(() => {
		client.get('/api/forgot-password/check/?id=' + id).then((reset) => {
			setresIsChecked(reset);
		});
		// getLatestAds().then((ads) => {
		// 	setAds(ads.results.reverse()); // mostramos los ultimos anuncios del array (mas nuevos) primero
		// });
	}, []);

	return resIsChecked ? (
		<Route {...props} />
	) : (
		<Redirect to={{ pathname: "/login", state: { from: location } }} />
	);

};

export default PrivateRouteForgotPassword;

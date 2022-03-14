import { Redirect, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {checkToken} from './ForgotPassword/ResetPage/service';
import client from '../../api/client'


async function aa(id) {
	return await client.get('/api/forgot-password/check/?id='+id);
}

const PrivateRouteForgotPassword = (props) => {

	const location = useLocation();
	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get('id');
	const [resIsChecked, setresIsChecked] = useState(null);
	//console.log("tokenisvalid2:", resIsChecked)

	useEffect(() => {
		try {	


			const promise = aa(id).then((reset) => {
				console.log("reset:", reset.result)
				setresIsChecked(reset.result)
				return reset.result	
			});
			console.log("id:",promise)
			// getLatestAds().then((ads) => {
			// 	setAds(ads.results.reverse()); // mostramos los ultimos anuncios del array (mas nuevos) primero
			// });


		} catch(err) {
			console.log("err:",err)
		}


	}, []);
	console.log("resIsChecked:",resIsChecked)
	if(true) {
		return (<Route {...props} />);
	} else {
		return (<Redirect to={{ pathname: "/login", state: { from: location } }} />);
	}
};

export default PrivateRouteForgotPassword;

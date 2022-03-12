import { Redirect, Route, useLocation } from "react-router-dom";
import client from '../../api/client'

const PrivateRouteForgotPassword = async (props) => {

	const location = useLocation();
	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get('id');
	const resIsChecked =  await client.get('/api/forgot-password/check/?id='+id);

	console.log("tokenisvalid2:", resIsChecked)

	return resIsChecked ? (
		<Route {...props} />
	) : (
		<Redirect to={{ pathname: "/login", state: { from: location } }} />
	);

};

export default PrivateRouteForgotPassword;

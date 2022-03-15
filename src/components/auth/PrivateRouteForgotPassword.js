import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkToken } from './ForgotPassword/ResetPage/service';
import { ResetFailed } from './ResetFailed.js';


const PrivateRouteForgotPassword = (props) => {

	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get('id');
	const [resIsChecked, setresIsChecked] = useState(null);
	console.log("resIsChecked:", resIsChecked)
	//console.log("tokenisvalid2:", resIsChecked)

	useEffect(() => {
		try {
			checkToken(id).then((reset) => {
				// console.log("reset:", reset.message)
				setresIsChecked(reset.message)
			}).catch((error) => {
				setresIsChecked(error.message)
			});
		} catch (err) {
			console.log("err:", err)
		}
	}, [id]);

	return (
		<>
			{resIsChecked === "Valid url" ? (
				<Route {...props} />
			) : (
				<ResetFailed />
			)}
		</>
	);
};

export default PrivateRouteForgotPassword;

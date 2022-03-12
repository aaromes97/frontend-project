import { Redirect, Route } from "react-router-dom";
import client from '../../../../api/client'


export const login = async (credentials, id) => {

	return await client.post('/api/forgot-password/reset/?id='+id, credentials);
};

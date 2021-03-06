import client from '../../../../api/client'


export const login = async (credentials, id) => {

	return await client.post('/api/forgot-password/reset/?id=' + id, credentials);
};

export const checkToken = async (id) => {

	return await client.get('/api/forgot-password/check/?id=' + id);
};

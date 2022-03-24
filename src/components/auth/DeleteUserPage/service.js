import client from '../../../api/client'

export const deleteUser = async (email) => {
	const data = {
		email: email
	}
	return await client.put('/api/deleteUser', data);
	
};

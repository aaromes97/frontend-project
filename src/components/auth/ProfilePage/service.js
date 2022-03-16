import client from '../../../api/client'

export const updateProfile = async (credentials, id) => {
	const data = {
		credentials,
		id: id
	}
	return await client.put('/api/updateProfile', data);
};

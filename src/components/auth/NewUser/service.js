import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../../api/client';

export const login = (credentials) => {
    return client.post('/api/register', credentials)
       
};



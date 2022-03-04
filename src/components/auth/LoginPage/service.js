import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../../api/client';
import storage from '../../../utils/storage';

export const login = (credentials, saveValue) => {
    return client.post('/api/authenticate', credentials).then((response) => {
        console.log(response)
        setAuthorizationHeader(response.data.token);
  
    });
 
};



export const logout = () => Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('auth');
});

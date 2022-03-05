import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../../api/client';
import storage from '../../../utils/storage';

export const login = (credentials, saveValue) => {
    return client.post('/api/authenticate', credentials).then(({token}) => {
        console.log('login',token)
        setAuthorizationHeader(token);
        //guardamos el token en LocalStorage
        storage.set('auth', token);
  
    });
 
};



export const logout = () => Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('auth');
});

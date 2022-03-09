import client, { removeAuthorizationHeader, setAuthorizationHeader } from '../../../api/client';
import storage from '../../../utils/storage';

export const login = (credentials, saveValue) => {
    return client.post('/api/authenticate', credentials).then(({token, name}) => {
        console.log('login', token)
        console.log('name', name)
        setAuthorizationHeader(token);
        //guardamos el token en LocalStorage si esta el checkbox marcado
        storage.set('auth', token);
        
  
    });
 
};



export const logout = () => Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove('auth');
});

import axios from 'axios';


const client = axios.create({
    baseURL: 'http://localhost:3001',
});



client.interceptors.response.use(response => response.data, error => {
    if (!error.response) {
        return Promise.reject({ message: error.message });
    }
    return Promise.reject({
        message: error.response.statusText,
        ...error.response,
        ...error.response.data,
    });
});

//añadimos las claves

export const setAuthorizationHeader = (token, name) => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;


};



//borramos las claves

export const removeAuthorizationHeader = () => {
    delete client.defaults.headers.common['Authorization'];
    localStorage.removeItem('name')
}



export default client;

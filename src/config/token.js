import axiosClient from './axios';

const authenticate = token => {
    if(token) {
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axiosClient.defaults.headers.common['x-auth-token'];
    }
}

export default authenticate;
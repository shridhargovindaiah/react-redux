import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-2a887.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-17586.firebaseio.com/'
});

export default instance;
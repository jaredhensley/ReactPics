import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 01e4529b399b6189956b12e2b02fd105bab67e7f4144ccbade58a6d79b5dc14c'
    }
});


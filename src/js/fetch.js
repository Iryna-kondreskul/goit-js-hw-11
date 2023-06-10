import axions from 'axios';
const axionsInstance = axions.create(
    {
        baseURL: 'https://pixabay.com/api/',
        headers: {
            'Content-Type': 'application/json',
        },
    });

const API_KEY = '37078847-0a0355fe847d0c75c08119f83'
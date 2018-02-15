import axios from 'axios';

const API_KEY = 'e41698d35db6fe68499bf8fe215c8f9b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

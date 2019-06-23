import {API_KEY} from './api_key';

export default BASE = 'https://www.food2fork.com/api/';
export default SEARCH_RECIPE = `${BASE}search?key=${API_KEY}`;
export default GET_RECIPE = `${BASE}get?key=${API_KEY}`;
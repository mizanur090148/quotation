import axios from 'axios'
import { defaults } from 'chart.js';

let Api = axios.create({
	baseURL: 'http://139.162.47.137:54/api'
});

Api.defaults.withCredentials = true;
export default Api;
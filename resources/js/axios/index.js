import axios from 'axios'
import { defaults } from 'chart.js';

/* export default axios.create({
	baseURL: 'http://dev-quotation/api'
}); */

let Api = axios.create({
	baseURL: 'http://dev-schedule/api'
});

Api.defaults.withCredentials = true;
export default Api;
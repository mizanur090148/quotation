import axios from "axios";

let Api = axios.create({
	baseURL: 'http://139.162.47.137/api'
});

Api.defaults.withCredentials = true;
export default Api;
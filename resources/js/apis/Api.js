import axios from "axios";

let Api = axios.create({
	baseURL: 'http://dev-schedule/api'
});

Api.defaults.withCredentials = true;
export default Api;
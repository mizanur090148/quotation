import axios from 'axios'

export default axios.create({
	baseURL: 'http://pos-dev/api'
});
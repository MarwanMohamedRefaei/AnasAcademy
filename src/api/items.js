import axios from 'axios';

const axiosApi = axios.create({
    baseURL: "http://universities.hipolabs.com/"
});
// http://universities.hipolabs.com/search?country=United+States&offset=0&limit=10
export default axiosApi

import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/",
});

instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export default instance;

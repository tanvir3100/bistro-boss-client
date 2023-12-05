import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3100'
})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure
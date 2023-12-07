import axios from "axios";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3100'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        //do something with request error
        return Promise.reject(error)
    });


    //interceptor 401 and 403 status
    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        //for 401 and 403 logout the user and move to the user login page
        // console.log('status error in the interceptor', status)
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');   
        }
        return Promise.reject(error);
    });








    return axiosSecure;
}

export default useAxiosSecure
import { useContext } from "react";
import { Navigate, useLocation } from 'react-router'

import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import img from '../assets/others/loader3.gif'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="w-full h-[100vh] flex justify-center items-center"><img src={img} alt="" /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
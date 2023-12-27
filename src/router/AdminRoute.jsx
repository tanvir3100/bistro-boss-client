import { useContext } from "react";
import { Navigate, useLocation } from 'react-router'

import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import img from '../assets/others/loader3.gif'
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div><img src={img} alt="" /></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
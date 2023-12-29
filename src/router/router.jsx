import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import Profile from "../Pages/Profile/Profile";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";





const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/ourShop/:category',
                element: <OurShop />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: 'dashboard',
        element: <div className="bg-[#F6F6F6] min-h-screen"><Dashboard /></div>,
        children: [

            // user Route 
            {
                path: 'cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            // admin router 
            {
                path: 'addItems',
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItems /></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                // loader: ({params}) => fetch(`http://localhost:3100/menu/${params.id}`)
                loader: ({ params }) => fetch(`http://localhost:3100/menu/${params}`)
            },
        ]
    }
]);


export default router;
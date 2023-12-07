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
                element: <Profile/>
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
            // admin router 
            {
                path: 'users',
                element: <AllUsers />
            },
            // user Route 
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
]);


export default router;
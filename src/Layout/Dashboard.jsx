import { NavLink, Outlet } from "react-router-dom";
import { LuShoppingCart } from 'react-icons/lu';
import { IoReorderThree } from 'react-icons/io5';
import { IoIosMailUnread } from 'react-icons/io';
import { FaHome, FaCalendarAlt, FaWallet, FaCalendarDay, FaShoppingBag } from 'react-icons/fa';


const Dashboard = () => {
    return (

        <div className="flex max-w-7xl mx-auto min-h-screen">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-[#D1A054]">
                <ul className="menu p-4 gap-2">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome className="text-2xl" />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendarAlt className="text-2xl" />
                            reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payment'>
                            <FaWallet className="text-2xl" />
                            payment history
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <LuShoppingCart className="text-2xl" />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'>
                            <LuShoppingCart className="text-2xl" />
                            add review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <FaCalendarDay className="text-2xl" />
                            my booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/dashboard/home'>
                            <FaHome className="text-2xl" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/menus'>
                            <IoReorderThree className="text-2xl" />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/shop'>
                            <FaShoppingBag className="text-2xl" />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'>
                            <IoIosMailUnread className="text-2xl" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard contain */}
            <div className="flex-1">
                <div className="w-4/5 mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
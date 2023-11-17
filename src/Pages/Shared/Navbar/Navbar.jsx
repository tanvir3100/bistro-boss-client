import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOption = <>
        <li><Link to='/' className="font-bold text-black lg:text-white">HOME</Link></li>
        <li><Link to='/menu' className="font-bold text-black lg:text-white">OUR MENU</Link></li>
        <li><a className="font-bold text-black lg:text-white">DASHBOARD</a></li>
        <li><Link to='/contactUs' className="font-bold text-black lg:text-white">CONTACT US</Link></li>
        <li><Link to='/ourShop/salad' className="font-bold text-black lg:text-white">OUR SHOP</Link></li>
        <li><Link to='/login' className="font-bold text-black lg:text-white">LOGIN</Link></li>
    </>
    return (
        <div className="navbar z-10 max-w-7xl mx-auto bg-opacity-60 bg-black text-white fixed">
            <div className="w-[30%]">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl flex justify-center items-center"><img className="w-[10%]" src="https://i.ibb.co/z6RN3WD/logo.png" alt="" /> Bistro Boss</a>
            </div>
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navOption}
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between text-black">
                                Profile
                                <span className="badge text-black">New</span>
                            </a>
                        </li>
                        <li><a className="text-black">Settings</a></li>
                        <li><a className="text-black">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
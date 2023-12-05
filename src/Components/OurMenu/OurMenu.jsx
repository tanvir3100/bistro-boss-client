// import { useEffect, useState } from "react";
import MenuItems from "../MenuItem/MenuItems";
import useMenu from "../../Hooks/useMenu";


const OurMenu = () => {
    const [menus] = useMenu()
    const popular = menus.filter(item => item.category === 'popular')


    // const [menus, setMenus] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:3100/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(menu => menu.category === 'popular')
    //             setMenus(popularItems)
    //         })
    // }, [])
    return (
        <div className='my-5 lg:my-10 px-10 lg:px-24 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popular?.map(menu => <MenuItems key={menu._id} menu={menu} />)
                }
            </div>
            <div className="text-center mt-10">
                <button className="btn text-[#1F2937] border-b-4 border-[#1F2937] border-t-0 border-l-0 border-r-0 hover:bg-[#1F2937] hover:border-none hover:text-white text-center">ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

export default OurMenu;
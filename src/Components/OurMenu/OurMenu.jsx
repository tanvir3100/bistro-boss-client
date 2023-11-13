import { useEffect, useState } from "react";
import SectionTitle from "../SectionTital/SectionTitle";
import MenuItems from "../MenuItem/MenuItems";


const OurMenu = () => {
    const [menus, setMenus] = useState()
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(menu => menu.category === 'popular')
                setMenus(popularItems)
            })
    }, [])
    return (
        <div className='my-5 lg:my-10 px-10 lg:px-24 mx-auto'>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menus?.map(menu => <MenuItems key={menu._id} menu={menu} />)
                }
            </div>
        </div>
    );
};

export default OurMenu;
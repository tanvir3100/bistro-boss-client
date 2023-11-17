import { Link } from "react-router-dom";
import MenuItems from "../../MenuItem/MenuItems";


const MenuCategory = ({ items, title }) => {
    return (
        <div className="my-5 lg:my-10 px-10 lg:px-24 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    items?.map(menu => <MenuItems key={menu._id} menu={menu} />)
                }
            </div>
            <div className="text-center mt-10">
                <Link to={`/ourShop/${title}`}>
                    <button className="btn text-[#1F2937] border-b-4 border-[#1F2937] border-t-0 border-l-0 border-r-0 hover:bg-[#1F2937] hover:border-none hover:text-white text-center">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
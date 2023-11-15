

const MenuItems = ({ menu }) => {
    const { name, recipe, image, price } = menu;
    return (
        <div>
            <div>
                <div className="flex justify-center items-center space-x-3">
                    <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[95px] h-[95px] bg-cover" src={image} alt="" />
                    <div>
                        <h3 className="uppercase">{name}----------</h3>
                        <p>{recipe}</p>
                    </div>
                    <p className="text-[#BB8506]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;


const FootCart = ({ item }) => {
    return (
        <div key={item._id} className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="w-full" src={item.image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <div className="bg-[#111827] text-white p-1 w-1/5 absolute top-5 right-5">
                    <p>${item.price}</p>
                </div>
                <h2 className="font-bold text-xl">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-t-0 border-l-0 border-r-0 hover:bg-[#1F2937] hover:border-none">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FootCart;
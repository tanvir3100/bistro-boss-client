import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from 'sweetalert2'
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const FootCart = ({ item }) => {
    const { name, image, price, recipe, _id } = item
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();



    const handleAddItem = food => {
        if (user && user.email) {
            // send cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} Added to the cart`,
                            showConfirmButton: false,
                            timer: 1700
                        });
                        //refetch cart to update the cart items count 
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: "You are not Logged In !",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div key={_id} className="card bg-base-100 shadow-xl rounded-none">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <div className="bg-[#111827] text-white p-1 w-1/5 absolute top-5 right-5">
                    <p>${price}</p>
                </div>
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddItem(item)}
                        className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-t-0 border-l-0 border-r-0 hover:bg-[#1F2937] hover:border-none">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FootCart;
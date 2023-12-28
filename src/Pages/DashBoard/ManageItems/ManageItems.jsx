import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTital/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        console.log(item._id)
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then(async (result) => {
        //     if (result.isConfirmed) {
        //         const res = await axiosSecure.delete(`/menu/${item._id}`)
        //         console.log(res.data)

        //         // if (res.data.deletedCount > 0) {
        //         //     Swal.fire({
        //         //         title: "Deleted!",
        //         //         text: `has been deleted.`,
        //         //         icon: "success"
        //         //     });
        //         // }
        //     }
        // });
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div>
            <SectionTitle
                heading={'Manage All Items'}
                subHeading={'only admin can'} />
            <div>
                <div className="bg-white mx-auto p-4">
                    <div className="flex justify-between">
                        <h2 className="text-3xl mb-5">Items: {menu.length}</h2>
                        {/* <h2 className="text-3xl">Total Price: {totalPrice}</h2> */}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table bg-base-200">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    menu?.map((user, index) => <tr key={user}>
                                        <th>{index + 1}</th>
                                        <td><img className="w-20 rounded-lg" src={user.image} alt="" /></td>
                                        <td>{user.name}</td>
                                        <td>{user.category}</td>
                                        <td>
                                            <button onClick={() => handleUpdate(item)} className="btn bg-orange-500 text-white">
                                                <FaEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button>
                                                <button onClick={() => handleDeleteItem(user)} className="btn bg-[#B91C1C] w-10 h-10 flex items-center justify-center btn-xs"><RiDeleteBinLine
                                                    className="text-2xl text-white" /></button>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
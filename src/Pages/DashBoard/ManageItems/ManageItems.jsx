import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTital/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBinLine } from "react-icons/ri";


const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div>
            <SectionTitle
                heading={'Manage All Items'}
                subHeading={'only admin can'} />
            <div>
                <div className="bg-white mx-auto p-4">
                    <div className="flex justify-between">
                        <h2 className="text-3xl">Items: {menu.length}</h2>
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
                                            {
                                                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500 text-white">
                                                    <FaUsers />
                                                </button>
                                            }
                                        </td>
                                        <td>
                                            <button>
                                                <button onClick={() => handleDeleteUser(user)} className="btn bg-[#B91C1C] w-10 h-10 flex items-center justify-center btn-xs"><RiDeleteBinLine
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
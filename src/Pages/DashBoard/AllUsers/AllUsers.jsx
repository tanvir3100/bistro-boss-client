
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTital/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                subHeading={'user section'} />
            <div className="bg-white mx-auto p-4">
                <div className="flex justify-between">
                    <h2 className="text-3xl">Items: {users.length}</h2>
                    {/* <h2 className="text-3xl">Total Price: {totalPrice}</h2> */}
                    <button className="btn bg-[#D1A054]">Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-base-200">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-lg bg-orange-500">
                                            <FaUsers/>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
// api, axios(axios secure), tan stack query.

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    });
    return [cart, refetch]
};

export default useCart;


































































// import { useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";



// const useCart = () => {
//     // by using tan stack query
//     const axiosSecure = useAxios()
//     const { data: cart = [] } = useQuery({
//         queryKey: ['cart'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/carts')
//             return res.data
//         }
//     });
//     return [cart]
// };

// export default useCart;
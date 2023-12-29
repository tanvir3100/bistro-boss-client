// import { useEffect, useState } from "react";

// import { useQuery } from "@tanstack/react-query"
// import useAxiosPublic from "./useAxiosPublic"

// const useMenu = () => {
//     const axiosPublic = useAxiosPublic();
//     // const [menus, setMenus] = useState([])
//     // const [loading, setLoading] = useState(true)
//     // useEffect(() => {
//     //     fetch('http://localhost:3100/menu')
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             setMenus(data)
//     //             setLoading(false)  
//     //         })
//     // }, [])

//     const { data: menu = [], isPending: loading, refetch } = useQuery({
//         queryKey: ['menu'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/menu');
//             return res.data;
//         }
//     })


//     return [menu, loading, refetch]
// }

// export default useMenu

// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useMenu = () => {
    const axiosPublic = useAxiosPublic();

    // The useQuery hook is used to fetch menu data
    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],  // An identifier for the query
        queryFn: async () => {
            // Axios is used to make a GET request to fetch menu data
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    // The hook returns an array with menu data, loading state, and a refetch function
    return [menu, loading, refetch]
}

export default useMenu

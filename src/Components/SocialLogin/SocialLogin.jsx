import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogle = () => {
        googleUser()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }

    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-outline hover:bg-gradient-to-r from-green-100 to-green-500 font-bold hover:text-white hover:border-none rounded-none w-full"><FcGoogle className="text-3xl" />Login With Google</button>
        </div>
    );
};

export default SocialLogin;
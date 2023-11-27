import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <button className="btn btn-outline hover:bg-gradient-to-r from-green-100 to-green-500 font-bold hover:text-white hover:border-none rounded-none"><FcGoogle className="text-3xl" />Login With Google</button>
        </div>
    );
};

export default SocialLogin;
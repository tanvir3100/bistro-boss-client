import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-1">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl w-full" />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning">Go To Eat</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
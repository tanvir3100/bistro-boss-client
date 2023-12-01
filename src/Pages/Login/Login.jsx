import { useContext } from 'react'
import { useState } from "react";
import background from '../../assets/others/authentication.png'
import loginImage from '../../assets/others/authentication2.png'
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import HelmetSection from '../../Hooks/Helmet/HelmetSection';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const [disable, setDisable] = useState(true)
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    console.log('location form state', location.state)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire("SweetAlert2 is working!");
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error)
            })
    }




    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <div className="w-full min-h-screen flex justify-center items-center" style={{ background: `url(${background})` }}>
            <HelmetSection
                title={'bistro | Log In'} />
            <div className=" w-[80%] h-[80%] shadow-2xl mb-10 mt-10" style={{ background: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold text-center">Login now!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input disabled={disable} className='btn bg-[#D1A054B3] text-white' type="submit" value="Login" />
                            </div>
                            <div className="form-control">
                                <SocialLogin />
                            </div>
                        </form>
                        <p className='text-center mb-5'>Have no Account ? <Link to='/register'><span className='hover:text-red-700 hover:underline'>Sign Up</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;


import { useRef } from 'react'
import { useState } from "react";
import background from '../../assets/others/authentication.png'
import loginImage from '../../assets/others/authentication2.png'
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef()
    const [disable, setDisable] = useState(true)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
        <div className="w-full h-[100vh] flex justify-center items-center" style={{ background: `url(${background})` }}>
            <div className=" w-4/5 h-5/6 shadow-2xl" style={{ background: `url(${background})` }}>
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
                                <input type="text" ref={captchaRef} name='text' placeholder="type the captcha" className="input input-bordered" required />
                                <div className='mt-2 w-full'>
                                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-sm w-full'>Validate</button>
                                </div>
                            </div>
                            <div className="form-control">
                                <input disabled={disable} className='btn bg-[#D1A054B3] text-white' type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


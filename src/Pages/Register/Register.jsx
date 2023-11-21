/* eslint-disable no-useless-escape */
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import background from '../../assets/others/authentication.png'
import loginImage from '../../assets/others/authentication2.png'
import HelmetSection from '../../Hooks/Helmet/HelmetSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    const { createUser, updateProfileUser } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateProfileUser(data.name, data.photoURL)
                    .then(() => {
                        console.log('profile updated')
                        reset()
                        toast('Sign Up Successfully Done')
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .then(error => {
                console.log(error)
            })
        // window.location.reload()
    }


    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password)

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //         })
    //         .then(error => {
    //             console.log(error)
    //         })
    // }

    return (
        <div className="w-full min-h-screen flex justify-center items-center" style={{ background: `url(${background})` }}>
            <HelmetSection
                title={'bistro | Sign Up'} />
            <div className=" w-[80%] shadow-2xl mb-10 mt-10" style={{ background: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='w-[80%]' src={loginImage} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold text-center">Register</h1>
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-700 mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="photo" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-700 mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-700 mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-700'>Password must be in 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-700'>Password must less then 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-700'>Password must have one number, one capital letter and one special character</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-[#D1A054B3] text-white' type="submit" value="Submit" />
                            </div>
                        </form>
                        <p className='text-center'>Already Have Account ? <Link to='/login'><span className='hover:text-green-600 hover:underline'>Log in</span></Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
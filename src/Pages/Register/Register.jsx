import background from '../../assets/others/authentication.png'
import loginImage from '../../assets/others/authentication2.png'

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className="w-full h-[100vh] flex justify-center items-center" style={{ background: `url(${background})` }}>
            <div className=" w-4/5 h-3/4 shadow-2xl" style={{ background: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='w-[80%]' src={loginImage} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold text-center">Register</h1>
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
                            <div className="form-control mt-6">
                                <input className='btn bg-[#D1A054B3] text-white' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from './../../__firebase_init';
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loginError,setLoginError] =useState ('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //reset status 
        setSuccess(false);


        // login User
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess (true);
            })

            .catch(error => {
                console.log('ERROR', error.message);
                setLoginError(error.message);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label  ">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : "password"}

                                placeholder="password" name="password"
                                className="input input-bordered " required />

                            <button type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className=" btn btn-xs absolute right-5 top-7 ">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        success && <p className="text-green-600"> User login Succesfull</p>
                    }
                    {
                       loginError && <p className="text-red-500">{loginError}</p> 
                    } 

                    <p className="m-3">New to this website ? please  {" "}<Link to = '/signUp' className="text-blue-500 underline m-2">Sign up ! </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
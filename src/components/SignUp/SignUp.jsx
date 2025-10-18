import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../__firebase_init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password,terms);

        //reset error and staus
        setErrorMessage('');
        setSuccess(false);

         if(!terms){
            setErrorMessage( 'Please accept out terms and condition');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password should be 6 character or longer');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase ,one number, one lowercase,one special character')
            return;
        }

       

        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);
            })
            .catch(error => {
                console.log("ERROR", error.message);
                setErrorMessage(error.message)
                setSuccess(false);
            })

    }

    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className="text-2xl font-bold ml-4">Sign Up now!</h2>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="password"
                        className="input input-bordered" required />
                    <button type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btn btn-xs absolute right-5 top-7 ">
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                    <label className="label">
                        <a href="#" className="label-text-alt link 
                        link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" name="terms" className="checkbox" />
                        <span className="label-text">Accept Our Terms And Condition.</span>
                    </label>
                </div>

                <div  className="form-control mt-6">
                    <button  className="btn btn-primary">Sign Up</button>
                </div>
            </form>

            {
                errorMessage && <p className="text-red-600">{errorMessage}</p>

            }
            {
                success && <p className="text-green-600 text-center font-bold">Sign in successfull</p>
            }

            {
                <p className=" m-2">
                    Already have an account? Please <Link to ="/login" className="text-blue-500 underline">Log In!</Link>

                </p>
            }
        </div>

    );
};

export default SignUp;
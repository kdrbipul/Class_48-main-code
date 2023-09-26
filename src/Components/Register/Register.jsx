// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Context/UserContext';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();



const Register = () => {
    
    const handleSignup = (e) => {
        e.preventDefault();
        console.log("handleSignup clicked");
    }
    
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Please Sign Up!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
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
                            <label className="label">
                                <Link to="/login" >Already have an account? <span className="text-lg label-text-alt link link-hover">Please Login</span></Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Sign Up' />
                            </div>
                        </form>
                        </div>
                    </div>
            </div>  
        </>
    );
};

export default Register;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log("handleLogin clicked");
    }
    
    
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content my-10 flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to="/register" >New User in website? <span className="text-lg label-text-alt link link-hover">Please Sign Up</span></Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        </div>
                    </div>
            </div>  
        </>
        
    );
};

export default Login;
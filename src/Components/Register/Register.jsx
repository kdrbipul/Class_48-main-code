
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';




const Register = () => {
    const {createUser, GoogleSignIn} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    
    
    const handleSignup = (e) => {
        e.preventDefault();
        
        const form = e.target;
        
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            
            form.reset();
            setSuccess('Your registration is successful')
        })
        .catch(error =>{
            error;
        })
        
    }

    const handleGoogleLogIn = (e) => {
        e.preventDefault();
        GoogleSignIn()
        .then(result =>{
            const user = result.user;
            
            setSuccess('Your Google registration is successful')
        })
        .catch(error =>{
            error;
        })
    }
    
    
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content my-10 flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">Please Sign Up!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to="/login" >Already have an account? <span className="text-lg label-text-alt link link-hover">Please Login</span></Link>
                            </label>
                                <h1 className='text-green-500 text-xl font-bold'>{success}</h1>
                            </div>
                            <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Sign Up' />
                            </div>
                            <div className="form-control mt-6">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary" value='Sign Up' >Google With Signin</button>
                            </div>
                        </form>
                        
                        </div>
                    </div>
            </div>  
        </>
    );
};

export default Register;
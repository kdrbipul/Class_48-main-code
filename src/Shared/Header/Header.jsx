import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/react.svg";
import { AuthContext } from '../../Context/UserContext';
import "./Header.css"



const Header = () => {
    const {name} = useContext(AuthContext);
    return (
       <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">REACT</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li>
                            <h1>{name}</h1>
                            <img className="w-10 rounded-full" src='' />
                        </li>
                    </ul>
                </div>
            </div>
       </>
    );
};

export default Header;
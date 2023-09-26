import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/react.svg";
import "./Header.css"

const Header = () => {
    return (
       <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">REACT</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><img className="w-10 rounded-full" src='' /></li>
                    </ul>
                </div>
            </div>
       </>
    );
};

export default Header;
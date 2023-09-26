import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/react.svg";
import "./Header.css"

const Header = () => {
    return (
        <div className='container'>
            <div className="navbar">
                <div className="nav_logo">
                    <h1>Kader <img src={logo} alt="" /></h1>
                    
                </div>
                <div className="nav_content">
                    <ul>
                        <li>
                            <Link to ='/login'>Login</Link>
                            <Link to ='/register'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
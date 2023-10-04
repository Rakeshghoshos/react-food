import React from 'react';
import {NavLink} from 'react-router-dom';
import './Css/Navbar.css';

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
            </ul>
            <div>
                <details>
                    <summary>User</summary>
                    <li><NavLink to="/login">Login</NavLink></li><br />
                    <li><NavLink to="/register">Register</NavLink></li><br />
                </details>
            </div>
        </nav>
    );
}
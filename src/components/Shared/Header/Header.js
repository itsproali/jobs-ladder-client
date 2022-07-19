import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo.png'
const Header = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
            <div class="navbar bg-base-100">
                <div class="dropdown navbar-start lg:hidden">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link className='btn border-primary hover:base-100 text-base-100' to="/login">Login</Link></li>
                    </ul>
                </div>
                <div class="lg:navbar-start w-full flex justify-end">
                    <Link to="/" class=" normal-case text-xl"><img src={logo} alt=""></img></Link>
                </div>
                
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link className='btn border-primary hover:base-100' to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;
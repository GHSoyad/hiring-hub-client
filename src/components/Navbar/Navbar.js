import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/careers'>Careers</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="bg-primary-content/95 z-50 sticky top-0">
            <div className="navbar justify-between container mx-auto max-w-screen-xl font-semibold relative">
                <Link to='/' className="max-w-[200px] mr-4">Hiring Hub</Link>
                <div className='flex gap-1'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
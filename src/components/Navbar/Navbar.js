import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import logo from '../../assets/logo.png'

const Navbar = () => {

    const { userInfo, logOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => toast.success('Logged Out.'))
            .catch(error => toast.error(error.message))
    }

    const menuLinks = <>
        <li className='disabled'><NavLink to='/home' className='pointer-events-none'>Home</NavLink></li>
        <li><NavLink to='/jobs'>Jobs</NavLink></li>
        <li className='disabled'><NavLink to='/about' className='pointer-events-none'>About</NavLink></li>
        <li className='disabled'><NavLink to='/services' className='pointer-events-none'>Services</NavLink></li>
        <li><NavLink to='/'>Careers</NavLink></li>
        <li className='disabled'><NavLink to='/contact' className='pointer-events-none'>Contact</NavLink></li>
        {
            userInfo && userInfo.uid &&
            <li onClick={handleLogout}><button>Logout</button></li>
        }
    </>

    return (
        <div className="bg-primary-content/90 z-50 sticky top-0">
            <div className="navbar justify-between container mx-auto max-w-screen-xl font-bold relative">
                <Link to='/' className="mr-4">
                    <div className='max-w-[50px]'>
                        <img src={logo} alt='logo' className='w-full'></img>
                    </div>
                    <p className='text-2xl'>Hiring Hub</p>
                </Link>
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
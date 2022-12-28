import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container max-w-screen-lg mx-auto'>
                <ul className='flex gap-4 font-bold mt-4 justify-center'>
                    <NavLink to='/dashboard/all-jobs' className={({ isActive }) => isActive ? 'bg-primary text-white' : 'bg-primary-content/95'}><li className='py-2 px-6'>All Jobs</li></NavLink>
                    <NavLink to='/dashboard/add-job' className={({ isActive }) => isActive ? 'bg-primary text-white' : 'bg-primary-content/95'}><li className='py-2 px-6'>Add A Job</li></NavLink>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const Dashboard = () => {

    const { userInfo } = useContext(AuthContext);

    return (
        <div className='container max-w-screen-lg mx-auto my-10 bg-primary-content/95 p-6 rounded-md flex flex-col gap-4 text-center'>
            <h2 className='text-2xl font-bold text-primary'>Welcome {userInfo?.displayName}</h2>
            <p>Navigate to start</p>
        </div>
    );
};

export default Dashboard;
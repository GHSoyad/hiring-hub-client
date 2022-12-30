import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
    const { userInfo } = useContext(AuthContext);
    return (
        <div className='container mx-auto max-w-screen-lg px-2 md:px-4 xl:px-0 my-8'>
            Home {userInfo?.displayName}
        </div>
    );
};

export default Home;
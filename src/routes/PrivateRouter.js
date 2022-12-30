import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRouter = ({ children }) => {

    const { loading, userInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <p>Loading...</p>
    }

    if (userInfo && userInfo.uid) {
        return children;
    }


    return navigate('/login');
};

export default PrivateRouter;
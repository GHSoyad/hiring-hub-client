import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const { emailSignIn, setUserInfo, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    // SignIn user
    const handleUserSignIn = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        emailSignIn(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                setUserInfo(user)
                navigate('/dashboard')
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_380px)]'>
            <div className='bg-primary/20 max-w-md mx-auto p-8 rounded-lg my-10'>
                <form onSubmit={handleUserSignIn}>
                    <h1 className='text-3xl text-primary font-medium mb-6 text-center'>Login Here</h1>
                    <div className="form-control w-full mb-2">
                        <label className="label font-medium">
                            <span>Your Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label font-medium">
                            <span>Your Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <button type='submit' className='btn btn-primary w-full mt-6'>Login</button>
                    <p className='text-base mt-4 text-center'>Don't have an account? <Link to='/register' className='text-primary font-medium hover:underline'>Register.</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center relative w-full bg-banner bg-cover bg-center bg-no-repeat -mt-[66px]">
            <div className='absolute inset-0 bg-primary/10'></div>
            <div className="mx-auto max-w-xl text-center relative backdrop-blur-sm p-4">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-200">
                    The Easiest Way to
                    <strong className="font-extrabold text-primary sm:block">
                        Get Your New Job
                    </strong>
                </h1>

                <p className="mt-4 sm:text-xl sm:leading-relaxed text-white" style={{ textShadow: '0 0 5px black' }}>Each month, more than 3 million job seekers turn to
                    website in their search for work, making over 140,000
                    applications every single day</p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 font-bold">
                    <Link to='/login'><button className="block w-full rounded px-12 py-3 text-sm text-white shadow border-2 border-primary sm:w-auto hover:text-white hover:bg-primary">Login</button></Link>
                    <Link to='/jobs'><button className="block w-full rounded bg-primary px-12 py-3 text-sm text-white shadow border-2 border-primary sm:w-auto hover:text-primary hover:bg-transparent/50">Get Started</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
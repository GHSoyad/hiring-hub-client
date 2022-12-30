import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {

    const { _id, role, location, type } = job;

    return (
        <div className='bg-primary/10 p-4 sm:p-6 rounded-lg font-medium shadow-md hover:shadow-lg md:hover:scale-105 hover:border-primary/40 border-2 transition-all flex-1'>
            <h2 className='text-2xl'>{role}</h2>
            <p className='font-normal'>{location}</p>
            <p className='mt-4'>{type}</p>
            <Link to={`/job/${_id}_${role}`}><button className='btn btn-primary mt-4'>View Details</button></Link>
        </div>
    );
};

export default JobCard;
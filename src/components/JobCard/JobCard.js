import React from 'react';

const JobCard = ({ job }) => {

    const { role, location, type } = job;

    return (
        <div className='bg-primary/20 p-6 rounded-lg font-medium shadow-lg hover:shadow-xl'>
            <h2 className='text-2xl'>{role}</h2>
            <p className='font-normal'>{location}</p>
            <p className='mt-4'>{type}</p>
            <button className='btn btn-primary mt-4'>View Details</button>
        </div>
    );
};

export default JobCard;
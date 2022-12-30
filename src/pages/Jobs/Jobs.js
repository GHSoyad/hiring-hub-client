import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';

const Jobs = () => {

    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');

    const { isLoading, data: jobs } = useQuery({
        queryKey: ['jobs', role, location],
        queryFn: () => fetch(`https://hiring-hub-server.vercel.app/jobs?role=${role}&location=${location}`)
            .then(res => res.json())
    })

    const { isLoading: filterLoading, data: jobsFilter } = useQuery({
        queryKey: ['jobFilter'],
        queryFn: () => fetch(`https://hiring-hub-server.vercel.app/jobs`)
            .then(res => res.json())
    })

    const jobFilter = (query) => {
        if (jobsFilter) {
            return [...new Set(jobsFilter.map(job => job[query]))].sort();
        }
    }


    return (
        <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 my-8 lg:flex gap-6'>
            <aside className='lg:min-h-screen bg-primary/10 rounded-lg shadow-lg w-full lg:w-[240px] relative'>
                <div className='flex flex-col sm:flex-row lg:flex-col gap-4 p-6 rounded-lg sticky top-16'>
                    <select className="select select-primary" onChange={(e) => setRole(e.target.value)}>
                        <option value=''>Job Roles</option>
                        {filterLoading ? <option>Loading...</option> :
                            jobFilter('role').map(role => <option key={role} value={role}>{role}</option>)
                        }
                    </select>
                    <select className="select select-primary" onChange={(e) => setLocation(e.target.value)}>
                        <option value=''>Job Locations</option>
                        {filterLoading ? <option>Loading...</option> :
                            jobFilter('location').map(location => <option key={location} value={location}>{location}</option>)
                        }
                    </select>
                </div>
            </aside>
            <main className='flex-1 mt-6 lg:mt-0'>
                {
                    isLoading ? <p className='text-xl font-medium p-6 text-primary animate-pulse'>Loading...</p> :
                        jobs.length ?
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                                }
                            </div>
                            :
                            <div className='text-xl font-medium p-6'>No Jobs Found in <span className='text-primary'>{location}</span> as <span className='text-primary'>{role}</span></div>
                }
            </main>
        </div>
    );
};

export default Jobs;
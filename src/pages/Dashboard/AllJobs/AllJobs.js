import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const AllJobs = () => {

    const { isLoading, data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch("http://localhost:5000/jobs")
                .then(res => res.json())
    })

    return (
        <div className='container max-w-screen-lg mx-auto mt-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Job Role</th>
                            <th>Job Type</th>
                            <th>Location</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? <tr><td>Loading...</td></tr> :
                                jobs.map((job, i) =>
                                    <tr key={job._id} className='hover'>
                                        <th>{i + 1}</th>
                                        <td>{job.role}</td>
                                        <td>{job.type}</td>
                                        <td>{job.location}</td>
                                        <td>
                                            <div className='flex gap-6 text-xl justify-center h-full'>
                                                <FaRegEdit title='Edit' className='hover:text-green-600 hover:scale-110 cursor-pointer transition'></FaRegEdit>
                                                <FaRegTrashAlt title='Delete' className='hover:text-red-600 hover:scale-110 cursor-pointer transition'></FaRegTrashAlt>
                                            </div>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;
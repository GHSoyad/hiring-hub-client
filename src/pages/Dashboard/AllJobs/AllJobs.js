import { ErrorResponse } from '@remix-run/router';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import ConfirmModal from '../../../components/ConfirmModal/ConfirmModal';
import EditJobModal from './EditJobModal';

const AllJobs = () => {

    const [job, setJob] = useState({});
    const { isLoading, data: jobs, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch("http://localhost:5000/jobs")
                .then(res => res.json())
    })

    const handleEdit = (e, id) => {

        e.preventDefault();
        const form = e.target;
        const job = {
            role: form.role.value,
            location: form.location.value,
            salary: form.salary.value,
            type: form.type.value
        }

        fetch(`http://localhost:5000/job/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('Job Details Updated');
                    refetch();
                    setJob(null);
                }
            })
            .catch(error => console.log(error))
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/job/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log('Job Deleted!');
                    refetch();
                    setJob(null);
                }
            })
            .catch(error => console.log(error))
    }

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
                                                <label htmlFor="edit-job-modal"><FaRegEdit onClick={() => setJob(job)} title='Edit' className='hover:text-green-600 hover:scale-110 cursor-pointer transition'></FaRegEdit></label>
                                                <label htmlFor="confirm-modal"><FaRegTrashAlt onClick={() => setJob(job)} title='Delete' className='hover:text-red-600 hover:scale-110 cursor-pointer transition'></FaRegTrashAlt></label>
                                            </div>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {
                job &&
                <EditJobModal job={job} handleEdit={handleEdit}></EditJobModal>
            }
            {
                job &&
                <ConfirmModal data={job} action={handleDelete}></ConfirmModal>
            }
        </div>
    );
};

export default AllJobs;
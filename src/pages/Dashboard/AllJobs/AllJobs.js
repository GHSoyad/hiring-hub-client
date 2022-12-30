import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import ConfirmModal from '../../../components/ConfirmModal/ConfirmModal';
import EditJobModal from './EditJobModal';

const AllJobs = () => {

    const [updating, setUpdating] = useState(false);
    const [job, setJob] = useState({});
    const { isLoading, data: jobs, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch("https://hiring-hub-server.vercel.app/jobs")
                .then(res => res.json())
    })

    const handleEdit = (e, id) => {
        e.preventDefault();
        setUpdating(true);
        const form = e.target;
        const job = {
            role: form.role.value,
            location: form.location.value,
            salary: form.salary.value,
            type: form.type.value
        }

        fetch(`https://hiring-hub-server.vercel.app/job/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Job Details Updated');
                    refetch();
                    setJob(null);
                }
            })
            .catch(error => toast.error(error.message))
            .finally(() => setUpdating(false))
    }

    const handleDelete = (id) => {
        setUpdating(true);
        fetch(`https://hiring-hub-server.vercel.app/job/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Job Deleted!');
                    refetch();
                    setJob(null);
                }
            })
            .catch(error => toast.error(error))
            .finally(() => setUpdating(false))
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
                <EditJobModal job={job} handleEdit={handleEdit} setJob={setJob} updating={updating}></EditJobModal>
            }
            {
                job &&
                <ConfirmModal data={job} action={handleDelete} updating={updating}></ConfirmModal>
            }
        </div>
    );
};

export default AllJobs;
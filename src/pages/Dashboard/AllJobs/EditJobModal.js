import React from 'react';

const EditJobModal = ({ job, handleEdit }) => {

    const { _id, role, location, type, salary } = job;
    const jobTypes = ["Full-time", "Part-time", "Internship", "Apprenticeship", "Freelance"]

    return (
        <div>
            <input type="checkbox" id="edit-job-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={(e) => handleEdit(e, _id)} className="modal-box relative flex flex-col gap-2">
                    <label htmlFor="edit-job-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update {role}</h3>
                    <div>
                        <label className="label label-text font-medium">Job Role</label>
                        <input defaultValue={role} onFocus={(e) => e.target.select()} name='role' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className='flex justify-between gap-4'>
                        <div>
                            <label className="label label-text font-medium">Job Location</label>
                            <input defaultValue={location} onFocus={(e) => e.target.select()} name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                        </div>
                        <div>
                            <label className="label label-text font-medium">Salary</label>
                            <input defaultValue={salary} onFocus={(e) => e.target.select()} name='salary' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                        </div>
                    </div>
                    <div>
                        <label className="label label-text font-medium">Job Type</label>
                        <select name='type' className="select select-primary w-full">
                            {
                                jobTypes.map(job => <option key={job} value={job} selected={job === type}>{job}</option>)
                            }
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2'>Update Job</button>
                </form>
            </div>
        </div>
    );
};

export default EditJobModal;
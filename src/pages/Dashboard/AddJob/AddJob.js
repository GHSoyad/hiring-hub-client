import React from 'react';

const AddJob = () => {

    const jobTypes = ["Full-time", "Part-time", "Internship", "Apprenticeship", "Freelance"]

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const job = {
            role: form.title.value,
            location: form.location.value,
            salary: form.salary.value,
            type: form.type.value,
            description: form.description.value,
        }

        fetch("http://localhost:5000/job", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log("Job Posted");
                    form.reset();
                }
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='container max-w-screen-lg mx-auto my-10'>
            <form onSubmit={(e) => handleForm(e)} className='bg-primary-content/95 max-w-lg mx-auto p-6 rounded-md flex flex-col gap-4'>
                <div>
                    <label className="label label-text font-medium">Job Title</label>
                    <input name='title' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                </div>
                <div className='flex justify-between gap-4'>
                    <div>
                        <label className="label label-text font-medium">Job Location</label>
                        <input name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                    </div>
                    <div>
                        <label className="label label-text font-medium">Salary</label>
                        <input name='salary' type="text" placeholder="Type here" className="input input-bordered input-primary w-full" required />
                    </div>
                </div>
                <fieldset className="border border-primary rounded-md p-3">
                    <legend className="label label-text font-medium">Job Type</legend>
                    <div className='grid grid-cols-2 gap-1'>
                        {
                            jobTypes.map(job =>
                                <div key={job} className='flex items-center gap-2'>
                                    <input type="radio" value={job} name="type" className="radio radio-primary w-5 h-5" required />
                                    <label className="label label-text font-medium">{job}</label>
                                </div>)
                        }
                    </div>
                </fieldset>
                <div>
                    <label className="label label-text font-medium">Job Description</label>
                    <textarea name='description' className="textarea textarea-primary w-full" placeholder="Bio" required></textarea>
                </div>
                <button type='submit' className='btn btn-primary mt-2'>Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;
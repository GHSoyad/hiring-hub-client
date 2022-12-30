import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";
import { FaMapMarkerAlt, FaDollarSign, FaCertificate, FaUsers, FaBriefcase, FaUserGraduate } from "react-icons/fa";
import JobCard from '../../components/JobCard/JobCard';

const JobDetails = () => {
    const job = useLoaderData();
    const id = job.split('_')[0];

    const { isLoading, data: jobDetails } = useQuery({
        queryKey: ['jobDetails', id],
        queryFn: () => fetch(`https://hiring-hub-server.vercel.app/job/${id}`)
            .then(res => res.json())
    })

    const { isLoading: jobsLoading, data: similarJobs } = useQuery({
        queryKey: ['jobs', jobDetails?.role, jobDetails?.location],
        queryFn: () => fetch(`https://hiring-hub-server.vercel.app/jobs?role=${jobDetails?.role}`)
            .then(res => res.json()),
        enabled: !!jobDetails
    })

    let filteredSimilarJobs = [];
    if (similarJobs) {
        filteredSimilarJobs = similarJobs.filter(job => jobDetails._id !== job._id)
    }

    const res = [
        'Designing, recommending improvements, adding new features and functionality',
        'Excellent knowledge about WORDPRESS dashboards', 'Updating, Improving and editing website design, content, and pages',
        'Testing and giving feedback on new and existing website functionalities', 'Optimising the performance of our website',
        'Maintaining the appearance of websites by enforcing content standards',
        'Communicating design ideas using user flows, process flows, site maps, and wireframes',
        'Designing sample pages including colors & fonts. Preparing design plans'
    ]

    return (
        <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 my-8 md:flex gap-12'>
            <div className='flex-1 rounded-lg'>
                {
                    isLoading ? <p>Loading...</p> :
                        <>
                            <h1 className='text-xl md:text-3xl font-medium mb-6'>{jobDetails?.role}</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 text-lg'>
                                <p className='flex items-center gap-1'><FaMapMarkerAlt></FaMapMarkerAlt> {jobDetails?.location}</p>
                                <p className='flex items-center gap-1'><FaBriefcase></FaBriefcase> {jobDetails?.type}</p>
                                <p className='flex items-center gap-1'><FaDollarSign></FaDollarSign> {jobDetails.salary ? jobDetails.salary : 'Not Specified'}</p>
                                <p className='flex items-center gap-1'><FaCertificate></FaCertificate> {jobDetails.experience ? jobDetails.experience : 'No Experience'}</p>
                                <p className='flex items-center gap-1'><FaUserGraduate></FaUserGraduate> {jobDetails.qualification ? jobDetails.qualification : 'No Qualification'}</p>
                                <p className='flex items-center gap-1'><FaUsers className='text-xl'></FaUsers> {jobDetails.opening ? jobDetails.opening : 'Not Specified'}</p>
                            </div>
                            <div className='mt-8 text-justify'>
                                <h2 className='text-xl font-medium mb-2'>Job Description</h2>
                                <p>A front-end developer works closely with the creative team to develop visually appealing and intuitive websites and apps for clients based on collaboration with the design team. You'll need a good eye for design to be able to make changes post-launch without requiring designer feedback.</p>
                            </div>
                            <div className='mt-8 text-justify'>
                                <h2 className='text-xl font-medium mb-2'>Responsibility</h2>
                                <ul>
                                    {
                                        res.map(r => <li key={r} className='flex mb-2'><span className='text-xl w-5 pt-1'><RiArrowRightSLine></RiArrowRightSLine></span>{r}</li>)
                                    }
                                </ul>
                            </div>
                        </>
                }
            </div>
            <aside className='md:w-[320px] rounded-lg mt-6 md:mt-0 border border-gray-300 p-6'>
                <h2 className='text-xl font-medium mb-4'>Similar Jobs</h2>
                <div className='grid grid-cols-1 sm:flex md:flex-col gap-6'>
                    {
                        jobsLoading ? <p>Loading...</p> :
                            filteredSimilarJobs.length > 0 ?
                                filteredSimilarJobs.map(job => <JobCard key={job._id} job={job}></JobCard>) :
                                <p>No similar jobs found</p>
                    }
                </div>
            </aside>
        </section>
    );
};

export default JobDetails;
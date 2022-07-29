import React from 'react';
import { useSelector } from "react-redux";
import ButtonDefault from '../../../components/ButtonDefault/ButtonDefault';
import store from '../../../store';
import { AiFillEye } from 'react-icons/ai';
import JobSCard from './Jobs-card';
import { Link } from 'react-router-dom';
const JobPost = () => {
    const jobpost = useSelector((state) => store.jobpostReducer)
    console.log(jobpost);
    return (
        <div className='capitalize'>
            <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center ">
                <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
                    job circulars
                </h5>
                <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
                    posted by linkedin company
                </h1>
            </div>
            <div className='flex justify-end'>
                <Link to='/dashboard/jobpostform'>
                <ButtonDefault text='add new'></ButtonDefault>
                </Link>
            </div>
            <h1 className='flex items-center gap-2 text-secondary'> <AiFillEye className='text-xl' /> public view</h1>
            <div>
                <JobSCard/>
            </div>
        </div>
    );
};

export default JobPost;
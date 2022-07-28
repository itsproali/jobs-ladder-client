import React from 'react';
import {useSelector} from "react-redux";
import store from '../../../store';
const JobPost = () => {
    const jobpost = useSelector((state)=> store.jobpostReducer)
    console.log(jobpost);
    return (
        <div>
            job post
        </div>
    );
};

export default JobPost;
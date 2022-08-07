import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { AiTwotoneMedicineBox } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { GrOrganization } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import Swal from 'sweetalert2';
import ButtonDefault from '../../../components/ButtonDefault/ButtonDefault';
import auth from '../../../firebase-init';
import fetching from '../../../hooks/UseAddUserInfo/fetching';
import useUserRole from '../../../hooks/UseAddUserInfo/useUserRole';
import getJobPosts from '../../../stateManagement/actions/Actions';

const JobSCard = ({ job, apply }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [role] = useUserRole(user);
  const { title, _id, companySecret ,  companyName , date, description, jobRequirements, jobState, jobTypes, location, } = job;
  const navigateToApplyForm = (_id)=>{
    navigate(`apply/${_id}`)
  }

  // console.log(companySecret);

  const handleRemovePost = () => {
    const url = `/job-post/${_id}`;
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.isConfirmed) {
        await fetching.delete(url) 
        await dispatch(getJobPosts())
        await Swal.fire(
           'Deleted!',
           'Your file has been deleted.',
           'success'
         )
      }
    })
  }
  return (
    <div className='relative mt-5 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between md:h-[300px] bg-transparent backdrop-blur-md'>
      <div>
        <h1>
          <span className='text-2xl font-semibold text-primary link link-hover'> {title} </span> ( {jobState} )
        </h1>
        <h5 className='flex gap-2 mt-1 items-center'>
          <GrOrganization />
          <span className=' text-primary link link-hover font-semibold'> {companyName}</span>
        </h5>
        <div className='flex gap-5'>
          <h5 className='flex gap-2 mt-2 items-center'>
            <GoLocation />
            {location}
          </h5>
          <h5 className='flex gap-2 mt-2 items-center'>
            <FiClock />
            <ReactTimeAgo date={date} locale="en-US" />
          </h5>
        </div>
        <p className='my-2'>{description.slice(0, 200)}...</p>

        <p>Skills Requirement: &nbsp; &nbsp;
          {jobRequirements?.map((requirement, index) => <span key={index} className='border-b-[1px] border-secondary mr-2 '>{requirement}</span>)}

        </p>


      </div>
      <div className='bg-[#F2F2F3] h-14 flex items-center px-6 w-full absolute bottom-0 left-0'>
        <div className='flex gap-5 items-center'>
          {jobTypes?.map((type, index) => <p key={index} className='badge badge-primary text-md py-4 px-3'>{type}</p>)}

        </div>
      </div>
      {role === 'job-seeker' && <div className='absolute top-5 right-5'>
        {/* <ButtonDefault text='apply'></ButtonDefault> */}

      <label onClick={()=>navigateToApplyForm(_id)}  for="my-modal-3" class="btn btn-primary modal-button border">APPLY</label>


      

      </div>}
      {role === 'HR' && <div onClick={handleRemovePost} className='absolute top-5 right-5'>
        <ButtonDefault text='remove post'></ButtonDefault>
      </div>}
    </div>
  );
};

export default JobSCard;
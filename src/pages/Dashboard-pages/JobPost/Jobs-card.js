import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiTwotoneMedicineBox } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { GrOrganization } from 'react-icons/gr';
import ButtonDefault from '../../../components/ButtonDefault/ButtonDefault';
import auth from '../../../firebase-init';
import useUserRole from '../../../hooks/UseAddUserInfo/useUserRole';

const JobSCard = () => {
  const [user] = useAuthState(auth);
  const [role] = useUserRole(user);
  console.log(role);
  return (
    <div className='relative mt-5 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between md:h-[300px] bg-transparent backdrop-blur-md'>
      <div>
        <h1>
          <span className='text-2xl font-semibold text-primary link link-hover'>Jr. Front-End Developer </span> ( Internship )
        </h1>
        <h5 className='flex gap-2 mt-1 items-center'>
          <GrOrganization />
          <span className=' text-primary link link-hover font-semibold'> Microsoft OP</span>
        </h5>
        <div className='flex gap-5'>
          <h5 className='flex gap-2 mt-2 items-center'>
            <GoLocation />
            location OP
          </h5>
          <h5 className='flex gap-2 mt-2 items-center'>
            <FiClock />
            min ago
          </h5>
        </div>
        <p className='my-2'>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi architecto perspiciatis illo. Assumenda ipsa incidunt aspernatur velit accusamus quis perspiciatis atque ab quia voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi architecto perspiciatis illo. Assumenda ipsa incidunt aspernatur velit accusamus quis perspiciatis atque ab quia voluptate'.slice(0, 200)}...</p>

        <p>Skills Requirement: &nbsp; &nbsp;
          <span className='underline mr-2 '>React</span>
          <span className='underline'>native</span>
        </p>


      </div>
      <div className='bg-[#F2F2F3] h-14 flex items-center px-6 w-full absolute bottom-0 left-0'>
        <div className='flex gap-5 items-center'>
          <p className='badge badge-primary text-md py-4 px-3'>Full Time</p>
          <p className='badge badge-primary text-md py-4 px-3'>Part Time</p>
          <p className='badge badge-primary text-md py-4 px-3'>Remote</p>
        </div>
      </div>
      {role === 'job-seeker' && <div className='absolute top-5 right-5'>
        <ButtonDefault text='apply'></ButtonDefault>
      </div>}
      {role === 'HR' && <div className='absolute top-5 right-5'>
        <ButtonDefault text='remove post'></ButtonDefault>
      </div>}
    </div>
  );
};

export default JobSCard;
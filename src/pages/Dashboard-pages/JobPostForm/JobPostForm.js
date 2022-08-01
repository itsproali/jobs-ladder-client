import React, { useRef, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import ReactTimeAgo from 'react-time-ago'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init';
import useUserRole from '../../../hooks/UseAddUserInfo/useUserRole';
import fetching from '../../../hooks/UseAddUserInfo/fetching';
import { useLocation, useNavigate } from 'react-router-dom';

const JobPostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef(null)
  const animatedComponents = makeAnimated();
  const [jobTypes, setJobTypes] = useState([]);
  const [user] = useAuthState(auth)
  const [role , currentUser] = useUserRole(user)
  const [jobRequirements, setJobRequirements] = useState([]);
  const date = new Date();
  const options = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Remote', label: 'Remote' }
  ]



  const handleJobPost = async (e) => {
    e.preventDefault()
    const jobData = {
      title: formRef.current?.jobTitle?.value,
      companyCode: currentUser?.companyName ,
      jobState: formRef.current?.jobState?.value,
      location: formRef.current?.location?.value,
      jobTypes: jobTypes?.assignedTo?.map(i => i.value),
      jobRequirements: jobRequirements?.assignedTo?.map(i => i.value),
      description: formRef.current?.description?.value,
      date: date.getTime(),
    }
    await fetching.post('/job-post' , jobData)
    await navigate('/dashboard/jobpost' , {replace: true})
  }

  return (

    <main class="">
      <div class="w-full max-w-2xl mx-auto mb-10">
        <div className='mb-10'>
          <h1 className='text-2xl text-primary uppercase'>Post New Job</h1>
          <hr />
          
        </div>

        <form onSubmit={handleJobPost} ref={formRef}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="job-title">Job's Title</label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" id="job-title" name="jobTitle" placeholder="Name of the job" autofocus required />
          </div>


          <div class="md:flex md:justify-between">
            <div class="w-full md:w-3/12 mb-4 md:mb-0">
              <label class="block text-gray-700 text-sm mb-2" for="job-type">
                Job State
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="jobState">
                  <option>Internship</option>
                  <option>Permanent</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div class="w-full md:w-8/12 mb-4 md:mb-0">
              <label for="location" class="block text-gray-700 text-sm mb-2">Location</label>
              <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Dhaka , Bangladesh" required />

            </div>
          </div>
          <div className='mb-4'>
            <label class="block text-gray-700 text-sm mb-2" >Job's type</label>
            <Select
              name='jobType'
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              values={jobTypes}
              onChange={(newMembers) => setJobTypes({ ...jobTypes, assignedTo: newMembers || [] })} options={options}
              required

            />
          </div>
          <div className='mb-4'>
            <label class="block text-gray-700 text-sm mb-2" >Requirements</label>
            <CreatableSelect
              name='requirement'
              values={jobRequirements}
              onChange={(newMembers) => setJobRequirements({ ...jobRequirements, assignedTo: newMembers || [] })}
              isMulti
              required
            />
          </div>
          {/* <div class="mb-4 md:mb-0">
            <label for="company-logo" class="block text-gray-700 text-sm mb-2">Company logo</label>
            <input type="file" class="appearance-none file:h-full  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded h-10 file:w-1/3 file:mr-5 file:bg-gray-500 file:border-0 file:cursor-pointer file:text-white  mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="companyLogo" required/>
          </div> */}
          <div>
            <label for="description" class="block text-gray-700 text-sm mb-2">Description</label>
            <textarea name="description" id="description" className='w-full p-3 border border-gray-300 h-40 rounded' required></textarea>
          </div>

          <div className='mt-3'>
            <button type="submit" className='className="btn btn-primary w-full rounded-md py-2 px-12 bg-primary  hover:text-white transition duration-300 uppercase"'>POST JOB</button>
          </div>
        </form>
      </div>
    </main>

  );
};

export default JobPostForm;
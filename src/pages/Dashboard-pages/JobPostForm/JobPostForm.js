import React from 'react';

const JobPostForm = () => {
  return (
   
        <main class="">
          <div class="w-full max-w-2xl mx-auto">
            <h1 className='text-2xl text-primary uppercase'>Post New Job</h1>
            <hr />
            <form>

              <div class="job-info border-b-2 py-2 my-10">

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" for="job-title">Job's Title</label>
                  <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="job-title" name="job-title" placeholder="Frontend Developer" autofocus />
                </div>


                <div class="md:flex md:justify-between">
                  <div class="w-full md:w-3/12 mb-4 md:mb-0">
                    <label class="block text-gray-700 text-sm mb-2" for="job-type">
                      Job Type
                    </label>
                    <div class="relative">
                      <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
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
                    <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Dhaka , Bangladesh" />

                  </div>
                </div>
                <div>
                  <label for="description" class="block text-gray-700 text-sm mb-2">Description</label>
                  <textarea name="description" id="description" cols="10" rows="7"></textarea>
                </div>

                <div class="flex flex-wrap -mx-3">

                  <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label for="company" class="block text-gray-700 text-sm mb-2">Company</label>
                    <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="Company" />
                  </div>


                  <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label for="company" class="block text-gray-700 text-sm mb-2">Company Website</label>
                    <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="https://www.djangoproject.com/" />
                  </div>
                </div>


                <div class="mb-4 md:mb-0">
                  <label for="company-logo" class="block text-gray-700 text-sm mb-2">Logo Image</label>
                  <input type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo" />
                </div>
              </div>

           



              <div>
                <button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
              </div>
            </form>
          </div>
        </main>
     
  );
};

export default JobPostForm;
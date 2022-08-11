import React from "react";
import { useSelector } from "react-redux";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";

const EmployeeDetailEditForm = () => {
  const employee = useSelector((state) => state.currentEmployeeData);
  return (
    <>
      <input type="checkbox" id="editEmployeeData" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <div className="absolute right-2 top-2 ">
            <label
              for="editEmployeeData"
              class="btn border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Cancel
            </label>
            <button className="btn border-2 ml-3 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase">
              Save
            </button>
          </div>
          <div className="mt-10">
            <div class="mb-2">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Name:
              </label>
              <input
                placeholder="Employee Name"
                defaultValue={employee.name}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-2">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Role:
              </label>
              <input
                placeholder="Position"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          
            <div class="mb-2">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                LinkedIn Profile:
              </label>
              <input
                placeholder="https://www.linkedin.com/in/username"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-2">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Facebook Profile:
              </label>
              <input
                placeholder="https://www.facebook.com/username"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-2">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Twitter Profile:
              </label>
              <input
                placeholder="https://www.twitter.com/username"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailEditForm;

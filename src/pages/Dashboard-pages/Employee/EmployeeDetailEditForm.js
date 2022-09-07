import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Shared/Loading/Loading";
import auth from "../../../firebase-init";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import recallApi from "../../../stateManagement/actions/recallApi";

const EmployeeDetailEditForm = () => {
  const employeeDataFormRef = useRef(null);
  const recall = useSelector((state) => state.recallApi);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const { currentUser } = useSelector((state) => state.setUserRole);
  const employee = useSelector((state) => state.currentEmployeeData);
  const submitEmployeeDataForm = async () => {
    const employeeData = {
      name: employeeDataFormRef.current.name.value,
      role: employeeDataFormRef.current.role.value,
      linkedin: employeeDataFormRef.current.linkedin.value,
      facebook: employeeDataFormRef.current.facebook.value,
      twitter: employeeDataFormRef.current.twitter.value,
    };
    const url = `/company/${currentUser.companySecret}/employee/${user.email}`;
    setLoading(true);
    await fetching.put(url, employeeData);
    dispatch(recallApi(!recall));
    setLoading(false);
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <input type="checkbox" id="editEmployeeData" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <div className="absolute right-2 top-2 ">
            <label
              htmlFor="editEmployeeData"
              className="btn border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Cancel
            </label>
            <button
              onClick={submitEmployeeDataForm}
              className="btn border-2 ml-3 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Save
            </button>
          </div>
          <form ref={employeeDataFormRef}>
            <div className="mt-10">
              <div className="mb-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name:
                </label>
                <input
                  placeholder="Employee Name"
                  defaultValue={employee.name}
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Role:
                </label>
                <input
                  placeholder="Position"
                  defaultValue={employee.role}
                  type="text"
                  name="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  LinkedIn Profile:
                </label>
                <input
                  placeholder="https://www.linkedin.com/in/username"
                  type="text"
                  name="linkedin"
                  defaultValue={employee.linkedin}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Facebook Profile:
                </label>
                <input
                  placeholder="https://www.facebook.com/username"
                  type="text"
                  name="facebook"
                  defaultValue={employee.facebook}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Twitter Profile:
                </label>
                <input
                  placeholder="https://www.twitter.com/username"
                  type="text"
                  name="twitter"
                  defaultValue={employee.twitter}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailEditForm;

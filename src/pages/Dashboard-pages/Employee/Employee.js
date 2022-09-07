import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase-init";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import setCurrentEmployee from "../../../stateManagement/actions/setCurrentEmployee";
import ChangeProfilePhotoModal from "./changeProfilePhotoModal";
import "./Employee.css";
import EmployeeDetailEditForm from "./EmployeeDetailEditForm";
const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const recall = useSelector((state) => state.recallApi);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.setUserRole);

  const url = `/company/${currentUser?.companySecret}/employee`;
  useEffect(() => {
    fetching(url).then((res) => setEmployees(res?.data?.employee));
  }, [dispatch, url, recall]);

  const handleSendEmail = async (employee) => {
    await dispatch(setCurrentEmployee(employee));
    await navigate("/mailEmployee");
  };

  return (
    <>
      {employees?.length === 0 ? (
        <div className="md:text-6xl text-center mt-5 text-3xl text-red-500">
          There is No employee
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 px-5">
          {employees?.map((employee, index) => (
            <div
              key={index}
              className="sm:h-[300px]   shadow-lg employee-card rounded-lg flex justify-center items-center cursor-pointer "
            >
              <div className="flex flex-col">
                <div className="mb-3 h-1/2 flex items-center justify-center">
                  <div className="avatar">
                    {employee?.img ? (
                      <div className="w-32 rounded-full">
                        <img src={employee?.img} alt="" />
                      </div>
                    ) : (
                      <div className="w-32 bg-secondary rounded-full"></div>
                    )}
                  </div>
                </div>
                <div className="h-[100px]">
                  <h1 className="font-extrabold text-center text-xl ">
                    {employee?.name}
                  </h1>
                  {employee?.role && (
                    <p className=" font-semibold text-center my-3 ">
                      {employee?.role}
                    </p>
                  )}
                </div>
              </div>
              {employee?.email === user?.email && (
                <div className="absolute you-badge -top-3 -right-3">
                  <span className="badge badge-lg bg-primary">YOU</span>
                </div>
              )}
              <div className="w-full h-full absolute employee-options text-white">
                <div className="bg-secondary p-3 h-full backdrop-blur-md">
                  <div className="h-20 pt-6">
                    <h1 className="font-extrabold  text-center">
                      {employee?.name}
                    </h1>
                    {employee?.role && (
                      <p className=" font-semibold text-center my-2">
                        {employee?.role}
                      </p>
                    )}
                  </div>
                  <div className=" h-36 flex gap-2 justify-center items-center w-full">
                    {employee?.linkedin && (
                      <a
                        target="_blank"
                        href={employee?.linkedin}
                        rel="noopener noreferrer"
                        className="h-8 w-8 hover:-translate-y-1 transition duration-500 hover:text-primary rounded-full bg-gray-700 flex justify-center items-center"
                      >
                        <AiFillLinkedin />
                      </a>
                    )}
                    {employee?.facebook && (
                      <a
                        target="_blank"
                        href={employee?.facebook}
                        rel="noopener noreferrer"
                        className="h-8 w-8 hover:-translate-y-1 transition duration-500 hover:text-primary rounded-full bg-gray-700 flex justify-center items-center"
                      >
                        <AiFillFacebook />
                      </a>
                    )}
                    {employee?.twitter && (
                      <a
                        target="_blank"
                        href={employee?.twitter}
                        rel="noopener noreferrer"
                        className="h-8 w-8 hover:-translate-y-1 transition duration-500 hover:text-primary rounded-full bg-gray-700 flex justify-center items-center"
                      >
                        <ImTwitter />
                      </a>
                    )}
                    {employee?.email === user?.email || (
                      <a
                        href=""
                        className="h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center"
                      >
                        <BsFillChatSquareTextFill />
                      </a>
                    )}
                  </div>
                </div>
                {employee?.email === user?.email ? (
                  <>
                    <label
                      onClick={() => dispatch(setCurrentEmployee(employee))}
                      htmlFor="editEmployeeData"
                      className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl modal-button cursor-pointer"
                    >
                      <FaUserEdit className="text-3xl" /> Edit Info
                    </label>
                    <label
                      onClick={() => dispatch(setCurrentEmployee(employee))}
                      htmlFor="editProfileImage"
                      className="h-11 w-full  bg-primary absolute bottom-12 flex gap-2 justify-center items-center text-xl modal-button cursor-pointer"
                    >
                      {" "}
                      Change Profile Photo
                    </label>
                  </>
                ) : (
                  <button
                    onClick={() => handleSendEmail(employee)}
                    className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl"
                  >
                    <BiMailSend className="text-3xl" /> Send Mail
                  </button>
                )}
              </div>
            </div>
          ))}
          {employees && <EmployeeDetailEditForm></EmployeeDetailEditForm>}
          {employees && <ChangeProfilePhotoModal></ChangeProfilePhotoModal>}
        </div>
      )}
    </>
  );
};

export default Employee;

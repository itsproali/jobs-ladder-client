import React, { useEffect } from "react";
import { BsFillPatchCheckFill, BsSignpostFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";
import Loading from "../../../components/Shared/Loading/Loading";
import getTaskAction from "../../../stateManagement/actions/getTaskAction";
import submitTask from "./submitTask";

const Tasks = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.setUserRole);
  const email = currentUser?.email;
  const dispatch = useDispatch();
  const { isLoading, tasks, error } = useSelector((state) => state.getTasks);

  useEffect(() => {
    dispatch(getTaskAction(email));
  }, [dispatch, email]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    Swal.fire({
      title: error,
      icon: "error",
    });
  }

  return (
    <div className="mb-8">
      {tasks.length === 0 ? (
        <h1 className="text-center text-5xl text-error font-semibold">
          You Don't have any Task yet..!
        </h1>
      ) : (
        <>
          <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center sm:mb-10 mb-10">
            <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
              Given Tasks
            </h5>
            <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
              What will you have to do
            </h1>
            <div className="flex sm:gap-2 gap-1 mt-1">
              <div className="sm:h-1 h-[2px] sm:w-12 w-8 bg-secondary rounded-lg"></div>
              <div className="sm:h-1 h-[2px]  sm:w-7 w-4 bg-primary rounded-lg"></div>
            </div>
          </div>
          <h3 className="md:text-2xl font-semibold">
            You have: <span className="font-bold">{tasks?.length}</span> Tasks
          </h3>

          <div className="mt-4">
            {tasks?.map((task) => (
              // const { _id, taskTitle, taskDetails, submitDetails } = task;
              <div
                key={task._id}
                className="w-full my-2 px-3 py-2 rounded-lg border shadow bg-white hover:bg-bg-base-200 hover:shadow-lg duration-300 pointer flex items-center justify-between cursor-pointer"
              >
                {task.submitDetails ? (
                  <BsFillPatchCheckFill className="text-green-500 text-2xl mr-2" />
                ) : (
                  <BsSignpostFill className="text-warning text-2xl mr-2" />
                )}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                  onClick={() => navigate(`/dashboard/tasks/${task._id}`)}
                >
                  <h3 className="sm:text-xl w-[290px]">
                    {task?.taskTitle?.length > 35
                      ? task.taskTitle.slice(0, 32) + "..."
                      : task.taskTitle}
                  </h3>
                  <p className="text-gray-600 w-[320px] hidden lg:block">
                    {task?.taskDetails?.length > 50
                      ? task.taskDetails?.slice(0, 47) + "..."
                      : task.taskDetails}
                  </p>
                </div>
                <ButtonDefault
                  className="py-[.40rem] px-4"
                  onClick={() => submitTask(task, navigate)}
                  disabled={task.submitDetails}
                >
                  Submit
                </ButtonDefault>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tasks;

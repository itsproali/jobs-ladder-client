import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FiMoreVertical, FiTrash2 } from "react-icons/fi";
import { GiVideoConference } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading/Loading";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import getCandidateAction from "../../../stateManagement/actions/getCandidateAction";
import getJobTitleAction from "../../../stateManagement/actions/getJobTitleAction";

const Response = () => {
  const { currentUser } = useSelector((state) => state.setUserRole);
  const { companyName, companySecret, email } = currentUser;
  const dispatch = useDispatch();
  const { titleLoading, jobTitles, titleError } = useSelector(
    (state) => state.getJobTitles
  );

  const { candidateLoading, candidates, candidateError } = useSelector(
    (state) => state.getCandidates
  );

  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  const jobId = useWatch({ control, name: "jobTitle" });

  useEffect(() => {
    if (companySecret) {
      dispatch(getJobTitleAction(companySecret));
    }
  }, [companySecret, dispatch]);

  useEffect(() => {
    if (jobId) {
      dispatch(getCandidateAction(jobId));
    }
  }, [jobId, dispatch]);

  // Handle Remove Candidate
  const removeCandidate = (candidateId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this candidate!!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Remove him",
    }).then((result) => {
      if (result.isConfirmed) {
        fetching.delete(`response/${candidateId}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Candidate has been removed.", "success");
          } else {
            Swal.fire("Error!!", "Something went wrong", "error");
          }
        });
      }
    });
  };

  // Handle Give Task
  const giveTask = async (candidateEmail) => {
    const { value: formValues } = await Swal.fire({
      title: "Task Details",
      html:
        '<input id="task-title" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid lightgray; border-radius: .5rem;" required placeholder="Enter Task Title">' +
        '<textarea id="task-details" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid lightgray; border-radius: .5rem;" rows="5" required placeholder="Describe the task">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Give Task",
      preConfirm: () => {
        return [
          document.getElementById("task-title").value,
          document.getElementById("task-details").value,
        ];
      },
    });

    if (formValues) {
      console.log(formValues);
      const taskTitle = formValues?.[0];
      const taskDetails = formValues?.[1];
      await fetching
        .post("tasks/give-task", {
          taskTitle,
          taskDetails,
          from: email,
          to: candidateEmail,
          companyName,
        })
        .then((res) => Swal.fire("Given!", "Task has been given", "success"));
    }
  };

  if (titleLoading) {
    return <Loading />;
  }

  if (titleError || candidateError) {
    Swal.fire({
      title: titleError || candidateError,
      icon: "error",
    });
  }

  return (
    <div className="">
      {jobTitles.length === 0 ? (
        <h1 className="text-center text-5xl text-error font-semibold">
          You Didn't Posted Job yet..!
        </h1>
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center my-5">
            Response Details
          </h2>
          <div className="flex items-center justify-between text-xl font-semibold pb-10">
            <div className="flex items-center">
              <h2 className="">Response for: </h2>

              <select
                className="ml-3 px-4 py-2 text-primary focus:outline-none rounded"
                {...register("jobTitle", { required: true })}
              >
                <option value="" disabled selected>
                  -- Select a job --
                </option>
                {jobTitles &&
                  jobTitles.map((jobTitle) => (
                    <option key={jobTitle._id} value={jobTitle._id}>
                      {jobTitle.title}
                    </option>
                  ))}
              </select>
              {errors.jobTitle && (
                <label className="block text-red-700 text-xs">
                  Please select a Job ....!
                </label>
              )}
            </div>

            <div>
              <div>
                <h2 className="font-semibold">
                  Candidate:{" "}
                  <span className="text-primary">{candidates.length}</span>
                </h2>
              </div>
            </div>
          </div>

          {candidateLoading && <p className="text-2xl">Loading ...</p>}
          {candidates.length === 0 ? (
            <h1 className="text-center text-secondary text-4xl font-semibold">
              There is No Candidates...!
            </h1>
          ) : (
            <div>
              <div className="overflow-x-auto">
                <table className="table w-full min-h-20">
                  {/* <!-- head --> */}
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th className="text-center">Resume</th>
                      <th className="text-center">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- row 1 --> */}
                    {candidates &&
                      candidates.map((candidate, index) => (
                        <tr key={candidate._id}>
                          <th>{index + 1}</th>
                          <td>{candidate.name}</td>
                          <td>{candidate.Email}</td>
                          <td className="text-center">
                            <a href={candidate.image} target="blank">
                              <AiOutlineCloudDownload className="btn btn-circle btn-ghost btn-sm p-1" />
                            </a>
                          </td>
                          <td className="text-center w-full dropdown dropdown-left">
                            <FiMoreVertical
                              tabIndex="0"
                              className="btn btn-circle btn-ghost btn-sm p-1"
                            />
                            <ul
                              tabIndex="0"
                              className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-box w-52"
                            >
                              <li>
                                <div
                                  className="flex items-center justify-start"
                                  onClick={() => giveTask(candidate.Email)}
                                >
                                  <BiTask />
                                  <span className="ml-2">Give Task</span>
                                </div>
                              </li>
                              <li>
                                <div className="flex items-center justify-start">
                                  <GiVideoConference />
                                  <span className="ml-2">
                                    Call for Interview
                                  </span>
                                </div>
                              </li>
                              <li>
                                <div
                                  className="flex items-center justify-start"
                                  onClick={() => removeCandidate(candidate._id)}
                                >
                                  <FiTrash2 />
                                  <span className="ml-2">Remove Candidate</span>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Response;

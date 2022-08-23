import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import submitTask from "./submitTask";

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  fetching.get(`/tasks/${taskId}`).then((res) => setTask(res?.data));
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mb-20">
        <h1 className="text-4xl text-center font-bold mt-4 mb-16">
          {task?.taskTitle}
        </h1>
        <p className="text-xl text-gray-500">
          <b>Details: </b> {task?.taskDetails}
        </p>
      </div>
      <ButtonDefault
        className="w-1/2 mx-auto mb-8"
        onClick={() => submitTask(task, navigate)}
        disabled={task.submitDetails}
      >
        Submit Task
      </ButtonDefault>
    </div>
  );
};

export default TaskDetails;

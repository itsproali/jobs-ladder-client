import Swal from "sweetalert2";
import fetching from "../../../hooks/UseAddUserInfo/fetching";

const submitTask = async (task, navigate) => {
  const { _id, taskTitle } = task;
  const { value: formValues } = await Swal.fire({
    title: "Task Details",
    html:
      `<input id="task-title" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid lightgray; border-radius: .5rem;" required disabled value=${taskTitle}>` +
      '<textarea id="submit-details" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 2px solid lightgray; border-radius: .5rem;" rows="5" required placeholder="Submit your work here">',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Submit Task",
    preConfirm: () => {
      return [document.getElementById("task-title").value, document.getElementById("submit-details").value];
    },
  });
  if (formValues) {
    const submitDetails = formValues?.[1];
    await fetching
      .put(`tasks/submit?id=${_id}`, {
        submitDetails,
      })
      .then((res) => Swal.fire("Submitted!", "Task has been Submitted", "success"), navigate("/dashboard/tasks"));
  }
};

export default submitTask;

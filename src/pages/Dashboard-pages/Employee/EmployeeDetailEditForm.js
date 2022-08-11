import React from "react";
import { useSelector } from "react-redux";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";

const EmployeeDetailEditForm = () => {
  const employee = useSelector((state) => state.currentEmployeeData);
  console.log(employee);
  return (
    <>
      <input type="checkbox" id="editEmployeeData" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label for="editEmployeeData" class="btn absolute right-2 top-2 border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase">
            Cancel
          </label>
          <h3 class="font-bold text-lg">{employee.name}</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetailEditForm;

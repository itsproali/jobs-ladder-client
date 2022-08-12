import React from "react";

const ChangeProfilePhotoModal = () => {
  return (
    <>
      <input type="checkbox" id="editProfileImage" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <div className="absolute right-2 top-2 ">
            <label
              for="editProfileImage"
              class="btn border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Cancel
            </label>
            <button className="btn border-2 ml-3 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase">
              Save
            </button>
          </div>
          <div>
            <div class="mt-10">
              <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Select new Profile:
              </label>
              <input type="file" class="file:h-28 file:w-1/2 w-full file:bg-primary file:rounded-md file:text-white file:cursor-pointer " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeProfilePhotoModal;

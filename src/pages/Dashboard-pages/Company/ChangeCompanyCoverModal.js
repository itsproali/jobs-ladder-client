import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Shared/Loading/Loading";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import recallApi from "../../../stateManagement/actions/recallApi";

const ChangeCompanyCoverModal = () => {
  const imageStorageKey = "4dab8fd03df7f5dbf2aafd109eaffcf5";
  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.setUserRole);
  const recall = useSelector((state) => state.recallApi);
  const dispatch = useDispatch();

  const upsertImage = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", imageRef.current.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.success) {
          console.log(result.data.url);
          const url = `/company/${currentUser.companySecret}`;
          await fetching.put(url, { coverImg: result.data.url });
          dispatch(recallApi(!recall));
          setLoading(false);
        }
      })
      .catch((err) => setLoading(false));
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <input type="checkbox" id="editCoverImage" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <div className="absolute right-2 top-2 ">
            <label
              htmlFor="editCoverImage"
              className="btn border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Cancel
            </label>
            <button
              onClick={upsertImage}
              className="btn border-2 ml-3 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
            >
              Save
            </button>
          </div>
          <div>
            <div className="mt-10">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Select Cover Photo:
              </label>
              <input
                ref={imageRef}
                type="file"
                className="file:h-28 file:w-1/2 w-full file:bg-primary file:rounded-md file:text-white file:cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeCompanyCoverModal;

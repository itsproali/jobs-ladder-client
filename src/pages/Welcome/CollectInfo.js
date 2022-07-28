import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import welcome from "../../asset/welcome.png";
import auth from "../../firebase-init";
import fetching from "../../hooks/UseAddUserInfo/fetching";

const CollectInfo = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const email = user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = await e.target.role.value;
    const companyName = await e.target.companyName.value;
    const userData = await { userName, role, companyName, email };
    const { res } = await fetching.put("/users/add-info", userData);
    console.log(res);
    navigate("/dashboard");
  };
  return (
    <>
      <div className="mx-auto px-2 md:px-16 py-8 min-h-screen bg-gradient-to-b from-primary to-secondary">
        <h1 className="text-4xl text-white font-semibold text-center">
          Welcome to Job's Ladder
        </h1>
        <p className="text-xl text-center text-white">
          A Few steps to Enter our website
        </p>
        <div className="flex flex-col mt-16 lg:flex-row items-center justify-evenly">
          <div className="mx-auto w-full lg:w-1/2">
            <img src={welcome} alt="welcome" className="max-w-full" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full lg:w-1/2 text-center"
          >
            <div className="text-2xl my-2">
              <label htmlFor="role">
                <span className="mr-3 text-white">
                  What is the role of you?
                </span>
                <select
                  className="text-secondary focus:outline-none backdrop-blur-md bg-white bg-opacity-80"
                  name="role"
                  id="role"
                  required
                >
                  <option value="HR">HR</option>
                  <option value="Employee">Employee</option>
                  <option value="job-seeker">Job Seeker</option>
                </select>
              </label>
            </div>
            <div className="text-2xl my-3">
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="py-2 px-4 w-3/4 focus:outline-primary rounded"
                placeholder="Enter your company name (optional)"
              />
            </div>
            <input
              type="submit"
              value="Next"
              className="btn px-6 mt-12 btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CollectInfo;

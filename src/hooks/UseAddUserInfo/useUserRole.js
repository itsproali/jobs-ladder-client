import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetching from "./fetching";

const useUserRole = (user) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [currentUser , setCurrentUser] = useState({})
  const [role, setRole] = useState("");
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetching.get(`/users?email=${email}`).then((res) => {
        setCurrentUser(res?.data[0])
        const userRole = res?.data[0]?.role;
        if (userRole) {
          setRole(userRole);
          // navigate(from, { replace: true });
        } else {
          navigate("/welcome");
        }
      });
    }
  }, [email, navigate, from , currentUser]);
  return [role , currentUser];
};

export default useUserRole;

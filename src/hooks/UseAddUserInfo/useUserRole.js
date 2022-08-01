import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetching from "./fetching";

const useUserRole = (user) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [role, setRole] = useState("");
  const email = user?.email;
  useEffect(() => {
    if (email) {
      fetching.get(`/users?email=${email}`).then((res) => {
        const userOFThisEmail = res?.data[0] ;
        const userRole = userOFThisEmail?.role;
        console.log(res);
        if (userRole) {
          setRole(userRole);
          // navigate(from, { replace: true });
        } else {
          navigate("/welcome");
        }
      });
    }
  }, [email, navigate, from]);
  return [role ];
};

export default useUserRole;

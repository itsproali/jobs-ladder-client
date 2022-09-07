// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import fetching from "./fetching";

// const useUserRole = (user) => {
//   const navigate = useNavigate();
//   const accessToken = localStorage.getItem("accessToken");
//   const [currentUser, setCurrentUser] = useState({});
//   const [roleLoading, setRoleLoading] = useState(false);
//   const [role, setRole] = useState("");
//   const email = user?.email;
//   useEffect(() => {
//     if (email && accessToken) {
//       setRoleLoading(true);
//       fetching.get(`/users?email=${email}`).then((res) => {
//         setCurrentUser(res?.data[0]);
//         const userRole = res?.data[0]?.role;
//         if (userRole) {
//           setRole(userRole);
//           // navigate(from, { replace: true });
//         } else {
//           navigate("/welcome");
//         }
//         setRoleLoading(false);
//       });
//     }
//   }, [email, accessToken]);
//   return { role, currentUser, roleLoading };
// };

// export default useUserRole;

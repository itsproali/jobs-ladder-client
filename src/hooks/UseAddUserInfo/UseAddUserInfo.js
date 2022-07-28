import { useEffect, useState } from "react";
import fetching from "./fetching";

const useAddUserInfo = (user) => {
  const [token, setToken] = useState("");
  const [loadingToken, setLoadingToken] = useState(false);
  useEffect(() => {
    const userData = { email: user?.user?.email };
    if (user?.user?.email) {
      setLoadingToken(true);
      fetching.post("/users", userData).then((res) => {
        localStorage.setItem("accessToken", res?.data?.accessToken);
        setToken(res?.data?.accessToken);
        setLoadingToken(false);
      });
    }
  }, [user]);
  return [token, loadingToken];
};

export default useAddUserInfo;

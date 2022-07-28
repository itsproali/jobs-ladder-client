import React, { useEffect } from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import googleLogo from "../../asset/google-logo.png";
import fbLogo from "../../asset/facebook-logo.png";
import useAddUserInfo from "../../hooks/UseAddUserInfo/UseAddUserInfo";
import useUserRole from "../../hooks/UseAddUserInfo/useUserRole";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, gUser, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbError] = useSignInWithFacebook(auth);

  const [token] = useAddUserInfo(gUser || fbUser);
  const [role] = useUserRole(gUser || fbUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  console.log(role);
  return (
    <>
      {gError && <p className="text-red-500">{gError.message}</p>}
      {fbError && <p className="text-red-500">{fbError.message}</p>}

      <div className="flex items-center justify-center">
        <button className="w-8 mx-2" onClick={() => signInWithGoogle()}>
          <img src={googleLogo} alt="Google" />
        </button>
        <button className="w-8 mx-2" onClick={() => signInWithFacebook()}>
          <img src={fbLogo} alt="Facebook" />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;

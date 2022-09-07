import React, { useEffect } from "react";
import {
  useSignInWithFacebook, useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import fbLogo from "../../asset/facebook-logo.png";
import googleLogo from "../../asset/google-logo.png";
import auth from "../../firebase-init";
import useAddUserInfo from "../../hooks/UseAddUserInfo/UseAddUserInfo";
import setUserRoleAction from "../../stateManagement/actions/setUserRoleAction";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const [signInWithGoogle, gUser, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbError] = useSignInWithFacebook(auth);

  const [token] = useAddUserInfo(gUser || fbUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  useEffect(() => {
    if ((gUser?.user?.email || fbUser?.user?.email) && token) {
      dispatch(setUserRoleAction(gUser?.user));
    }
  }, [dispatch, gUser, fbUser, token]);

  console.log(gUser);
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

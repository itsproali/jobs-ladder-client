import React from "react";
import MakehrImpactfull from "./MakeHrImpactfull/MakehrImpactfull";
import Testimonial from "./Testimonial/Testimonial";
import TrustedBy from "./TrustedBy/TrustedBy";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import setUserRoleAction from "../../stateManagement/actions/setUserRoleAction";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";

const Home = () => {
  const dispatch = useDispatch();
  const accessToken = localStorage?.getItem("accessToken");
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user?.email && accessToken) {
      dispatch(setUserRoleAction(user));
    }
  }, [dispatch, user, accessToken]);
  return (
    <div>
      <Banner></Banner>
      <TrustedBy />
      <MakehrImpactfull />
      <Testimonial />
      <Contact></Contact>
    </div>
  );
};

export default Home;

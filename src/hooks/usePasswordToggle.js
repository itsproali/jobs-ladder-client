import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const inputType = visible ? "text" : "password";
  const icon = visible ? (
    <BsFillEyeFill onClick={() => setVisible(!visible)} />
  ) : (
    <BsFillEyeSlashFill onClick={() => setVisible(!visible)} />
  );

  return [inputType, icon];
};

export default usePasswordToggle;

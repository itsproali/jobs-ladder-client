import React from 'react';

const ButtonDefault = ({text}) => {
  return (
    <button  className="border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase" > {text} </button>
  );
};

export default ButtonDefault;
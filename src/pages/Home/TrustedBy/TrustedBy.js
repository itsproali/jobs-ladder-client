import React from 'react';
import jdc from '../../../Assets/trusted-company-logo/jcd.png'
import meta from '../../../Assets/trusted-company-logo/meta.png'
import converse from '../../../Assets/trusted-company-logo/converse.png'
import findelity from '../../../Assets/trusted-company-logo/findelity.png'
import microsoft from '../../../Assets/trusted-company-logo/microsoft.png'
import monster from '../../../Assets/trusted-company-logo/monster.png'
import tesla from '../../../Assets/trusted-company-logo/tesla.png'
import nueco from '../../../Assets/trusted-company-logo/nueco.png'
import ocado from '../../../Assets/trusted-company-logo/ocado.png'
import penstate from '../../../Assets/trusted-company-logo/penstate.png'
import sap from '../../../Assets/trusted-company-logo/sap.png'
import google from '../../../Assets/trusted-company-logo/google.png'
import './Trustedby.css'

const TrustedBy = () => {
  const companysLogo = [jdc, tesla, meta, findelity, monster, nueco, ocado, penstate, sap, converse, microsoft, google]

  return (
    <div className='container mx-auto px-5 '>
      <div className='flex flex-col sm:gap-3 gap-1 justify-center items-center mb-5'>
        <h5 className='font-bold uppercase text-primary sm:text-lg text-sm'>we are trusted</h5>
        <h1 className=' md:text-3xl sm:text-2xl text-lg font-bold uppercase flex items-center gap-[2px]'>Trusted By hundred<span className='font-extrabold'>+</span> <span className='sm:block hidden'> companies</span></h1>
        <div className='flex sm:gap-2 gap-1 mt-1'>
          <div className='sm:h-1 h-[2px] sm:w-12 w-8 bg-secondary rounded-lg'></div>
          <div className='sm:h-1 h-[2px]  sm:w-7 w-4 bg-primary rounded-lg'></div>
        </div>
      </div>
      <div className='flex sm:gap-0 gap-5 flex-wrap justify-center items-center  '>
        {companysLogo.map((logo, index) =>
          <div key={index} className='flex overflow-hidden companys-logo mr-3 gap-3 justify-center items-center sm:p-5  sm:w-48 sm:h-24 w-20  rounded-lg transition duration-500 relative'>
            <img  src={logo} alt="" className='w-full relative z-50' />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustedBy;
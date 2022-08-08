import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const MailEmployee = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dm833yz', 'template_9ffqtnf', form.current, '3CMrtQpNGTWZ1GDPc')
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label className='block text-gray-700 text-sm mb-2 '>Name</label>

                <input className='block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500' type="text" name="user_name" />
                <label className='block text-gray-700 text-sm mb-2 '>Email</label>
                <input className='block w-full bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500' type="email" name="user_email" />
                <label className='block text-gray-700 text-sm mb-2 '>Message</label>
                <textarea style={{height: "180px"}} className='block w-full h-14 bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500' name="message" />
                <input className='btn btn-primary' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default MailEmployee;
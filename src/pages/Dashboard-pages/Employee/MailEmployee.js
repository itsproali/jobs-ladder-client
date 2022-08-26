import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const MailEmployee = () => {
  const currentEmployee = useSelector((state) => state.currentEmployeeData);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_dm833yz", "template_9ffqtnf", form.current, "3CMrtQpNGTWZ1GDPc").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className=" px-5">
      <div className=" min-h-screen flex justify-center items-center p-10 rounded-lg bg-slate-300 max-w-lg mx-auto my-20">
        <form ref={form} onSubmit={sendEmail} className="w-full">
          <label className="block text-white text-sm mb-2 ">Name</label>

          <input
            placeholder="Enter Name"
            className="block w-full  bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
            type="text"
            name="user_name"
          />
          <label className="block text-white text-sm mb-2 ">Email</label>
          <input
            className="block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
            type="email"
            name="user_email"
            value={currentEmployee?.email}
          />
          <label className="block text-white text-sm mb-2 ">Message</label>
          <textarea
            placeholder="type message..."
            style={{ height: "180px" }}
            className="block w-full h-14 bg-white text-gray-700 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-primary"
            name="message"
          />
          <input className="btn btn-primary w-full" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default MailEmployee;

import React, { isValidElement } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";



const Contact = () => {

const [payload, setPayload] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});
const [loading,setLoading] = useState(false)
const [message,setMessage] = useState("")

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload, [id]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const { email } = payload;

    const sendRes = await axios.post(
      `${BACKEND_URL}/api/contact/send-email`,
      { email },
    );

    if (sendRes.status === 200) {
      setMessage("Verification email sent! Please check your inbox.");


      let verified = false;
      while (!verified) {
        await new Promise((r) => setTimeout(r, 3000)); 

        try {
          const verifyRes = await axios.get(
            `${BACKEND_URL}/api/contact/me`,
            { withCredentials: true }
          );
          if (verifyRes.status === 200) {
            verified = true;
          }
        } catch (err) {
        }
      }
      setMessage("Email verified! Sending your message...");
      console.log("Email verified!");

      const saveRes = await axios.post(
        `${BACKEND_URL}/api/contact/save`,
        payload,
        { withCredentials: true }
      );

      if (saveRes.status === 200) {
        setMessage("Email verified and message sent successfully!");
        setPayload({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
  } catch (err) {
    console.error(err);
    setMessage("Something went wrong. Try again!");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-10 my-12 flex flex-col md:flex-row gap-12">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-indigo-700">
          Got an idea for your project?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We'd love to learn more about you and what we can design and build
          together.
        </p>
        <p className="text-indigo-600 font-semibold text-lg">
          📧 info@AvionicSoft.com
        </p>
      </div>

      {/* Right Section (Form) */}
      <form  onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
        <div onClick={()=>{handle}}>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={payload.name} 
            onChange={handleChange} 
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={payload.email} 
              onChange={handleChange} 
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={payload.phone} 
            onChange={handleChange} 
              placeholder="Enter your phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            value={payload.message} 
            onChange={handleChange} 
            placeholder="Type your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
      {
        !loading ?  <button type="submit" className="w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Submit
        </button> : <div className="w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md  transition duration-300">
          Loading...
        </div>
      }
       
      </form>
    </div>
  );
};

export default Contact;
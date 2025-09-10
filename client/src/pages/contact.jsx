import React from "react";

const contact = () => {
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
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
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
            placeholder="Type your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button className="w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default contact;

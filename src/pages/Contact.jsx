import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-12 min-h-screen">
      <div className="flex flex-wrap -mx-4">
        {/* Left Section: Contact Information */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Get in touch with us</h2>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>vs8983375@gmail.com</span> {/* Replace with your email */}
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>(+91) 9399217386</span> {/* Replace with your phone number */}
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Vill. Sone Lal Ka pura, Bhind, Madhya Pradesh, 477001</span> {/* Replace with your address */}
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full md:w-1/2 px-4">
          <form className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <div className="flex flex-wrap -mx-4 mb-4">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">First Name<span className="text-red-500">*</span></label>
                <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:text-white" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Last Name<span className="text-red-500">*</span></label>
                <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:text-white" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email (privacy policy)<span className="text-red-500">*</span></label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:text-white" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Message<span className="text-red-500">*</span></label>
              <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:text-white">I'm interested in learning more about...</textarea>
            </div>
            {/* You might want to add a submit button here */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

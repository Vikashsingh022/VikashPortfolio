import React, { useState } from 'react';
import vikashImg from '../assets/vikash.jpg';
import resumePdf from '../assets/resume.pdf';
import { Link } from 'react-router-dom';

const Resume = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 mt-12 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: My Resume */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">My Resume</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">"Not just another resume — it's my tech journey.
            One click. Endless potential."</p>
          <div className="flex items-center gap-2">
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-stone-200 dark:bg-stone-700 px-3 py-1 rounded-md font-bold text-gray-800 dark:text-white hover:bg-stone-300 dark:hover:bg-stone-600 transition-colors duration-200 cursor-pointer"
            >
              Click Me
            </a>
          </div>
        </div>

        {/* Middle Section: Image */}
        <div className="w-full lg:w-1/3 flex justify-center items-start">
          <div className="w-full h-96 bg-gray-300 dark:bg-gray-600 rounded-md overflow-hidden">
            <img src={vikashImg} alt="Vikash" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Section: Information Cards */}
        <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Me Card */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">"Not just another resume — it's my tech journey.
              One click. Endless potential.".</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View More</a>
          </div>

          {/* What I Do Card */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">What I Do</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              I love turning ideas into interactive web experiences.
            </p>
            {!showMore && (
              <button 
                onClick={() => setShowMore(true)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View More
              </button>
            )}
            {showMore && (
              <>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  With a degree in Computer Science and hands-on experience in React.js and modern design frameworks, I build applications that are not only functional but enjoyable to use — like my movie review platform powered by real-time APIs.
                </p>
                <button 
                  onClick={() => setShowMore(false)}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Show Less
                </button>
              </>
            )}
          </div>

          {/* How It Work Card */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">How It Work</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View More</a>
          </div>

          {/* Contact Me Card */}
          <div className="bg-teal-200 dark:bg-teal-600 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Contact Me</h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">Want to chat or work together? Head over to the Contact page and hit the Contact button — I'd love to hear from you!.</p>
            <Link to="/contact" className="text-blue-700 dark:text-blue-800 hover:underline">Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
import React, { useState } from 'react';
import vikashImg from '../assets/vikash.jpg'; // Assuming you have your image here

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200 py-16 mt-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Image and Intro */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
          {/* Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="rounded-lg overflow-hidden shadow-lg w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
              <img src={vikashImg} alt="Vikash Rajpoot" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Intro Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Hi there!</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Vikash Rajpoot — a passionate Full Stack Developer with a strong foundation in web development and a creative mindset for solving real-world problems through code.

              I specialize in modern JavaScript technologies like React.js, Node.js, Express.js, and have hands-on experience with WordPress as well. I've earned my academic credentials in Computer Science Engineering, where I developed not just technical expertise but also a keen eye for UI/UX and product design.
            </p>
          </div>
        </div>

        {/* Bottom Section: Career Summary and Skills */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Career Summary */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">💼 Career Summary</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am Vikash Rajpoot, a front-end developer with a strong foundation in Computer Science Engineering (B.Tech) and 2 years of hands-on experience building dynamic, user-friendly web applications. My journey has been driven by a passion for clean design, smooth interactivity, and writing scalable, maintainable code.

              I specialize in React.js, JavaScript, HTML, CSS, Tailwind CSS, and animation libraries like Framer Motion. I have integrated REST APIs into various projects, showcasing my ability to handle data-driven components and real-time user experiences.

              Notable projects include:

              🎬 Movie Review App: A full-featured application using The Movie Database (TMDb) API, allowing users to explore, filter, and review popular movies.

              🧩 Jumble Word Game: A fun interactive game built with React.

              ✅ To-Do List App: A task management tool with a sleek interface.

              ❇️ Tic-Tac-Toe Game: A classic game with modern design.

              🌐 Portfolio Website: A responsive, interactive website to showcase my projects and skills.
            </p>
            {!showMore && (
              <button 
                onClick={() => setShowMore(true)}
                className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                View More
              </button>
            )}
            {showMore && (
              <>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  My approach to development combines technical expertise with a user-centric mindset. I believe in writing clean, maintainable code while ensuring an exceptional user experience. I'm constantly learning and exploring new technologies to stay at the forefront of web development.

                  Looking ahead, I'm excited to work on more complex projects that challenge my skills and allow me to create innovative solutions. I'm particularly interested in exploring advanced React patterns, performance optimization, and building more sophisticated full-stack applications.

                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing. I'm always open to new opportunities and collaborations that allow me to grow as a developer and create meaningful impact.
                </p>
                <button 
                  onClick={() => setShowMore(false)}
                  className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
                >
                  Show Less
                </button>
              </>
            )}
          </div>

          {/* Skills/Tags */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Java Script</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">React Js</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">MySQL / SQL</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">AppWrite</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">HTML/CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Tailwind CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Git/GitHub</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Bootstrap</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Api Integration</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Vs Code</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Node Js</span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">Express Js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
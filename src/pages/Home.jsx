import React, { useEffect, useRef, useState } from 'react';
import lightImg from '../assets/light.jpeg';
import { motion, AnimatePresence } from 'framer-motion';

// Import animated images
import ideasImg from '../assets/ideas.svg';
import designsImg from '../assets/designs.svg';
import conceptsImg from '../assets/concepts.svg';
import codeImg from '../assets/code.svg';
import { Link } from 'react-router-dom';

// Import other page components
import Projects from './Projects';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
  const name = "Vikash Rajpoot";
  const animatedItems = [
    { src: ideasImg, alt: "Ideas", text: "ideas" },
    { src: designsImg, alt: "Designs", text: "design" },
    { src: conceptsImg, alt: "Concepts", text: "concepts" },
    { src: codeImg, alt: "Code", text: "code" }
  ];

  const roles = [
    "React.js Developer",
    "Code Enthusiast",
    "UI/UX Aficionado"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % animatedItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center py-20 md:py-0">
        <div className="container mx-auto px-4 z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT: Hero Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col gap-7">
                <div className="hero-text">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, 👋
                    {/* Animated Text + Image */}
                    <span className="slide inline-block bg-zinc-500 dark:bg-zinc-500 px-2 sm:px-3 py-1 rounded-md ml-2 overflow-hidden" style={{ width: 'fit-content' }}>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentIndex}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.4 }}
                          className="wrapper flex flex-row items-center justify-center min-w-[100px] sm:min-w-[120px] min-h-[20px]"
                        >
                          <img src={animatedItems[currentIndex].src} alt={animatedItems[currentIndex].alt} className="h-6 sm:h-8 md:h-10 mb-1" />
                          <span className="text-xs sm:text-sm md:text-base font-bold text-gray-800 dark:text-slate-800">
                            {animatedItems[currentIndex].text}
                          </span>
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </h1>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-indigo-500">
                    I am {name}
                  </h1>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-300">
                  {roles.map((role, index) => (
                    <span key={index}>
                      {role}{index < roles.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </p>

                <Link to="/projects" className="bg-stone-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 w-fit inline-block text-center text-sm sm:text-base">
                  See My Work
                </Link>
              </div>
            </div>

            {/* RIGHT: Visual */}
            <motion.div 
              className="flex-1 w-full mt-8 md:mt-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={lightImg} alt="Lamp" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-16 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-16 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
         <div className="container mx-auto px-4">
          <About />
         </div>
      </motion.section>

      {/* Resume Section */}
      <motion.section 
        id="resume" 
        className="py-16 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
           <Resume />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-16 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </motion.section>
    </>
  );
};

export default Home;

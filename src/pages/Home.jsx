import React, { useEffect, useRef, useState } from 'react';
import lightImg from '../assets/light.jpeg';

// Import animated images
import ideasImg from '../assets/ideas.svg';
import designsImg from '../assets/designs.svg';
import conceptsImg from '../assets/concepts.svg';
import codeImg from '../assets/code.svg';

import gsap from "gsap";
import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import other page components
import Projects from './Projects';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

gsap.registerPlugin(ScrollTrigger);

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
  const itemRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate fade-out
      gsap.to(itemRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.4,
        onComplete: () => {
          // After fade-out, change index
          setCurrentIndex(prev => (prev + 1) % animatedItems.length);
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate fade-in after index change
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.4 }
    );
  }, [currentIndex]);

  useEffect(() => {
    // Animate sections on scroll with float effect
    gsap.utils.toArray('section').forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Start animation when top of section is 80% from top of viewport
          end: 'bottom 20%', // End animation when bottom of section is 20% from top of viewport
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
          // markers: true, // Uncomment for debugging
        }
      });

      // Initial fade-in and slide up
      tl.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );

      // Subtle floating animation while in view
      tl.to(section, 
        { y: -10, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" }
      );
    });
  }, []);

  return (
    <>
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-4 z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT: Hero Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-7">
                <div className="hero-text">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Hi, 👋
                    {/* Animated Text + Image */}
                    <span className="slide inline-block bg-zinc-500 dark:bg-zinc-500 px-3 py-1 rounded-md ml-2 overflow-hidden" style={{ width: 'fit-content' }}>
                      <span className="wrapper flex flex-row items-center justify-center min-w-[120px] min-h-[20px]" ref={itemRef}>
                        <img src={animatedItems[currentIndex].src} alt={animatedItems[currentIndex].alt} className="h-8 md:h-10 mb-1" />
                        <span className="text-sm md:text-base font-bold text-gray-800 dark:text-slate-800">
                          {animatedItems[currentIndex].text}
                        </span>
                      </span>
                    </span>
                  </h1>

                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-indigo-500">
                    I am {name}
                  </h1>
                </div>

                <p className="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-300">
                  {roles.map((role, index) => (
                    <span key={index}>
                      {role}{index < roles.length - 1 ? " | " : ""}
                    </span>
                  ))}
                </p>

                <Link to="/projects" className="bg-stone-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-fit inline-block text-center">
                  See My Work
                </Link>
              </div>
            </div>

            {/* RIGHT: Visual */}
            <div className="flex-1">
              <img src={lightImg} alt="Lamp" className="w-full h-[500px] object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
         <div className="container mx-auto px-4">
          <About />
         </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
           <Resume />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Home;

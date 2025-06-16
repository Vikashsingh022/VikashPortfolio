import React from 'react';
// Import project assets
import portfolioprojectImg from '../assets/portfolioproject.png'; 
import project2Img from '../assets/project2.jpg';
import jumbleImg from '../assets/jumble.png';
import todoImg from '../assets/todo.jpg'; // Assuming the image file is named todo.png
import movie from '../assets/movie.jpg';
import Shopping from '../assets/Shopping.jpg';

const Projects = () => {
  // Placeholder project data (replace with your actual project data and imported assets)
  const projects = [
    {
      id: 1,
      previewImg: portfolioprojectImg, // Using imported image
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'Portfolio Website', // Simplified title for clarity
      link: 'https://vikashrajpootportfolio.netlify.app/', // Placeholder project link
    },
    {
      id: 2,
      previewImg: project2Img, // Using imported image variable
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'Tic Tac Toe', // Simplified title for clarity
      link: 'https://github.com/Vikashsingh022/Tic-Tac-Toe.git', // Placeholder project link
    },
    {
      id: 3,
      previewImg: jumbleImg, // Using imported jumble word image (update import path if needed)
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'Jumble Word', // Simplified title for clarity
      link: 'https://github.com/Vikashsingh022/jumble-word.git', // Placeholder project link
    },
    {
      id: 4,
      previewImg: todoImg, // Using imported todo image (update import path if needed)
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'To Do List', // Simplified title for clarity
      link: 'https://github.com/Vikashsingh022/Todo-List.git', // Placeholder project link
    },
    {
      id: 5,
      previewImg: movie,
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'MovieSite', // Simplified title for clarity
      link: 'https://moviesitefinjoy.netlify.app/', // Placeholder project link
    },
    {
      id: 6,
      previewImg: Shopping,
      logo: 'https://via.placeholder.com/50', // Placeholder logo URL (replace with imported asset)
      title: 'Shopping App', // Simplified title for clarity
      link: 'https://shopingappdemo.netlify.app/', // Placeholder project link
    },
    // >>> ADD NEW PROJECTS BELOW THIS LINE <<<
    // Remember to import new assets at the top of the file before using them here.
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted Grid layout for 4 columns */}
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col group"> {/* Added group class for hover effects */}
            {/* Preview Image */}
            <img src={project.previewImg} alt="Project Preview" className="w-full h-40 object-cover" /> {/* Adjusted image height */}

            <div className="p-2 flex-grow flex flex-col justify-between">
              <div>
                 {/* Project Title */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2  group-hover:underline inline-block hover:bg-stone-700 px-2 py-1 rounded-md hover:text-blue-600">{project.title}</h2> {/* Added hover text color class */}

                {/* Logo (Placeholder) */}
                <div className="flex items-center mb-2"> {/* Container div kept for potential future use or spacing */}
                  {/* Optional: Add company/client name here if needed */}
                </div>
              </div>
             
              {/* Project Link */}
              <a href={project.link} className="text-blue-600 hover:underline text-sm">View Project</a> {/* Added Project Link */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 
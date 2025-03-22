import React from 'react';
import Project1Image from './assets/project1.jpeg';
import Project2Image from './assets/project2.png';
import Project3Image from './assets/project3.png';
import Project4Image from './assets/project4.jpg';

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[url('./assets/noise.png')] opacity-10 animate-noise"></div>

      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#00a8cc] animate-fade-in-up">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="SoulMagle"
            description="A Booking App Using Node.js, Express, React.js, and Tailwind CSS."
            image={Project1Image}
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="Tour& Travel Website"
            description="A Medium Clone App using Node.js, Express, React.js, and TypeScript."
            image={Project2Image}
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="My Portfolio Website"
            description="A portfolio website made using React and Tailwind CSS."
            image={Project3Image}
            liveLink="http://localhost:5173/projects"
            githubLink="https://github.com/Purushottamkashyapcode/My-Portfolio/tree/main/Portfolio"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, liveLink, githubLink }) {
  return (
    <div className="bg-gradient-to-b from-[#112240] to-[#0a192f] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#64ffda] animate-fade-in-up">
      <img src={image} className="w-full h-64 object-cover" alt={title} />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-[#64ffda]">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className="flex justify-between">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-gradient-to-r from-[#64ffda] to-[#00a8cc] text-black font-bold rounded-full hover:bg-gradient-to-r hover:from-[#00a8cc] hover:to-[#64ffda] transition-transform transform hover:scale-105">
              Live Preview
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-gradient-to-r from-[#64ffda] to-[#00a8cc] text-black font-bold rounded-full hover:bg-gradient-to-r hover:from-[#00a8cc] hover:to-[#64ffda] transition-transform transform hover:scale-105">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
import React from 'react';
import Project1Image from './assets/project1.jpeg';
import Project2Image from './assets/project2.png';
import Project3Image from './assets/project3.png';
import Project4Image from './assets/project4.jpg';

function Projects() {
  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-cyan-900 to-red-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Airbnb Clone App"
            description="A Booking App Using Node.js, Express, React.js, and Tailwind CSS."
            image={Project1Image}
            liveLink="#"
            githubLink="#"
          />
          <ProjectCard
            title="Medium Clone App"
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
            githubLink="#"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, liveLink, githubLink }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} className="w-full h-64  object-center" alt={title} />
      <div className="p-5 bg-gradient-to-t from-black to to-blue-400">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <div className="flex justify-between">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" >
            <button className="inline-block px-5 py-3 bg-gradient-to-b from-cyan-900 to-green-600 text-white font-bold rounded-full hover:bg-yellow-600 ml-3">
              Live Preview
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="inline-block px-9 py-3 bg-gradient-to-b from-blue-900 to-red-600 text-white font-bold rounded-full hover:bg-yellow-600 ml-3">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

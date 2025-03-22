import React from 'react';
import CSSLogo from './assets/CSS.svg';
import HTMLLogo from './assets/html.svg';
import JavaScriptLogo from './assets/javascript.svg';
import TypeScriptLogo from './assets/typescript.svg';
import ReactLogo from './assets/React.png';
import NodeLogo from './assets/node.svg';
import JavaLogo from './assets/java.svg';
import CppLogo from './assets/c++.svg';
import CLogo from './assets/c.svg';

function Technologies() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden" id="technologies">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[url('./assets/noise.png')] opacity-10 animate-noise"></div>

      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#00a8cc] animate-fade-in-up">
          Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-b from-[#112240] to-[#0a192f] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#64ffda] animate-fade-in-up"
            >
              <img
                src={tech.logo}
                className="h-20 w-20 mb-4 rounded-full border-2 border-[#64ffda]"
                alt={`${tech.name} Logo`}
              />
              <h2 className="font-semibold text-lg text-center mb-2 text-[#64ffda]">{tech.name}</h2>
              <p className="text-sm text-center text-gray-300">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Define an array of technologies with their logos, names, and descriptions
const technologies = [
  { logo: HTMLLogo, name: 'HTML', description: 'The standard markup language for creating web pages.' },
  { logo: CSSLogo, name: 'CSS', description: 'A style sheet language used for designing web pages.' },
  { logo: JavaScriptLogo, name: 'JavaScript', description: 'A programming language for building interactive web applications.' },
  { logo: TypeScriptLogo, name: 'TypeScript', description: 'A typed superset of JavaScript for scalable applications.' },
  { logo: ReactLogo, name: 'React', description: 'A JavaScript library for building user interfaces.' },
  { logo: NodeLogo, name: 'Node.js', description: 'A runtime environment for server-side JavaScript.' },
  { logo: JavaLogo, name: 'Java', description: 'A high-level, object-oriented programming language.' },
  { logo: CppLogo, name: 'C++', description: 'A general-purpose programming language with object-oriented features.' },
  { logo: CLogo, name: 'C', description: 'A procedural programming language for system programming.' },
];

export default Technologies;
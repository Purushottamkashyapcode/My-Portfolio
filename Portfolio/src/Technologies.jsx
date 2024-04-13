// Technologies.jsx

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
    <section className="py-10 bg-gradient-to-b from-gray-900 to-red-700 text-white" id="technologies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white-800">Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center bg-gradient-to-b from-cyan-700 to-yellow-200 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img src={tech.logo} className="h-20 w-20 mb-4 rounded-full" alt={`${tech.name} Logo`} />
              <h2 className="font-semibold text-lg text-center mb-2 text-yellow-700">{tech.name}</h2>
              <p className="text-sm   text-center text-red-900">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Define an array of technologies with their logos, names, and descriptions
const technologies = [
  { logo: HTMLLogo, name: 'HTML', description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
  { logo: CSSLogo, name: 'CSS', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML.' },
  { logo: JavaScriptLogo, name: 'JavaScript', description: 'JavaScript is a programming language that enables web pages to be interactive and dynamic.' },
  { logo: TypeScriptLogo, name: 'TypeScript', description: 'TypeScript is a superset of JavaScript that adds static typing and other features to help improve code quality and maintainability.' },
  { logo: ReactLogo, name: 'React', description: 'React is a JavaScript library for building user interfaces, developed by Facebook.' },
  { logo: NodeLogo, name: 'Node.js', description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing you to run JavaScript code outside of a web browser.' },
  { logo: JavaLogo, name: 'Java', description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.' },
  { logo: CppLogo, name: 'C++', description: 'C++ is a general-purpose programming language created as an extension of the C programming language, with additional features such as object-oriented programming.' },
  { logo: CLogo, name: 'C', description: 'C is a general-purpose, procedural programming language that was originally developed at Bell Labs by Dennis Ritchie.' }
];

export default Technologies;

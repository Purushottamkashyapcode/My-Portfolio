// ProfileSection.jsx

import React from 'react';
import ProfileImage from './assets/portfoliopic.png';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Import icons from React Icons
 // Import CSS file for styling
import "./App.css";
import leetcodelogo from './assets/leetcode.svg';
import githublogo from './assets/github.svg';
import LinkedinLogo from './assets/linkedin.svg';

function ProfileSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-500 to-red-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-6xl mb-4 animate-fade-in-up text-yellow-300">Hello, I'm</h1>
          <h2 className="font-bold text-6xl animate-fade-in-up gradient-text">Purushottam</h2>
<h3 className="font-bold text-4xl md:text-5xl mt-4 animate-fade-in-up gradiant-text">Full-Stack Developer</h3>



          <div className="flex justify-center md:justify-start mt-6  gradiant-text">
            {/* GitHub */}
            <a href="https://github.com/Purushottamkashyapcode" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:text-yellow-300">
              <img src={githublogo} alt="github" className="w-10 h-9" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/purushottam-kumar-466a88249/" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:text-yellow-300">
              <img src={LinkedinLogo} alt="LinkedIn" className="w-10 h-10" />
            </a>
            {/* LeetCode */}
            <a href="https://leetcode.com/hrithikaryancode/" target="_blank" rel="noopener noreferrer" className="text-white mx-4 hover:text-yellow-300">
              <img src={leetcodelogo} alt="LeetCode" className="w-10 h-10" />
            </a>
          </div>
          {/* Resume Download Button */}
          <a href="link-to-your-resume.pdf" download className="inline-block mt-7 px-5 py-5 bg-gradient-to-b from-cyan-900 to-green-600 text-white font-bold rounded-full hover:bg-yellow-600 ml-3">Download Resume</a>

        </div>
        <div className="md:w-1/2 text-center mt-4">
          <img src={ProfileImage} width={400} className="mx-auto rounded-full border border-black focus:border-blue-500 ... " alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;

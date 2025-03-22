import React from 'react';
import ProfileImage from './assets/portfoliopic.png';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Import icons from React Icons
import "./App.css";
import leetcodelogo from './assets/leetcode.svg';
import githublogo from './assets/github.svg';
import LinkedinLogo from './assets/linkedin.svg';

function ProfileSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[url('./assets/noise.png')] opacity-10 animate-noise"></div>

      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left Section: Text and Links */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in-up text-[#64ffda]">
            Hello, I'm
          </h1>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#00a8cc]">
            Purushottam
          </h2>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-4 animate-fade-in-up text-[#ccd6f6]">
            Full-Stack Developer
          </h3>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-8 space-x-6">
            <a
              href="https://github.com/Purushottamkashyapcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-transform transform hover:scale-110"
            >
              <img src={githublogo} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/purushottam-kumar-466a88249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-transform transform hover:scale-110"
            >
              <img src={LinkedinLogo} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a
              href="https://leetcode.com/hrithikaryancode/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-transform transform hover:scale-110"
            >
              <img src={leetcodelogo} alt="LeetCode" className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>

          {/* Resume Download Button */}
          <a
            href="link-to-your-resume.pdf"
            download
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-[#64ffda] to-[#00a8cc] text-[#0a192f] font-bold rounded-full hover:bg-gradient-to-r hover:from-[#00a8cc] hover:to-[#64ffda] transition-transform transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className="md:w-1/2 text-center mt-12 md:mt-0">
          <div className="relative inline-block">
            <img
              src={ProfileImage}
              width={300}
              className="mx-auto rounded-full border-4 border-[#64ffda] shadow-2xl shadow-[#64ffda] transition-shadow duration-300"
              alt="Profile"
            />
            {/* Glowing effect around the profile image */}
            <div className="absolute inset-0 rounded-full border-4 border-[#64ffda] shadow-glow animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
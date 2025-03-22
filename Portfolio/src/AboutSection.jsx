import React from 'react';

function AboutSection() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[url('./assets/noise.png')] opacity-10 animate-noise"></div>

      {/* Glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50"></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-4xl p-8 rounded-lg bg-opacity-80">
          <div className="flex flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#00a8cc] animate-fade-in-up">
              About Me
            </h2>

            {/* Content */}
            <p className="text-lg md:text-xl text-gray-300 text-center mb-8 animate-fade-in-up">
              I'm a passionate and results-driven <span className="text-[#64ffda]">Full-Stack Developer</span> with a strong foundation in <span className="text-[#64ffda]">Data Structures and Algorithms</span>. My expertise spans across both front-end and back-end technologies, enabling me to build scalable, efficient, and user-friendly applications. I specialize in <span className="text-[#64ffda]">JavaScript</span>, <span className="text-[#64ffda]">React</span>, <span className="text-[#64ffda]">Node.js</span>, <span className="text-[#64ffda]">Express.js</span>, and modern web development tools.
            </p>
            <p className="text-lg md:text-xl text-gray-300 text-center mb-8 animate-fade-in-up">
              I thrive on solving complex problems and continuously strive to improve my skills. My portfolio includes projects like an <span className="text-[#64ffda]">Airbnb Clone</span>, a <span className="text-[#64ffda]">Portfolio Website</span>, and a <span className="text-[#64ffda]">Medium Clone</span>, showcasing my ability to deliver high-quality, production-ready applications.
            </p>
            <p className="text-lg md:text-xl text-gray-300 text-center animate-fade-in-up">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
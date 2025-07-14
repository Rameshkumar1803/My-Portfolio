import React from "react";

const Hero = () => (
  <section
    data-aos="zoom-in"
  className="relative bg-white dark:bg-gray-900 text-center py-20 px-4 flex flex-col items-center justify-center overflow-hidden text-black dark:text-white"
  >
    {/* Profile Image */}
    <img
      src="/meRamesh.png"
      alt="Ramesh Kumar"
      className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mb-6"
    />

    {/* Intro Heading */}
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Hello, I'm <span className="text-blue-600">Ramesh Kumar</span>
    </h1>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6 leading-relaxed">
      A <strong>Full Stack Developer</strong> and <strong>B.Tech IT student</strong>, passionate about building scalable web apps using{" "}
      <span className="text-blue-700 font-medium">Node.js, React, MongoDB, and PHP</span>. With <b>900+ bugs resolved</b> at Nothing Tech and a portfolio of real-world projects, I’m on my way to becoming a strong SDE.
    </p>

    {/* Resume Download Button */}
    <a
      href="/resume.pdf"
      download
      className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
    >
      Download Resume
    </a>

    {/* Top SVG Background */}
    <div className="absolute top-0 left-0 -z-10 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-60 md:h-80 fill-blue-100 opacity-30"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,240C672,267,768,245,864,218.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        ></path>
      </svg>
    </div>

    {/* Bottom SVG Background (pushed down) */}
    <div className="absolute bottom-[-40px] left-0 -z-10 w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-48 md:h-56 fill-purple-100 opacity-20"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,128C672,139,768,149,864,138.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default Hero;

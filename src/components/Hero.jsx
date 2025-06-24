import React from "react";

const Hero = () => (
  <section className="text-center py-24 bg-gradient-to-b from-blue-50 to-white">
    <img
  src="/meRamesh.png"
  alt="Profile"
  className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md"
/>

    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
      Hello, I'm <span className="text-blue-600">Ramesh Kumar</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
      A passionate web developer specializing in React and modern web technologies.
    </p>
    <a
      href="/resume.pdf"
      download
      className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      Download Resume
    </a>
  </section>
);

export default Hero;

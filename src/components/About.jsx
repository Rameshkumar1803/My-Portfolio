import React from "react";

const About = () => (
  <section
    id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 text-black dark:text-white"
  >
    {/* Optional Blurred Background Circle */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-ping -z-10"></div>

    <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
      {/* Text Content */}
      <div className="lg:w-2/3" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi, I’m <span className="font-semibold text-blue-700">Ramesh Kumar</span>, a backend-focused developer and B.Tech IT student at Galgotias College.
          I’m passionate about building <span className="font-medium">scalable web apps, REST APIs, and automation tools</span> using
          <span className="font-medium"> Node.js, MongoDB, PHP, and Python</span>.
        </p>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          At <span className="font-semibold text-purple-700">Nothing Technology</span>, I discovered and resolved over <b>900+</b> critical bugs, enhancing my debugging and QA expertise.
          I also lead <span className="font-medium text-green-700">Competitive Programming & DSA</span> at Google DSC GCET and was selected for the <span className="font-medium text-red-600">Harvard Aspire Leaders Program</span>.
        </p>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          My projects include a <b>URL Shortener</b>, <b>Task Scheduler</b>, and a <b>Disaster Data Aggregator</b>. I'm an active problem solver on LeetCode with a global rank under <b>100K</b>, always exploring ways to solve real-world challenges through code.
        </p>
      </div>

      {/* Image / Avatar */}
      <div className="lg:w-1/3" data-aos="zoom-in">
        <img
          src="/me.jpg"
          alt="Ramesh Kumar"
          className="w-full h-auto max-w-xs mx-auto rounded-full shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default About;

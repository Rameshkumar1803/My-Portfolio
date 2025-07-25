import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    image: "/portfolio.png",
    github: "https://github.com/Rameshkumar1803?tab=repositories",
    demo: "https://github.com/Rameshkumar1803/My-Portfolio",
    delay: "0",
  },
  {
    title: "Library Management System",
    description: "A CLI-based library management tool built in Python for managing book records.",
    tech: ["Python", "OOP", "CLI"],
    image: "/LMS.webp",
    github: "https://github.com/Rameshkumar1803?tab=repositories",
    demo: "https://github.com/Rameshkumar1803/Library-management-system",
    delay: "500",
  },
  {
    title: "Task Scheduler with Email Reminders",
    description: "A PHP-based task scheduler using CRON jobs and email reminders.",
    tech: ["PHP", "CRON", "Email API"],
    image: "/Taskscheduler.jpg",
    github: "https://github.com/Rameshkumar1803?tab=repositories",
    demo: "https://github.com/rtlearn/task-scheduler-Rameshkumar1803/pull/1/commits/078ea07f17ccd702651c5281c4cb6621e2c65d3c",
    delay: "1000",
  },
  {
    title: "URL Shortener Web App",
    description: "A frontend application for shortening long URLs, built using React and local storage.",
    tech: ["React", "JavaScript", "HTML/CSS"],
    image: "/urlshort.jpg",
    github: "https://github.com/Rameshkumar1803?tab=repositories",
    demo: "https://github.com/Rameshkumar1803/react-url-shortener",
    delay: "1500",

  },
  {
    title: "MealDb Explorer",
    description: "A responsive React app that lets users search, filter, view, and favorite meals using the MealDB API, with dark mode, pagination, and live YouTube recipe support.",
    tech: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "React Router", "MealDB API", "React Toastify", "AOS", "LocalStorage"],
    image: "/MealDb.png",
    github: "https://github.com/Rameshkumar1803?tab=repositories",
    demo: "https://github.com/Rameshkumar1803/MealDB-app",
    delay: "2000",
    
  },
];

const Projects = () => (
  <section
    id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-black dark:text-white"
  >
    {/* Decorative Top Wave */}
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white ...">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-48 fill-blue-100 opacity-30"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        />
      </svg>
    </div>

    <h2
      className="text-3xl font-bold text-center text-blue-700 mb-12"
      data-aos="fade-up"
    >
      Projects
    </h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay={project.delay}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-700"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-500"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

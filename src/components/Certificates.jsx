import React from "react";

const certificates = [
  {
    title: "The Joy Of Computing Using Python",
    issuer: "NPTEL IIT [ROPAR]",
    image: "/NPTEL_Python.png",
    delay: "0",
  },
  {
    title: "Harvard Aspire Leadership Program",
    issuer: "Harvard Business School",
    image: "/Aspire.png",
    delay: "1000",
  },
  {
    title: "Top Performer Award - Nothing Tech",
    issuer: "Monthly Recognition (9x)",
    image: "NothingTech.jpg",
    delay: "2000",
  },
];

const Certificates = () => (
  <section id="certificates" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
    <h2
      className="text-3xl font-bold text-center text-blue-700 mb-12"
      data-aos="fade-up"
    >
      Certificates
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {certificates.map((cert, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 p-4 text-black dark:text-white rounded-lg shadow-md"
          data-aos="zoom-out"
          data-aos-delay={cert.delay}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">{cert.title}</h3>
          <p className="text-gray-600">{cert.issuer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certificates;

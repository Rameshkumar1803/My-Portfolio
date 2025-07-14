import React from "react";

const testimonials = [
  {
    name: "Team Lead - GDG On Campus",
    feedback:
      "Ramesh is an outstanding developer. His ability to turn ideas into elegant UI is amazing.",
    delay: "0",
  },
  {
    name: "Mentor - Aspire Leadership Program (Harvard)",
  feedback:
    "Ramesh demonstrated exceptional leadership and strategic thinking throughout the Aspire Program. He is proactive, collaborative, and leads with clarity and empathy.",
  delay: "1000",
  },
  {
    name: "Mentor [Diwakar Singh] - Nothing Technology",
    feedback:
      "Awarded 9 times as Top Performer – his passion and consistency are unmatched.",
    delay: "2000",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 bg-white text-center">
    <h2
      className="text-3xl font-bold mb-12 text-blue-700"
      data-aos="fade-up"
    >
      Testimonials
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {testimonials.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          data-aos="zoom-in"
          data-aos-delay={item.delay}
        >
          <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
          <h4 className="text-blue-800 font-semibold">{item.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

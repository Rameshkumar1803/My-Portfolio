import React from "react";

const testimonials = [
  {
    quote: "Ramesh is a quick learner and an excellent problem solver. A great asset to any tech team!",
    name: "Amit Verma",
    role: "Team Lead, GDG GCET",
  },
  {
    quote: "Outstanding performance month after month at Nothing Technology.",
    name: "HR Panel",
    role: "Nothing Technology",
  },
  {
    quote: "His leadership and communication skills shone in the Aspire Leadership Program.",
    name: "Mentor",
    role: "Harvard Business School",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4 bg-white">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Testimonials</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {testimonials.map((testi, idx) => (
        <div key={idx} className="bg-gray-50 rounded-lg shadow-md p-6">
          <p className="italic text-gray-700 mb-4">“{testi.quote}”</p>
          <p className="font-semibold text-blue-800">{testi.name}</p>
          <p className="text-sm text-gray-600">{testi.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

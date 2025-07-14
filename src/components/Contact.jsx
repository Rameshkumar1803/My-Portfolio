import React from "react";
import { MailIcon, LinkedinIcon, CodeIcon } from "./icons"; // Icons defined below

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gray-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 text-blue-700">Contact Me</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:rkc8948714941@gmail.com"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-center space-x-4"
        >
          <MailIcon />
          <span className="text-blue-700 font-medium">rkc8948714941@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ramesh-kumar-5286ab259/"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-center space-x-4"
        >
          <LinkedinIcon />
          <span className="text-blue-700 font-medium">RameshKumar18</span>
        </a>

        <a
          href="https://leetcode.com/u/Ramesh_Kumar18/"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex items-center space-x-4"
        >
          <CodeIcon />
          <span className="text-blue-700 font-medium">RameshKumar1803</span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;

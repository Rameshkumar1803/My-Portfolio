import React, { useState, useEffect } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-white">My Portfolio</h1>
        <div className="flex items-center space-x-4">
          <nav className="space-x-6">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 text-sm text-gray-500 border px-3 py-1 rounded dark:text-white dark:border-white"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

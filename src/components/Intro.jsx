import React from 'react';

function Intro() {
    return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <img
          className="w-40 h-40 rounded-full ring-2 ring-gray-800 dark:ring-gray-500"
          src="/assets/intropic.jpg"
          alt="Rounded avatar"
        ></img>
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Gurman Toor
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Computer Science Co-op Student
        </p>
        <p className="text-base md:text-l mb-3 font-small">
          University of Manitoba, Graduating April 2025
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          Hello! I'm Gurman, a computer science co-op student at the University
          of Manitoba. I'm currently exploring different aspects of computer
          science, but I've really enjoyed tackling data science topics,
          front-end development and API development so far! Welcome to my
          portfolio page where I showcase what I've accomplished since the first
          day I began coding!
        </p>
      </div>
    );
}

export default Intro;
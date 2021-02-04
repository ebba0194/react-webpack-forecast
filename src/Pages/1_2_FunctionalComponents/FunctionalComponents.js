/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const FunctionalComponents = () => (
  <div className="pt-8 text-darkLiver container mx-auto max-w-3xl pb-32 px-4 break-words">
    <h1 className="text-6xl text-center md:text-7xl text-raisinBlack font-semibold pb-8">1.2: Functional Components</h1>
    <p className="pb-4 text-2xl font-bold">
      Now we get to write some React
      <span role="img" aria-label="winking-face"> 😉</span>
      .
      Let's build our very first functional component.
    </p>
    <p className="py-4">
      Throughout this course, we will iteratively build a functional weather application using the
      <a rel="noopenner noreferrer" target="_blank" className="text-dodgerBlue" href="https://openweathermap.org/api"> OpenWeather API</a>
      .
    </p>
    <p className="py-4">
      For this section, we will create a simple, reusable, presentational component- a weather information tile that can display:
    </p>
    <ul className="list-disc p-4 pt-0">
      <li>Day of the week</li>
      <li>An icon representing the day's weather</li>
      <li>The low and high temperature for the day</li>
    </ul>
    <h3 className="text-3xl semibold text-raisinBlack pt-4">Functional Component Primer</h3>

    <h3 className="text-3xl semibold text-raisinBlack pt-4">File Structure</h3>

  </div>
);

export default FunctionalComponents;

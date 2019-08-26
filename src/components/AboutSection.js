import React from 'react';
import data from 'data/johnayeni.json';
import Typewriter from 'typewriter-effect';

const AboutSection = () => {
  const { about } = data;
  return (
    <div id="about">
      <h1>About</h1>
      {about.map((text, index) => (
        <h4 key={index}>
          <Typewriter
            options={{
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(index * 5000)
                .changeDelay(50)
                .typeString(text)
                .deleteChars(-1)
                .start();
            }}
          />
        </h4>
      ))}
    </div>
  );
};

export default AboutSection;

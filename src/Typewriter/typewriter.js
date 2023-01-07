import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: ["Hello, I am Mayur Wagh"],
        autoStart: true,
        delay:80,
        loop: true,
        deleteSpeed: 40,
        // pauseFor: 3000,
      }}
    />
  );
}

export default TypeWriter;

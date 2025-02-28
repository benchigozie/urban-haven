import React from 'react'
import { Typewriter } from "react-simple-typewriter";

function Welcome() {
  return (
    <div className="text-text py-24 md:py-32 flex flex-col gap-2 md:gap-4">
      <h1 className="text-4xl md:text-5xl font-bold font-cormorant flex flex-col md:flex-row items-center md:justify-center md:gap-2">
        <span>Welcome to</span> <span className="text-accent">Urban Haven</span>
      </h1>
      <p className="font-poppins text-center">
        <Typewriter
          words={[
            "Where style meets comfort.",
            "Transform your space with ease.",
            "Design that reflects you."
          ]}
          loop={Infinity} // Keeps looping
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={3000}
        />
      </p>
    </div>
  )
}

export default Welcome;
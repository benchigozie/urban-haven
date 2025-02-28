import React from 'react';
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative top-16 md:top-0 w-full h-[80vh] md:h-screen bg-cover bg-center bg-[image:var(--hero-bg)] z-0 flex items-center opacity-0 animate-fade-in justify-center">
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/100 via-black/80 to-transparent"></div>

      <div className='bg-[var(--gray-bg)] h-full flex items-center justify-center w-full flex-col gap-4'>
        <motion.div className='max-w-[var(--max-width)] w-5/6 md:w-4/5 flex justify-center md:justify-start items-center '
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
        >
          <h1 className='text-4xl md:text-6xl text-center md:text-start font-head-1 font-bold text-white max-w-10/12 md:w-7/12'>TransForm Your Space To Reflect You</h1>
        </motion.div>
        <motion.div
          className='max-w-[var(--max-width)] w-5/6 md:w-4/5 flex justify-center md:justify-start items-center text-accent text-xl gap-2'
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1.5, y: 0 }} 
          transition={{ duration: 2, ease: "easeOut" }} 
        >
          <p>&bull; Your Vision</p>
          <p>&bull; Our Expertise</p>
        </motion.div>
        <motion.div 
        className='flex gap-4 max-w-[var(--max-width)] w-5/6 md:w-4/5 justify-center md:justify-start items-center'
        initial={{ opacity: 0 , y: 100}}  
          animate={{ opacity: 1, y: 0}} 
          transition={{ duration: 2, ease: "easeOut" }} 
        >
          <button className='bg-accent border-2 border-accent text-text rounded-full px-4 py-2 cursor-pointer'>Get Started</button>
          <button className='border-2 border-accent text-accent rounded-full px-4 py-2 cursor-pointer'>Learn More</button>
        </motion.div>
      </div>



      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>
      <div></div>
    </section>

  )
}

export default Hero;
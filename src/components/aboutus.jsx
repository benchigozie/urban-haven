import React from 'react';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function AboutUs() {

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.2 } // Trigger when 20% of the element is visible
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);
    
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-secondary py-10 md:py-16 rounded-2xl flex flex-col gap-12 mb-20"
    >
      <h2 className='text-accent font-cormorant text-3xl text-center'>About Us</h2>
      <div className='flex flex-col md:flex-row  md:px-10 justify-between items-center gap-8 md:gap-0 font-poppins'>
        <p className='text-text w-10/12 md:w-[44%]'>Welcome to <span className='text-accent'>Urban Haven</span>, where design meets comfort. We believe that your space should reflect your personality, inspire creativity, and bring a sense of peace to your everyday life. At Urban Haven, we specialize in curating modern, stylish interior decor solutions that fit your vision of your space. Whether you’re looking for a minimalist or bold artistic expression, our collections are designed to suit your taste and lifestyle.<br/><br/>Our mission is simple: to help you create a space that is unique to your vision.<br/><br/>Let’s turn your vision into reality. Your home deserves to be a Haven.
        </p>
        
        <div className='bg-cover bg-center bg-[image:var(--about-image)] h-auto w-5/6  min-h-[40vh] md:min-h-[50vh] md:w-1/2'></div>
      </div>
     
    </motion.div>
  )
}

export default AboutUs;
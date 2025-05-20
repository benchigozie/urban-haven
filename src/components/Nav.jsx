import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import blacklogo from '../assets/blacklogo.png'
import Hamburger from './hamburger';
import { motion, AnimatePresence } from "framer-motion";


function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className='flex fixed flex-col items-center md:py-4 w-full top-0'>
      <nav className='bg-gray-100 w-full md:w-4/5 px-8 py-2 md:py-2 md:rounded-full flex justify-between items-center z-10 shadow-[0_2px_15px_rgba(125,125,125,0.7)] max-w-[var(--max-width)]'>
        <a href="/">
          <img src={blacklogo} alt="Urban Haven Logo" className="h-8 w-auto" />
        </a>
        <div className='hidden md:flex justify-around w-9/12 font-poppins'>
          <RouterLink to="/" className='transition-transform transform hover:scale-105 hover:text-accent'>Home</RouterLink>
          <RouterLink to="/services" className='transition-transform transform hover:scale-105 hover:text-accent'>Services</RouterLink>
          <RouterLink to="/portfolio" className='transition-transform transform hover:scale-105 hover:text-accent'>Port-Folio</RouterLink>
          <ScrollLink
            to="contactsection"
            smooth={true}
            duration={500}
            className='transition-transform transform hover:scale-105 hover:text-accent'>Contact</ScrollLink>
        </div>
        <div className='hidden md:flex justify-end gap-2 w-1/12'>
          <FaFacebookSquare size={24} className='cursor-pointer' />
          <FaInstagram size={24} className='cursor-pointer' />
        </div>
        <div className='z-10'>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center gap-6 justify-center text-2xl md:hidden font-poppins"
          >
            <RouterLink to="/" className='transition-transform transform hover:scale-105 hover:text-accent' onClick={() => { setIsOpen(false) }}>Home</RouterLink>
            <RouterLink to="/services" className='transition-transform transform hover:scale-105 hover:text-accent' onClick={() => { setIsOpen(false) }}>Services</RouterLink>
            <RouterLink to="/portfolio" className='transition-transform transform hover:scale-105 hover:text-accent' onClick={() => { setIsOpen(false) }}>Port-Folio</RouterLink>
            <ScrollLink
              onClick={() => { setIsOpen(false) }}
              to="contactsection"
              smooth={true}
              duration={500}
              className='transition-transform transform hover:scale-105 hover:text-accent'>Contact</ScrollLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>



  )
};

export default Nav;

import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import blacklogo from '../assets/blacklogo.png'
import Hamburger from './hamburger';
import { motion, AnimatePresence } from "framer-motion";


function Nav() {
 
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    
      <div className='flex fixed flex-col items-center md:py-4 w-full'>
        <nav className='bg-gray-100 w-full md:w-4/5 px-8 py-4 md:rounded-full flex justify-between items-center z-10 shadow-[0_2px_15px_rgba(125,125,125,0.7)] max-w-[1400px]'>
          <a href="/">
            <img src={blacklogo} alt="Urban Haven Logo" className="h-8 w-auto" />
          </a>
          <div className='hidden md:flex justify-around w-9/12 font-poppins'>
            <a className='transition-transform transform hover:scale-105 hover:text-accent'>Home</a>
            <a className='transition-transform transform hover:scale-105 hover:text-accent'>Services</a>
            <a className='transition-transform transform hover:scale-105 hover:text-accent'>Port-Folio</a>
            <a className='transition-transform transform hover:scale-105 hover:text-accent'>Contact</a>
          </div>
          <div className='hidden md:flex justify-end gap-2 w-1/12'>
            <FaFacebookSquare size={24} className='cursor-pointer' />
            <FaInstagram size={24} className='cursor-pointer' />
          </div>
          <div className='z-10'>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
        </nav>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center gap-6 justify-center text-2xl md:hidden font-poppins"
          >
            <a href="#" className="transition-transform transform hover:scale-105 hover:text-accent" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#" className="transition-transform transform hover:scale-105 hover:text-accent" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#" className="transition-transform transform hover:scale-105 hover:text-accent" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#" className="transition-transform transform hover:scale-105 hover:text-accent" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
 


  )
};

export default Nav;

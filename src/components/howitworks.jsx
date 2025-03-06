import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';

const steps = [
    { id: 1, title: "Tell Us Your Style", text: "Take our quick style quiz or explore different aesthetics to find what suits you best.", icon: <FaPalette /> },
    { id: 2, title: "Get Personalized Recommendations", text: "Our experts suggest furniture and decor tailored to your taste, budget, and space needs.", icon: <FaStar /> },
    { id: 3, title: "Visualize Your Space", text: "Use our room planner to see how your chosen pieces fit together before you buy.", icon: <FaEye /> },
    { id: 4, title: "Shop & Transform", text: "Order directly from our trusted partners and bring your dream space to life!", icon: <FaShoppingCart /> }
  ];

  
  function Howitworks() {
    return (
        <section className="md:py-16 text-white text-center flex flex-col gap-12 mb-24">
        <motion.h2 
          className="text-3xl font-bold mb-8 font-cormorant text-accent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Create Your Perfect Space
        </motion.h2>
  
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-[#0c0d0d] p-6 rounded-xl flex flex-col items-center text-center shadow-lg font-poppins"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="text-4xl text-text mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Howitworks;
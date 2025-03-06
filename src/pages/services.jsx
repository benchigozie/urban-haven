import React from 'react'
import Footer from '../components/footer';
import ContactSection from '../components/contactsection';
import { motion } from 'framer-motion';


import interiorDesignImg from '../assets/interiordesign.webp';
import spacePlanningImg from '../assets/spaceplanning.webp';
import designConsultationImg from '../assets/designconsultation.webp';
import projectManagementImg from '../assets/projectmanagement.webp';
import homeStagingImg from '../assets/homestaging.webp';
import customDesignImg from '../assets/custom.webp';

const services = [
  { id: 1, title: "Interior Design", image: interiorDesignImg, description: "Our expert interior designers curate stylish and functional spaces that reflect your personality, it is the combination of aesthetics and practicality that creates a perfect environment." },
  { id: 2, title: "Space Planning", image: spacePlanningImg, description: "We maximize your space by creating efficient layouts that don't compromise your freedom to move around, and your comfort ensuring every square foot is utilized perfectly." },
  { id: 3, title: "Design Consultation", image: designConsultationImg, description: "Get professional advice on your color schemes, furniture choices, lighting, and decor to bring your vision to life." },
  { id: 4, title: "Project Management", image: projectManagementImg, description: "From the initial concept to completion, we oversee budgets, timelines, and contractors, ensuring your project is executed properly and stress-free." },
  { id: 5, title: "Home Staging", image: homeStagingImg, description: "Enhance the appeal of your property with strategic furniture placement and decor styling to maximize it's value." },
  { id: 6, title: "Custom Design Solutions", image: customDesignImg, description: "We create one of a kind furniture and design elements tailored specifically to your space. Whether you need a statement piece or a better storage solution, we bring your vision to life." },
];

function Services() {
  return (
    <div className='relative bg-primary flex flex-col items-center top-16 md:top-0 pt-12 md:pt-28 '>
      <div className='max-w-[var(--max-width)] w-11/12 md:w-4/5'>
        <h2 className="text-3xl font-bold font-cormorant text-center mb-8 text-accent">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 font-poppins mb-28">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut"}}
            className="p-6 bg-[#161617] shadow-lg rounded-lg flex flex-col items-center text-center text-text"
          >
            <img src={service.image} alt={service.title} className="w-40 h-40 mb-4 rounded-full object-cover" />
            <h3 className="text-xl font-semibold text-highlight">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
        </div>
        <ContactSection />


      </div>
      <Footer />
    </div>

  )
}

export default Services;
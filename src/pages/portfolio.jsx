import React from 'react'
import Footer from '../components/footer';
import ContactSection from '../components/contactsection';
import { motion } from 'framer-motion';

import willoImg from '../assets/willow.webp';
import kitchenImg from '../assets/kitchen.webp';
import industrialImg from '../assets/industrial.webp';
import riveraImg from '../assets/rivera.webp';
import officeImg from '../assets/office.webp';
import bathroomImg from '../assets/bathroom.webp';

const projects = [
  {
    id: 1,
    title: "The Willow Residence – Modern Minimalist Living.",
    location: "City Center Apartment.",
    client: "Young Professional Couple.",
    style: "Minimalist, Contemporary.",
    description: "For this project, our goal was to create a sleek and clutter-free living space without sacrificing warmth and personality. We started by opening up the layout, knocking down a partition wall to allow for a seamless transition between the kitchen and living area.",
    image: willoImg,
  },
  {
    id: 2,
    title: "Oakwood Manor – Rustic Kitchen Renovation.",
    location: "Countryside Home.",
    client: "A family seeking a warm, inviting kitchen.",
    style: "Rustic.",
    description: "This kitchen renovation was all about blending authentic rustic elements with modern functionality. The original space was outdated, so we completely replaced the cabinetry with reclaimed wood to enhance its rustic charm.",
    image: kitchenImg,
  },
  {
    id: 3,
    title: "The Skyline Loft – Industrial Meets Luxury.",
    location: "Downtown Loft.",
    client: "Urban Executive.",
    style: "ndustrial, Modern.",
    description: "For this industrial loft redesign, we wanted to maintain its raw, edgy character while introducing luxurious elements for a more refined living experience. The original exposed brick walls and steel beams provided the perfect base for an urban aesthetic.",
    image: industrialImg,
  },
  {
    id: 4,
    title: "The Rivera Home – Bohemian Bedroom Makeover.",
    location: "Private Residence.",
    client: "A creative professional looking for a cozy retreat.",
    style: "Bohemian, Eclectic.",
    description: "This bedroom makeover was all about layering textures and embracing an artistic yet calming atmosphere. The client wanted a space that felt like a personal sanctuary while still expressing their creative spirit.",
    image: riveraImg,

  },
  {
    id: 5,
    title: "Northwood Office – Scandinavian Workspace Redesign.",
    location: "Corporate Office for a Tech Startup.",
    client: "Startup founders looking for a modern, productivity-driven workspace.",
    style: "Scandinavian, Minimalist.",
    description: "This office renovation focused on creating a space that encourages productivity and creativity. The original office was cluttered and had harsh artificial lighting, so we made major upgrades. To balance function and style, we added wooden elements, such as floating shelves and planters, to bring warmth into the office. A dedicated lounge area with cozy seating was also designed for informal meetings and relaxation.",
    image: officeImg,
  },
  {
    id: 6,
    title: "Coastal Escape – Spa-Inspired Bathroom Renovation.",
    location: "Beachfront Home.",
    client: "Homeowners looking for a luxurious yet practical bathroom.",
    style: "Coastal, Spa-Inspired.",
    description: "This bathroom was transformed into a relaxing retreat that mimics the tranquility of a luxury spa. The homeowners wanted a space that felt fresh, calming, and effortlessly elegant.",
    image: bathroomImg,
  },
];

function Portfolio() {
  return (
    <div className='relative bg-primary flex flex-col items-center top-12 md:top-0 pt-12 md:pt-28 '>
      <div className='max-w-[var(--max-width)] w-11/12 md:w-4/5'>
        <h2 className="text-3xl font-bold font-cormorant text-center mb-8 text-accent">Our Port-Folio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto font-poppins mb-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#161617] shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >

              <div className="relative w-full h-64 group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="p-8 text-text flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-accent">{project.title}</h2>
                <div>
                  <p>
                    <strong className='text-highlight'>Location:</strong> {project.location}
                  </p>
                  <p>
                    <strong className='text-highlight'>Client:</strong> {project.client}
                  </p>
                  <p>
                    <strong className='text-highlight'>Style:</strong> {project.style}
                  </p>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ContactSection />


      </div>
      <Footer />
    </div>

  )
}

export default Portfolio;
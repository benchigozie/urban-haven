import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";


function ContactSection() {
  return (
    <Element name="contactsection" className="py-16 px-6 md:px-16 bg-[#161617] rounded-lg text-white my-6 md:my-36">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[350px] rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.026869381446!2d3.365688474595813!3d6.518282623224785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92408578e6ff%3A0xe2f02ea82d081ce!2sChicken%20Republic%20-%20Jibowu!5e0!3m2!1sen!2sng!4v1741054584555!5m2!1sen!2sng" allowFullScreen="" loading="lazy"></iframe>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[#1d1e1f] p-8 rounded-lg shadow-lg font-poppins"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="David Shayla"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="davidshayla@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-accent hover:bg-primary cursor-pointer transition duration-300 rounded text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </Element>
  );
}

export default ContactSection;

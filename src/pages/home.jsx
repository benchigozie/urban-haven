import React from 'react'
import Hero from '../components/hero';
import Welcome from '../components/welcome';
import AboutUs from '../components/aboutus';
import Testimonials from '../components/testimonials';
import Footer from '../components/footer';
import Faqs from '../components/faqs';
import Howitworks from '../components/howitworks';
import ContactSection from '../components/contactsection';

function Home() {
  return (
    <div>
      <Hero />
      <div className='relative bg-primary flex flex-col items-center top-12 md:top-0'>
        <div className='max-w-[var(--max-width)] w-11/12 md:w-4/5'>
        <Welcome />
        <AboutUs />
        <Testimonials />
        <Howitworks />
        <Faqs />
        <ContactSection />
        <Footer />
        </div>
     
      </div>
      
    </div>
    
  )
}

export default Home;
import React from 'react'
import Hero from '../components/hero';
import Nav from '../components/Nav';
import Welcome from '../components/welcome';

function Home() {
  return (
    <div>
      <Hero />
      <div className='relative bg-primary flex flex-col items-center top-16 md:top-0'>
        <div className='max-w-[var(--max-width)] w-11/12 md:w-4/5'>
        <Welcome />
        </div>
     
      </div>
      
    </div>
    
  )
}

export default Home;
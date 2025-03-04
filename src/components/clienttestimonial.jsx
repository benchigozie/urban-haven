import React from 'react'

function ClientTestimonial({ name, role, testimony, image }) {
  return (
    <div className='text-text font-poppins bg-gradient-to-b from-black to-gray-800 rounded-lg px-6 py-8 flex flex-col gap-2'>
        <div 
        className={`bg-cover bg-center h-20 w-20 rounded-full`}
        style={{ backgroundImage: `url(${image})`}}
        ></div>
        <p>{name}</p>
        <p className='font-light'>{role}</p>
        <p>{testimony}</p>
    </div>
  )
}

export default ClientTestimonial;
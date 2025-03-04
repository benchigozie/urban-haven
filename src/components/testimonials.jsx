import React from 'react'
import ClientTestimonial from './clienttestimonial'

function Testimonials() {
  return (
    <div className='flex flex-col items-center py-24 gap-10'>
        <h2 className='text-accent text-3xl font-cormorant'>What Our Clients Say</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ClientTestimonial name="David Blaine" role="CEO PRE Digital" image="/src/assets/client1.webp" testimony="Urban Haven completely transformed my apartment. I find every excuse to stay at home now. The attention to detail and their creativity is amazing. I highly recommend them!"/>
            <ClientTestimonial name="Mark Rober" role="Interior Design" image="/src/assets/client2.webp" testimony="I wanted a minimal cozy vibe for my home, and Urban Haven delivered exactly that. Their team was really professional, and the results were stunning!"/>
            <ClientTestimonial name="Scott McMan" role="Interior Design"image="/src/assets/client3.webp" testimony="I was hesitant at first, but after seeing the final results, I can confidently say it was worth every penny. My
home feels luxurious and inviting!"/>
            <ClientTestimonial name="Daniel Isreal" role="G.M. Abaka ltd" image="/src/assets/client4.webp" testimony="Urban Haven redesigned our office space, and the difference is incredible! Now more comfortable, functional, and
inspires productivity."/>
            <ClientTestimonial name="Wisdom Ideazi" role="Interior  Redesign" image="/src/assets/client5.webp" testimony="From the first consultation to the final reveal, the process was seamless. Their customer service is excellent,
and they actually care about your vision."/>
            <ClientTestimonial name="David Schmidth" role="Senior Accounting Officer J & C ltd" image="/src/assets/client6.webp" testimony="Urban Haven completely transformed my apartment. I find every excuse to stay at home now. The attention to detail and their creativity is amazing. I highly recommend them!"/>
        </div>
    </div>
  )
}

export default Testimonials
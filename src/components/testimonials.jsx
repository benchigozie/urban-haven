import React from 'react';
import ClientTestimonial from './clienttestimonial';


import client7Img from '../assets/client7.webp';
import client2Img from '../assets/client2.webp';
import client8Img from '../assets/client8.webp';
import client9Img from '../assets/client9.webp';
import client10Img from '../assets/client10.webp';
import client11Img from '../assets/client11.webp';

function Testimonials() {
  return (
    <div className='flex flex-col items-center py-24 gap-10'>
        <h2 className='text-accent text-3xl font-bold font-cormorant'>What Our Clients Say</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ClientTestimonial name="David Francis" role="CEO PRE Digital" image={client7Img} testimony="Urban Haven completely transformed my apartment. I find every excuse to stay at home now. The attention to detail and their creativity is amazing. I highly recommend them!"/>
            <ClientTestimonial name="Mark Rober" role="Interior Design" image={client2Img} testimony="I wanted a minimal cozy vibe for my home, and Urban Haven delivered exactly that. Their team was really professional, and the results were stunning!"/>
            <ClientTestimonial name="Justine McMan" role="Interior Design" image={client8Img} testimony="I was hesitant at first, but after seeing the final results, I can confidently say it was worth every penny. My
home feels luxurious and inviting!"/>
            <ClientTestimonial name="Daniel Isreal" role="G.M. Abaka ltd" image={client9Img} testimony="Urban Haven redesigned our office space, and the difference is incredible! Now more comfortable, functional, and
inspires productivity."/>
            <ClientTestimonial name="Emanuella Ideazi" role="Interior  Redesign" image={client10Img} testimony="From the first consultation to the final reveal, the process was seamless. Their customer service is excellent,
and they actually care about your vision."/>
            <ClientTestimonial name="David Olajide" role="Senior Accounting Officer J & C ltd" image={client11Img} testimony="Urban Haven completely transformed my apartment. I find every excuse to stay at home now. The attention to detail and their creativity is amazing. I highly recommend them!"/>
        </div>
    </div>
  )
}

export default Testimonials
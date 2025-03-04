import React from 'react'
import Question from './question';

function Faqs() {
  return (
    <div className='flex flex-col gap-10'>
        <h3 className='font-cormorant text-accent text-3xl text-center'>Frequently Asked Questions</h3>
        <div className='flex flex-col gap-4'>
        <Question 
          question="How long does it take?"
          answer="The duration of the Project is dependent on the nature of the projrct and the size of the Interior space."
          />
          <Question 
          question="Do you offer design consultations?"
          answer='Yes! We offer virtual design consultations where we discuss your vision and provide a design plan that fits your budget'
          />
          <Question 
          question="How do I contact customer support?"
          answer='You can reach us through our contact page or email us at support@urbanhaven.com. We will respond within 24 hours.'
          />
          <Question 
          question="How do I get started with interior design?"
          answer='Start by identifying your style preferences, setting a budget, and choosing a color scheme. You can explore our blog and product collections for inspiration.'
          />
        </div>
        
    </div>
  )
}

export default Faqs;
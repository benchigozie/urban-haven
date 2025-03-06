import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function Question({ question, answer }) {

  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className='text-text rounded-lg  font-poppins bg-gradient-to-b from-["#141414"] to-[#161617] px-6 py-6'>
      <div className="flex justify-between cursor-pointer" onClick={() => setShowAnswer(!showAnswer)} >
      <p className='text-lg'>{question}</p>
      <FiChevronDown 
          className={`w-6 h-6 transition-transform duration-500 ${showAnswer ? "-rotate-180" : "-rotate-90"}`}
        />
      </div>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showAnswer ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p>{answer}</p>
      </div>
      
    </div>
  )
}

export default Question;
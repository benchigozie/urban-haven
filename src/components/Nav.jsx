import React, {useState} from 'react'

export default function Nav() {
  const [ isOpen, setIsOpen ] = useState(false);


  return (
    <nav className='bg-text w-'>
      <div>
        <a>Home</a>
        <a>Services</a>
        <a>Port-Folio</a>
        <a>Contact</a>
      </div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
        <div className={`${isOpen ? "block" : "hidden"} md:flex flex-col md:flex-row mt-4 md:mt-0`}>
        <a href="#" className="block py-2 md:py-0 px-4 hover:bg-gray-700">Home</a>
        <a href="#" className="block py-2 md:py-0 px-4 hover:bg-gray-700">Services</a>
        <a href="#" className="block py-2 md:py-0 px-4 hover:bg-gray-700">Port-Folio</a>
        <a href="#" className="block py-2 md:py-0 px-4 hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  )
}

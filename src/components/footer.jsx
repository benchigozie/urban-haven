import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='py-36 flex flex-col gap-24'>
            <div className='text-text font-poppins flex flex-col gap-4 md:flex-row md:justify-between'>
                <div>
                    <h4 className='text-xl'>Help</h4>
                    <ul>
                        <li><a>Contact Us</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Payments</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl'>Legal Info</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl'>Follow Us</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>FaceBook</li>
                    </ul>
                </div>
            </div>
            <div className=' text-text font-poppins'>
                <p className='text-3xl md:text-9xl'>URBAN <span className='text-accent'>HAVEN</span></p>
                <p>© {new Date().getFullYear()} Urban Haven. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
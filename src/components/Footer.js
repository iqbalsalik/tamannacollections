import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='text-slate-500'>
        <div className="upperFooter flex sm:flex-row md:flex-row flex-col border-t border-b sm:text-start md:text-start text-center bg-slate-200">
            <div className="firstCol sm:w-1/4 md:w-1/4 size-full px-14 py-4 mx-4">
                <h2 className='mb-3 font-bold text-lg'>About The Shop</h2>
                <p>The Tamanna Collection began with our sheer love for textiles, coupled with a passion to bring about a revolution in the fast-paced fashion industry today.</p>
            </div>

            <div className="firstCol sm:w-1/4 md:w-1/4 size-ful px-14 py-4 mx-4">
                <h2 className='mb-3 font-bold text-lg'>Footer Menu</h2>
                <p>Privacy Policy</p>
                <p>Cancellation And Refund</p>
                <p>Terms & Condition</p>
                <p>Shipping And Delivery</p>
                <p>No Return - No Exchange</p>
            </div>

            <div className="firstCol sm:w-1/4 md:w-1/4 size-ful px-14 py-4 mx-4">
                <h2 className='mb-3 font-bold text-lg'>Quick Links</h2>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>

            <div className="firstCol sm:w-1/4 md:w-1/4 size-ful px-14 py-4 mx-4">
                <h2 className='mb-3 font-bold text-lg'>Get In Touch</h2>
                <h3 className='font-bold'>Tamanna Collection</h3>
                <p><FontAwesomeIcon icon={faLocationDot} /> Mansarovar, Jaipur, Rajasthan, 200345</p>
                <a href="mailto:test@example.com"><FontAwesomeIcon icon={faEnvelope} /> test@example.com</a><br />
                <a href="tel:+1234567890"><FontAwesomeIcon icon={faPhoneVolume} /> 123-456-7890</a>
            </div>
            
        </div>
        <div className="lowerFooter text-center p-5">
            <p>Copyright © 2024 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
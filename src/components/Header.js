import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>175){
        setIsSticky(true)
      }else{
        setIsSticky(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
        <div className='bg-slate-500 text-center w-screen'>
            <p className='p-1'>Free Domestic Shipping  </p>
        </div>
        <div className='flex  gap-20'>
            <img src="/assets/WhatsApp Image 2024-09-21 at 13.33.22_f23d1260.jpg" className='sm:w-36 md:w-36 w-32 ml-28' alt="logo" />
            <div className='w-2/4 my-auto border border-slate-950 hidden sm:flex md:flex justify-between rounded-md '>
              <div className='h-12 flex align-middle p-2 broder border-r-2 border-slate-950'>
                    <select name="category" id="category" className='text-slate-700'>
                    <option value="All Category" className='text-center' >All Category</option>
                    <option value="Ethnic Dress" className='text-center'>Ethnic Dress</option>
                    <option value="Casual Dress" className='text-center'>Casual Dress</option>
                    <option value="Plus Size Dress" className='text-center'>Plus Size Dress</option>
                    </select>
              </div>
              <div className='flex align-middle'>
                   <input type="text" placeholder='Search Item' />
              </div>
              <div className='bg-slate-950 text-white w-16 flex items-center justify-center'>
              <FontAwesomeIcon icon={ faMagnifyingGlass }  />
              </div>
            </div>
        </div>
        <div className={`bg-slate-300 ${isSticky ? 'sticky-nav' : ''}`}>
          <ul className='flex gap-7 ml-8 sm:ml-28 md:ml-28'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Header
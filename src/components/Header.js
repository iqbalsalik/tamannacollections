import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { shopData } from '../mockData';



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
        <div className='flex  sm:gap-20 md:gap-20 gap-2 w-full'>
            <img src="/assets/WhatsApp Image 2024-09-21 at 13.33.22_f23d12601.jpg" className='sm:w-24 md:w-24 w-2/12 sm:ml-28 md:ml-28 ml-2' alt="logo" />
            <div className='sm:w-3/12 md:w-3/12 w-8/12 my-auto sm:ml-10 md:ml-10 ml-2  border border-slate-400 p-2 rounded-md '>
              {/* <div className='h-12 flex align-middle sm:p-2 md:p-2 p-1 broder border-r-2 w-3/12 text-sm border-slate-400'>
                    <select name="category" id="category" className='text-slate-400'>
                    <option value="All Category" className='text-center' >All Category</option>
                    <option value="Ethnic Dress" className='text-center'>Ethnic Dress</option>
                    <option value="Casual Dress" className='text-center'>Casual Dress</option>
                    <option value="Plus Size Dress" className='text-center'>Plus Size Dress</option>
                    </select>
              </div> */}
              <div className='flex align-middle '>
                   <input type="text" placeholder='Search Item'
                   />
              </div>
              {/* <div className='bg-slate-950 text-white w-16 flex items-center justify-center'>
              <FontAwesomeIcon icon={ faMagnifyingGlass }  />
              </div> */}
            </div>
        </div>
        <div className={`bg-slate-300 ${isSticky ? 'sticky-nav' : ''}`}>
          <ul className='flex gap-7 ml-8 sm:ml-28 md:ml-28'>
            <li className='p-4'> <Link to={'/'}>Home</Link> </li>
            {/* <li className='p-4'>About</li> */}
            <li className='p-4'><Link to={"/contact"}>Contact Us</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
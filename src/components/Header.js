import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { shopData } from '../mockData';



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryDropDown,setCategoryDropDown] = useState(false);

  const handleCategoryDropDown = () => {
    setCategoryDropDown(!categoryDropDown)
  }

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const dropdown = document.querySelector('.dropdown-container');
      if (dropdown && !dropdown.contains(event.target)) {
        setCategoryDropDown(false)
      }
    };
  
    document.body.addEventListener('click', handleOutsideClick);
  
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [categoryDropDown]);
  


  return (
    <div>
        <div className='bg-slate-500 text-center w-screen'>
            <p className='p-1'>Free Domestic Shipping  </p>
        </div>
        <div className=' w-full'>
            <img src="/assets/WhatsApp Image 2024-09-21 at 13.33.22_f23d12601.jpg" className='sm:w-24 md:w-24 w-2/12 m-auto' alt="logo" />
        </div>
        <div className={`bg-slate-300 ${isSticky ? 'sticky-nav' : ''}`}>
          <ul className='flex gap-7 ml-8 sm:ml-28 md:ml-28'>
            <li className='p-4'> <Link to={'/'}>Home</Link> </li>
            <div className='relative dropdown-container'>
            <li className='p-4 cursor-pointer' onClick={handleCategoryDropDown}> Categories {categoryDropDown?<FontAwesomeIcon icon={faChevronUp} size="xs" />:<FontAwesomeIcon icon={faChevronDown} size="xs" />}</li>
            <ul  style={{
                display: categoryDropDown ? 'block' : 'none', // Change flex to block for proper dropdown behavior
                position: 'absolute', // Ensure it's positioned relative to the parent
                top: '100%', // Position it just below the <li>
                left: '0',   // Align it with the left side of the parent <li>
                width: "200px", // Adjust the width as needed
                backgroundColor: 'white', // Add background color for visibility
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for dropdown effect
                zIndex: 1000 // Ensure the dropdown appears above other elements
            }}>
              <Link to={'newArrival'}> 
                <li className='p-4 w-full text-start font-bold bg-slate-200 text-md hover' onClick={handleCategoryDropDown}>New Arrivals</li>
              </Link>
              <li className='p-4 w-full text-start font-bold bg-slate-200 text-md hover' onClick={handleCategoryDropDown}>Best Sellers</li>
              <li className='p-4 w-full text-start font-bold bg-slate-200 text-md hover' onClick={handleCategoryDropDown}>Summer Collections</li>
              <li className='p-4 w-full text-start font-bold bg-slate-200 text-md hover' onClick={handleCategoryDropDown}>Wedding Collections</li>
            </ul>
            </div>
            

            <li className='p-4'><Link to={"/contact"}>Contact Us</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
import React from 'react';
import Card from './/Card'
import {shopData} from '../mockData'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {

  let [filteredData, setFilteredData] = useState(shopData)
  const handleSizeChange = (itemSize) => {

     setFilteredData(shopData.filter(item => {
      if(item.size){
      return  item.size.includes(itemSize.toUpperCase())
      }
     }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className='flex flex-col'>
    <div>
    <select className='p-3  text-center mx-auto sm:mx-[37%] md:mx-[37%] my-10 border border-slate-400 rounded-lg sm:w-96 md:w-96 w-9/12 size-full sm:float-left md:float-left  block'
    onChange={(e) => handleSizeChange(e.target.value)}
    >
    <option value="select your size" className='block'>Select Your Size</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
        <option value="md">MD</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <option value="2xl">2XL</option>
        <option value="3xl">3XL</option>
        <option value="4xl">4XL</option>
        <option value="5xl">5XL</option>
        <option value="6xl">6XL</option>
        <option value="7xl">7XL</option>
      </select> 
    </div>
  
      <Slider {...settings} className='sm:mx-40 md:mx-40 my-10  sm:w-auto md:w-auto m-auto w-11/12 justify-between flex items-center '>
        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
          <div className="newArrival sm:w-52 sm:min-w-52 sm:max-w-52 md:w-52 w-36">
          <Link to={'/newArrival'}> <img src="/assets/img12.1.jpg" className=' w-full rounded-[350px]' alt="" /></Link>
          <h3 className='text-center font-bold'>New Arrival</h3>
         </div>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
          <div className="bestSeller sm:w-52 sm:min-w-52 sm:max-w-52 md:w-52 w-36">
          <img src="/assets/img9.1.jpg" className=' w-full rounded-[250px]' alt="" />
          <h3 className='text-center font-bold'>Best Seller</h3>
          </div>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
          <div className="summerCollections sm:w-52 sm:min-w-52 sm:max-w-52 md:w-52 w-36"> 
          <img src="/assets/img5.1.jpg" className=' w-full rounded-[250px]' alt="" />
          <h3 className='text-center font-bold'>Summer Collections</h3>
          </div>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
          <div className="weddingCollections sm:w-52 sm:min-w-52 sm:max-w-52 md:w-52 w-36">
          <img src="/assets/img3.1.jpg" className=' w-full rounded-[250px]' alt="" />
          <h3 className='text-center font-bold'>Wedding Collections</h3>
          </div>
        </div>

        {/* <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faBan}  size='3x' />
        <h3 className='font-bold'>NO RETURN</h3>
        <h3 className='font-bold'>NO REFUND</h3>
        <h3 className='font-bold'>NO EXCHANGE</h3>
        </div> */}
        
      </Slider>
    {/* <div className="category w-10/12 m-auto justify-between flex items-center">
      <div className="newArrival w-52 min-w-52 max-w-52">
       <Link to={'/newArrival'}> <img src="/assets/img12.1.jpg" className=' w-full rounded-[350px]' alt="" /></Link>
        <h3 className='text-center font-bold'>New Arrival</h3>
      </div>
      <div className="bestSeller w-52 min-w-52 max-w-52">
        <img src="/assets/img9.1.jpg" className=' w-full rounded-[250px]' alt="" />
        <h3 className='text-center font-bold'>Best Seller</h3>
      </div>
      <div className="summerCollections w-52 min-w-52 max-w-52"> 
        <img src="/assets/img5.1.jpg" className=' w-full rounded-[250px]' alt="" />
        <h3 className='text-center font-bold'>Summer Collections</h3>
      </div>
      <div className="weddingCollections w-52 min-w-52 max-w-52">
        <img src="/assets/img3.1.jpg" className=' w-full rounded-[250px]' alt="" />
        <h3 className='text-center font-bold'>Wedding Collections</h3>
      </div>
    </div> */}

    
    

    <div className='flex flex-wrap justify-center sm:gap-3 md:gap-3 gap-1 overflow-hidden w-full sm:m-2 md:m-2 mr-[5px]'>
        {filteredData.map(element => {
           return <Link to={'/descriptions'} key={element.id}  state={{ 
            id: element.id 
          }}
      ><Card  name={element.name} img = {element.img[0]} price = {element.price} /></Link> 
        })}
    </div>
    </div>
  )
}

export default Body
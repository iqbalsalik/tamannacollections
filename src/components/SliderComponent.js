import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faGift, faLock ,faMoneyCheckDollar,faTruckFast } from '@fortawesome/free-solid-svg-icons';

const SliderComponent = () => {
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };  

  return (  
      <Slider {...settings} className='sm:mx-40 md:mx-40 my-20 w-96 sm:w-auto md:w-auto m-auto '>
        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faLock} size='3x' />
        <h3 className='font-bold'>SECURE PAYMENT</h3>
        <p>100% Secure Payment</p>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faTruckFast} size='3x' />
        <h3 className='font-bold'>FREE DOMESTIC SHIPPING</h3>
        <p>Shipping World Wide</p>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faMoneyCheckDollar}  size='3x' />
        <h3 className='font-bold'>BEST  PRICE</h3>
        <p>Guaranteed Price</p>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faGift}  size='3x' />
        <h3 className='font-bold'>HANDCRAFTED WITH LOBE</h3>
        <p></p>
        </div>

        <div className='text-center text-slate-400 w-52  p-1 m-2 leading-9'>
        <FontAwesomeIcon icon={faBan}  size='3x' />
        <h3 className='font-bold'>NO RETURN</h3>
        <h3 className='font-bold'>NO REFUND</h3>
        <h3 className='font-bold'>NO EXCHANGE</h3>
        </div>
        
      </Slider>
  )
}

export default SliderComponent
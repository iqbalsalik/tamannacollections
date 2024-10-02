import React from 'react';

const Card = (props) => {
  return (
        <div className='text-center sm:w-72 md:w-72  w-44 text-slate-500 flex flex-col transition duration-300 hover:shadow-md hover:scale-105 hover:cursor-pointer' id={props.id}>
            <img src={`/assets/products/${props.img}.jpg`} className='sm:w-72 md:w-72 w-full flex-wrap sm:m-2 md:m-2 m-[5px] sm:h-96 md:h-96 h-64 ' alt="" />
            <h4>{props.name}</h4>
            <p>₹ {props.price}</p>
        </div>
  )
}

export default Card
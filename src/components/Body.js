import React from 'react';
import Card from './/Card'

import {shopData} from '../mockData'

const Body = () => {
  return (
    <>
    <select className='p-3 sm:text-start md:text-start text-center m-4 border border-slate-400 rounded-lg sm:w-96 size-full md:float-left md:float-left sm:mx-10 md:mx-10' >
    <option value="select your size">Select Your Size</option>
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
    <div className='flex flex-wrap justify-between overflow-hidden w-95vw m-auto'>
        {shopData.map(element => {
           return <Card key={element.id} name={element.name} img = {element.img[0]} price = {element.price} />
        })}
    </div>
    </>
  )
}

export default Body
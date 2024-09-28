import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {shopData} from '../mockData'
import SliderComponent from './SliderComponent';


const Details = () => {
    const location = useLocation()
    const {id} = location.state;
    const product = shopData[id-1];
    const [mainImage, setMainImage] = useState(product.img[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handlePlusQuantity = ()=>{
        setQuantity(quantity+1)
    }
    const handleMinuQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div>
            <div className='w-full m-auto sm:m-10 md:m-10 flex flex-col md:flex-row sm:flex-row'>
                <div className="img flex flex-col sm:w-6/12 md:w-6/12 w-full p-5">
                    <div className="mainImg w-full rounded-md ">
                        <img className='rounded-lg' src={`/assets/products/${mainImage}.jpg`} alt="" />
                    </div>
                    <div className="otherImg flex gap-1 flex-wrap justify-around w-full mt-5 ">
                        {product.img.map(item=> <img className='w-[20%] rounded-md' src={`/assets/products/${item}.jpg`} alt="" onClick={() => setMainImage(item)} /> )}
                    </div>
                </div>

                <div className="details w-full text-slate-400 sm:p-5 md:p-5 p-2">
                    <h2 className='text-2xl m-5'>{product.name}</h2>
                    <p className='text-2xl m-5'>₹ {product.price}</p>
                    {
                    product.size ? (
                        <div className='m-5'>
                        <p className='text-xl'>SIZE:</p>
                        <div className='flex flex-wrap gap-3 w-7/12'>
                        {product.size.map((size) => (
                            <div key={size}>
                            <input
                                type="radio"
                                id={size}
                                name="size"
                                value={size}
                                // checked={selectedSize === size}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            />
                            <label htmlFor={size} className="text-lg ml-1">{size}</label>
                            <br />
                            </div>
                        ))}
                        </div>
                        </div>
                    ) : (
                        <></>
                    )
                    }
                    <div className='m-5'>
                        <p className='text-lg mb-2'>Quantity: </p>
                        <div className='border border-slate-400 pl-1 pr-1 pt-1 pb-1 flex justify-between w-2/12'>
                            <p onClick={handleMinuQuantity} className="font-bold text-2xl cursor-pointer">-</p>
                            <p className="font-bold text-2xl">{quantity}</p>  
                            <p onClick={handlePlusQuantity} className="font-bold text-2xl cursor-pointer">+</p>
                        </div>
                    </div>
                    
                    <button className='sm:w-4/12 md:w-4/12 w-10/12 m-5 p-2 bg-slate-400 text-white'>BUY NOW</button>
                </div>
            </div>
            <div className=' text-slate-400 sm:w-9/12 md:w-9/12 w-10/12 sm:m-auto md:m-auto m-5'>
                <p className='text-center font-bold text-lg mb-2'>DESCRIPTION</p>
                <div className='border border-slate-400'>
                    <div className='flex justify-start'>
                        <p className='w-4/12 text-lg p-2 border border-slate-400'>FABRIC</p>
                        <p className='w-8/12 text-lg p-2 border border-slate-400'>{product.fabric}</p>
                    </div>
                    <div className='flex justify-start'>
                        <p className='w-4/12 text-lg p-2 border border-slate-400'>CARE</p>
                        <p className='w-8/12 text-lg p-2 border border-slate-400'>DRY CLEAN ONLY</p>
                    </div>
                    <div className='flex justify-start'>
                        <p className='w-4/12 text-lg p-2 border border-slate-400'>Disclaimer</p>
                        <p className='w-8/12 text-lg p-2 border border-slate-400'>{product.description}</p>
                    </div>
                </div>
            </div>
            < SliderComponent />
        </div>
    )
}

export default Details;
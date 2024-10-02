import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {shopData} from '../mockData';
import SliderComponent from './SliderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Details = () => {
    const location = useLocation()
    const {id} = location.state;
    const product = shopData[id-1];
    const [mainImage, setMainImage] = useState(product.img[0]);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showBuyNow, setShowBuyNow] = useState(false);

    const Razorpay = window.Razorpay;

    const handlePlusQuantity = ()=>{
        setQuantity(quantity+1)
    }
    const handleMinuQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1)
        }
    };

    let imgToShow = 0;

    const handleShowBuyNow = () => {
        setShowBuyNow(!showBuyNow);
    }

    const handleBuyProduct = async() => {

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        if(!fullName || !email || !phoneNumber || !address){
            alert("Please Fill All the Details Correctly");
            return
        }

        const res = await fetch('http://localhost:3000/buyProduct',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },            
            body: JSON.stringify({
                product:product,
                size: product.size? selectedSize:"",
                quantity:quantity,
                userDetails : {
                    name: fullName,
                    email:email,
                    phone:phoneNumber,
                    address: address
                }
            })
        })
        const result = await res.json()
        handleShowBuyNow()
        let option = {
            key: result.key_id,
            order_id: result.order.id,
            handler: async function (result) {
                const r = await fetch(
                  "http://localhost:3000/paymentVerification",
                  {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },                    
                    body: JSON.stringify({
                        order_id: option.order_id,
                        payment_id: result.razorpay_payment_id,
                        signature: result.razorpay_signature
                      })
                  }
                );
                alert(
                    `Payment Successful! \n` +
                      `Payment ID: ${result.razorpay_payment_id} \n` +
                      `Save this information for future reference.`
                  );
            
              },
          };
            const rzp1 = new Razorpay(option);
            rzp1.open();

            rzp1.on("payment.failed", async function (response) {
                await fetch(
                "http://localhost:3000/updateFailureTransactionStatus",
                {
                    method:"POST",
                    body:JSON.stringify({
                        order_id: option.order_id,
                    })
                }
                );
                alert("Payment Failed!!");
            });
    }

    const handleNextMainImg = () => {
        imgToShow = product.img.indexOf(mainImage)+1;
        if(imgToShow>=product.img.length){
            imgToShow = 0;
        }
        setMainImage(product.img[imgToShow]);
    }
    const handlePrevMainImg = () => {
        imgToShow = product.img.indexOf(mainImage)-1;
        if(imgToShow<0){
            imgToShow = product.img.length-1
        }
        setMainImage(product.img[imgToShow]);
    }

    return (
        <div>
            <div className='w-full m-auto sm:m-10 md:m-10 flex flex-col md:flex-row sm:flex-row'>
                <div className="img flex flex-col sm:w-6/12 md:w-6/12 w-full p-5">
                    <div className="mainImg w-full rounded-md relative ">
                        <img className='rounded-lg' src={`/assets/products/${mainImage}.jpg`} alt="" />
                        <p className='absolute bg-slate-200 p-2 cursor-pointer  left-2 top-2/4' onClick={handlePrevMainImg}> <FontAwesomeIcon icon={faChevronLeft} /> </p>
                        <p className='absolute bg-slate-200 p-2 cursor-pointer right-2 top-2/4' onClick={handleNextMainImg}> <FontAwesomeIcon icon={faChevronRight} /> </p>
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
                    
                    <button onClick={handleShowBuyNow} className='sm:w-4/12 md:w-4/12 w-10/12 m-5 p-2 bg-slate-400 text-white'>BUY NOW</button>
                    {/* {showBuyNow && (
                        <BuyNow
                        product={product}
                        quantity={quantity}
                        size = {selectedSize}
                        onClose={() => setShowBuyNow(false)}
                        />
                    )} */}
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
            {showBuyNow && (
                        <div className="modal sm:w-10/12 md:10/12 w-11/12 h-screen shadow-xl fixed top-5 z-10 sm:left-28 md:left-28 left-3 flex flex-col bg-slate-500 rounded-lg">
                        <label htmlFor="fullName" className='font-bold text-lg p-5 mx-auto'>Enter Your Full Name: </label>
                        <input type="text" placeholder="Your Name" id="fullName" className='p-5 sm:w-7/12 md:w-7/12 w-10/12 border border-white mx-auto rounded-lg' />
                        <label htmlFor="email" className='font-bold text-lg p-5 mx-auto'>Your Email:</label>
                        <input type="email" placeholder="Email" id="email" className='p-5 sm:w-7/12 md:w-7/12 w-10/12 border border-white mx-auto rounded-lg'/>
                        <label htmlFor="phoneNumber" className='font-bold text-lg p-5 mx-auto'>Phone Number:</label>
                        <input type="number" placeholder="Phone Number" id="phoneNumber" className='p-5 sm:w-7/12 md:w-7/12 w-10/12 border border-white mx-auto rounded-lg' />
                        <label htmlFor="address" className='font-bold text-lg p-5 mx-auto'>Full Adress: </label>
                        <input type="text" placeholder="Full Adress" id="address" className='p-5 sm:w-7/12 md:w-7/12 w-10/12 border border-white mx-auto rounded-lg' />
                        <button className='p-5 sm:w-4/12 md:w-4/12 w-7/12 hover:bg-slate-300 border border-white mx-auto my-3 rounded-lg' onClick={handleBuyProduct} >Place Order</button>
                        <button className='border border-white py-2 px-3 hover:bg-slate-300 font-bold text-lg text-white absolute top-3 right-3' onClick={handleShowBuyNow}>X</button>
                        </div>
                    )}
            
            < SliderComponent />
        </div>
    )
}

export default Details;
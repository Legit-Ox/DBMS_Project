import React,{ useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
const Cart = () => {
  const [quantity,setQuantity] = useState(1);

  const handleDecrement = () =>{
    if(quantity > 1){
      setQuantity(prevCount => prevCount - 1);
    }
  }

  const handleIncrement = () =>{
    if(quantity<20){
      setQuantity(prevCount => prevCount + 1);
    }
  }

  return (
    <div className='w-full bg-gray-100 py-8 px-4'>
      <div className="flex-col justify-start mx-2 my-auto">
        <h1 className="text-[#303030] text-6xl mx-3">Cart</h1>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>Item</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>Price</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>Quantity</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>sub-total</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>Remove</div>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className='mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center'>Margherita</div>
        <div className='mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center'>&#x20B9; 200</div>
        <div className='mx-1 my-auto justify-self-center input-group w-32'>
        <button type="button" onClick={handleDecrement} className="input-group-text bg-gray-500">-</button>
              <div className="form-control text-center">
                {quantity}
              </div>
              <button type="button" onClick={handleIncrement} className="input-group-text bg-gray-500">+</button>
          </div>
        <div className='mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center'>&#x20B9; 400</div>
        <div className='mx-1 my-auto justify-self-center'><AiFillDelete size={23} color="red-800"/></div>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>Total</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'></div>  
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>2</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'>&#x20B9; 400</div>
        <div className='mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center'></div>
      </div>
    </div>
  )
}

export default Cart
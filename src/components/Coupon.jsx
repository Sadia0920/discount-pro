import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

export default function Coupon({info}) {
    const {couponCode,description,expiry_date,condition,coupon_type}=info
    const [copy,setCopy]=useState(false)

    const handleCopy = () => {
        setCopy(true);
        toast.success(`Successfully Copy the code`,{
            position:'top-center'
         })
        setTimeout(() => setCopy(false), 2000);
    }
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body text-center text-gray-500 font-semibold">
        <h2 className="text-xl font-bold text-center text-gray-800">{couponCode}</h2>
        <p>{description}</p>
        <p className=' text-gray-800'>Expiry Date: </p>
        <span className='text-gray-500'>{expiry_date}</span>
        <p className=' text-gray-800'>Condition: <span 
        className='text-gray-500'>{condition}</span></p>
        <p className=' text-gray-800'>Type: <span 
        className='text-gray-500'>{coupon_type}</span></p>
        
        <div className="card-actions justify-center">
       <CopyToClipboard text={couponCode} onCopy={handleCopy}>
       <button className="btn btn-primary">Copy Code</button>
       </CopyToClipboard>
        </div>
  </div>
</div>
    </div>
  )
}

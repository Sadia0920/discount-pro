import { useState } from "react"
import Rating from "react-rating"
import Coupon from "./Coupon";

export default function CouponDetails({item}) {

    const {brand_name,rating,description,brand_logo,isSaleOn,coupons,shop_Link} = item
    const [addRating,setAddRating]=useState(0);

    return (
        <div>
        <div className="border-2 border-gray-300 card items-center w-6/12 mx-auto bg-base-100 shadow-xl py-8 px-20 my-5">
        <div>
        <div className="card-body lg:py-5 items-center">
          <h2 className="text-3xl font-bold text-center">{brand_name}</h2>
        </div>
        <figure>
          <img
            className='w-full h-[200px] rounded-lg'
            src={brand_logo}
            alt="Brand Logo" />
        </figure>
        <div className="flex items-center my-3 justify-center">
        <h3  className='text-lg font-semibold'>Rating:</h3>
            <div className='flex items-center ml-2'>
            <Rating
              className='text-yellow-300'
              initialRating={rating}
              onChange={(rating) => setAddRating(rating)}
              emptySymbol = "fa-regular fa-star"
              fullSymbol = "fa-solid fa-star"
              />
              <p className='ml-2 font-semibold'>{rating} Stars</p>
            </div>
        </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {coupons.map(info => <Coupon info={info}></Coupon>)}
        </div>
        
        <div className="card-actions flex-col justify-center items-center mt-6">
            <a href={shop_Link} target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Use Now</a>
          </div>
      </div>
          </div>
        )
}

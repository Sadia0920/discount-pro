import { useContext, useState } from "react"
import Rating from "react-rating"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function AllBrandsInfo({item}) {
    const {_id,brand_name,rating,description,brand_logo,isSaleOn} = item
    const [addRating,setAddRating]=useState(0);
    const {user} = useContext(AuthContext)

  return (
  <div>
  <div className="border-2 border-gray-300 card items-center lg:card-side bg-base-100 shadow-xl py-8 px-20 my-5">
  <div>
  <figure>
    <img
      className='w-full h-[200px] rounded-lg'
      src={brand_logo}
      alt="Brand Logo" />
  </figure>
  <h4 className='text-xl font-bold text-center lg:text-left my-4'>{brand_name}</h4>
  <h3  className='text-lg font-semibold mt-2'>Rating:</h3>
      <div className='flex items-center mb-2'>
      <Rating
        className='text-yellow-300'
        initialRating={rating}
        onChange={(rating) => setAddRating(rating)}
        emptySymbol = "fa-regular fa-star"
        fullSymbol = "fa-solid fa-star"
        />
        <p className='ml-3 font-semibold'>{rating} Stars</p>
      </div>
  </div>
  <div className="card-body lg:py-20 items-center">
    <h2 className="text-3xl font-bold text-center">{brand_name}</h2>
    <p className='text-gray-500 text-lg font-bold text-center'>{description}</p>
  </div>
  <div className="card-actions flex-col justify-center items-center">
      {
        user?
        <>
          <NavLink to={`/brand/${_id}`}><button className="btn btn-primary">View Coupons</button></NavLink>
        </>
        :
        <>
           <NavLink to='/login'><button className="btn btn-primary">View Coupons</button></NavLink>
        </>
      }
     
     <div>
     {
        isSaleOn && <>
        <p className='text-red-700 font-bold'>Sale is on !!</p>
        </>
      }
     </div>
    </div>
</div>
    </div>
  )
}

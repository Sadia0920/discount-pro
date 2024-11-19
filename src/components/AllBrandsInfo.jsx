export default function AllBrandsInfo({item}) {
    const {brand_name,rating,description,brand_logo,isSaleOn} = item
  return (
  <div>
  <div className="card items-center lg:card-side bg-base-100 shadow-xl py-8 px-20 my-5">
  <div>
  <figure>
    <img
      className='w-full h-[200px] rounded-lg'
      src={brand_logo}
      alt="Brand Logo" />
  </figure>
  <h4 className='text-xl font-bold text-center my-4'>{brand_name}</h4>
  <p className='text-gray-500 text-lg font-bold text-center'>Rating: {rating}</p>
  </div>
  <div className="card-body lg:py-20 items-center">
    <h2 className="text-3xl font-bold text-center">{brand_name}</h2>
    <p className='text-gray-500 text-lg font-bold text-center'>{description}</p>
  </div>
  <div className="card-actions flex-col justify-center items-center">
      <button className="btn btn-primary">View Coupons</button>
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

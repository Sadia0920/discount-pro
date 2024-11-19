export default function BrandsOnSale({item}) {
    const {brand_name,brand_logo,coupons,isSaleOn,category} = item

    return (
      <div>
       {
       isSaleOn && <>
       <div className="card bg-base-100  shadow-xl">
  <figure className="px-7 pt-7 ">
    <img
      src={brand_logo}
      alt="brand"
      className="rounded-xl w-[300px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-bold">{brand_name}</h2>
    <p className=" text-gray-500 text-lg font-semibold">Available Coupons: {coupons.length}</p>
    <p className="text-xl font-bold">{category}</p>
  </div>
</div>
    </>
   
}
</div>
    )
}

import { Link } from "react-router-dom"


export default function TopBrands({item}) {
    const {brand_logo}=item
    return (
      <div>
        <Link><img className='w-[90px] ml-8' src={brand_logo} alt="" /></Link>
      </div>
    )
  }
  
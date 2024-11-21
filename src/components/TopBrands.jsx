import { useNavigate } from "react-router-dom"

export default function TopBrands({item}) {
    const {brand_logo}=item
    const navigate = useNavigate();
    const handleGoBrands = () => {
      navigate('/brands')
    }
    return (
      <div>
        <a onClick={handleGoBrands}><img className='w-[90px] ml-8' src={brand_logo} alt="" /></a>
      </div>
    )
  }
  
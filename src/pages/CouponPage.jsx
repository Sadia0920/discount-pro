import { useLoaderData } from "react-router-dom";
import CouponDetails from "../components/CouponDetails";

export default function CouponPage() {
    const couponData = useLoaderData()
  return (
    <div>
        {
        couponData.map(item => <CouponDetails key={item._id} item={item}></CouponDetails>)
      }
    </div>
  )
}

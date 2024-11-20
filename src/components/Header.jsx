import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"

export default function Header() {

  const {user} = useContext(AuthContext)
  return (
    <div className='w-11/12 mx-auto text-center py-7'>
        <h2 className='text-xl font-semibold'>Hello {user.displayName}, Welcome to Discount Pro!</h2>
        <p className='text-lg font-semibold text-gray-400'>Explore exclusive deals and start saving on your favorite brands today!</p>
    </div>
  )
}

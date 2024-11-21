import { useContext } from 'react'
import bg from '../assets/bg-profile.jpg'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'

export default function MyProfile() {
  const{user}=useContext(AuthContext)
  return (
    <div className='mt-8 mb-64 md:mb-80 lg:mb-96'>
      <img
      className='w-10/12 lg:w-9/12 mx-auto h-[400px] rounded-2xl relative'
      src={bg} alt="" />
      <h1 className='text-3xl md:text-5xl text-blue-800 font-bold absolute -mt-80 ml-[140px] md:ml-[260px] lg:ml-[550px]'>Welcome</h1>
     <div className="card bg-base-100 w-64 md:w-96 shadow-xl absolute -mt-60 ml-[80px] md:ml-[190px] lg:ml-[480px]">
  <figure className="px-5 pt-5">
    <img
      src={user.photoURL}
      alt="User"
      className="rounded-xl" />
  </figure>
  <div className="card-body pt-0 items-center text-center">
    <h2 className="card-title text-2xl">{user.displayName}</h2>
    <p className='text-gray-600 font-semibold my-5'>{user.email}</p>
    <div className="card-actions ">
      <Link to='/updateInfo'><button className="btn btn-primary">Update</button>
      </Link>
  </div>
  </div>
  </div>
  </div>
  )
}

import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { RiCoupon3Fill } from 'react-icons/ri'
import Header from './Header'
import { TbBrandBinance, TbHome, TbUserCircle} from 'react-icons/tb'
import { VscWorkspaceUnknown } from 'react-icons/vsc'
import { AuthContext } from '../provider/AuthProvider'

export default function Navbar() {
  const {setUser,user,signOutUser}=useContext(AuthContext)

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log('signOut Done')
      setUser(null)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

    const links = <>
      <NavLink className='text-gray-400 text-lg font-semibold flex items-center' to='/'>
      <TbHome></TbHome>
       <p>Home</p>
       </NavLink>

      <NavLink to='/brands' className='flex items-center lg:ml-5 text-gray-400 text-lg font-semibold'>
      <TbBrandBinance></TbBrandBinance>
      <p> Brands </p>
      </NavLink>
    
      <NavLink className='flex items-center lg:ml-5 text-gray-400 text-lg font-semibold' to='/about'>
      <VscWorkspaceUnknown></VscWorkspaceUnknown>
      <p>About Dev</p>
      </NavLink> 

      <NavLink className='flex items-center lg:ml-5 text-gray-400 text-lg font-semibold' to='/coupon'>
      <VscWorkspaceUnknown></VscWorkspaceUnknown>
      <p>Coupon</p>
      </NavLink> 
    
      {
        user && <>
        <NavLink className='flex items-center lg:ml-5 text-gray-400 text-lg font-semibold' to='/myProfile'>
      <TbUserCircle></TbUserCircle>
      <p>My Profile</p>
      </NavLink>
        </>
      }
    
    </>
  return (
  <div>
    {
      user && <Header></Header>
    }
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center justify-center'>
    <div className='md:ml-0 ml-5 text-xl md:text-2xl text-blue-800'><RiCoupon3Fill></RiCoupon3Fill></div>
    <a className="pl-2 btn btn-ghost text-xl md:text-2xl font-bold text-blue-600">Discount PRO</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end md:flex-row md:ml-0 ml-8 flex-col">
    {
      user? <>
      <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
      <p className='mx-2'>{user.email}</p>
      <Link onClick={handleSignOut} className="btn bg-blue-500 text-white font-semibold md:mr-3">LogOut</Link>
      </>
       :
      <>
      <Link to='/register' className="btn bg-blue-500 text-white font-semibold md:mr-3">Register</Link>
    <Link to='/login' className="btn bg-blue-500 text-white px-7 font-semibold ">Login</Link>
      </>
    }
    </div>
    </div>
    </div>
  )
}

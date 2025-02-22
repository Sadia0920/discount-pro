import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  return (
    <div>
        <div className='w-11/12 mx-auto py-5'>
        <Navbar></Navbar>
        </div>
        <div className="min-h-[calc(100vh-330px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  )
}

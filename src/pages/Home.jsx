import React from 'react'
import Banner from '../components/banner'
import TopBrands from '../components/TopBrands'
import { useLoaderData } from 'react-router-dom'
import Marquee from 'react-fast-marquee';


export default function Home() {
  const couponData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto my-9">
        <h1 className='text-center text-4xl font-bold mb-4'>Leading Brands You Love</h1>
        <p className='text-center mb-9 text-lg font-semibold text-gray-400'>Discover the latest trends</p>
        <div className='flex items-center bg-base-200 p-3'>
          <Marquee pauseOnHover={true}>
        {
          couponData.map(item => <TopBrands key={item._id} item={item}></TopBrands>)
        }
        </Marquee>
        </div>
      </div>
      
    </div>
  )
}

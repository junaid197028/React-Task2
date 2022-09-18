import React from 'react'
import Img from '../Assest/images/hero1.png'

function hero() {
  return (
    <section className='bgggg text-white  w-11/12 mr-auto ml-auto lg:w-full' > 
      <div className='flex gap-x-6 w-[73%] mr-auto ml-auto pb-16 pt-20 md:flex-col md:pt-5'>
        <div className=' w-2/4 lg:w-full md:text-center'>
          <h1 className='text-4xl font-black pb-6 xl:text-xl lg:text-lg lg:pb-2' >Powerful email features, an AI voice assistant, and intuitive gestures. </h1>
          <p>All available in Boomerang for iPhone.</p>
          <button className='py-3  outline-none rounded-md  px-8 bg-[#f22e06] font-semibold tracking-normal  text-white text-center mt-7 text-sm lg:mt-4'>Get Boomerang on iOS</button>
        </div>
        <div className='w-2/4 lg:w-full'><img className='w-full h-full' src={Img} alt='pict' /></div>
      </div>
    </section>
  )
}

export default hero

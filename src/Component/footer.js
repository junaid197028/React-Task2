import React from 'react'
import Img from '../Assest/images/footer1.png'
import Img1 from '../Assest/images/footer2.png'

function footer() {
  return (
      <section className='w-full bg-[#0774c7] mt-28 text-white '>
      <div className='w-[77%] mr-auto ml-auto grid md:w-[90%]'>
        <div className='py-6 flex justify-between items-center'>
            <div><img src={Img}/></div>
            <div className='flex gap-x-7 items-center md:gap-x-3'>
                <div className=' bg-white rounded-xl p-2 mt-6'> 
                          <div className='text-2xl '><span className='text-blue-600'>G</span><span className='text-orange-600'>o</span><span className='text-yellow-600'>o</span><span className='text-blue-300'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span> <span className='text-gray-500'>Cloud</span></div>
                <div>  <p className='text-gray-500 text-[13px]'>Premier partner</p></div>
                </div>
                <div className='h-16 sm:hidden'><img className='w-full' src={Img1}/></div>
            </div>
        </div>
        <hr/>
        <div className='py-6'>
            <div className='flex justify-between md:text-xs'>
                  <div className='opacity-[0.7]'> © 2016-2022 Baydin, Inc.</div>
                  <div>
                    <ul className='flex  gap-x-8'>
                        <li className='hover:cursor-pointer'>Home</li>
                        <li className='hover:cursor-pointer'>Pricing</li>
                        <li className='hover:cursor-pointer'>About</li>
                    </ul>
                  </div>
            </div>
            <p className='pt-5 opacity-[0.7] md:text-xs'>Gmail is a registered trademark of Google. We are not affiliated with Google or Gmail, but we are happy to be part of their ecosystem! Boomerang for Gmail's use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
        </div>
      </div>
    </section>
  )
}

export default footer 
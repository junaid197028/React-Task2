import React from 'react'
import Img from '../Assest/images/iphones.png'

function iphoneBox() {
  return (
      <section className='w-[74%] bg-[#0774c7] mr-auto ml-auto rounded-2xl xl:w-[80%] lg:w-[95%] gl:w-[80%]'>
        <div className='w-[90%] mr-auto ml-auto flex gap-x-6 py-12 text-white lg:gap-x-1 lg:py-3 gl:grid'>
            <div className='w-2/4 pt-10 gl:w-full gl:text-center'> 
                  <h3 className='text-2xl font-black pb-6 lg:pb-2 sm:text-xl'>One app. Countless applications.</h3>
                  <p className='opacity-[0.8] '>There are many email clients, calendar apps, and voice assistants. But only Boomerang for iPhone unifies these functionalities in a seamless way, helping you achieve peaceful productivity.</p>
                <div className='opacity-[0.8] pt-6 grid justify-center lg:pt-2'>
                      <li>There are many email clients, calendar <br/> apps, and voice assistants.There are many <br/> email clients, calendar .</li>
                      <li className='py-4 lg:py-2'>There are many email clients, calendar <br/> apps, and voice assistants.There are many <br/> email clients, calendar .</li>
                      <li>There are many email clients, calendar <br/> apps, and voice assistants.There are many <br/> email clients, calendar .</li>

                </div>
           </div>
           <div className='w-2/4 gl:w-[65%] gl:mr-auto gl:ml-auto'>
                <img className='w-full' src={Img}  alt=''/>
           </div>
        </div>
    </section>
  )
}

export default iphoneBox

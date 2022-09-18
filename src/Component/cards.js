import React from 'react'
import Img from '../Assest/images/card1.png'  

function cards() {
  return (
    <section className='w-[74%] mr-auto ml-auto my-10'>  
        <div className='w-full grid grid-cols-3 gap-x-7 lg:grid-cols-2 lg:gap-7 sm:grid-cols-1'>
           <div className=' bg-[#F2F4F6] rounded-lg p-4'>
                 <div className=' '> 
                     <div> <img className='rounded-t-lg gl:w-full' src={Img} alt='picture'/></div>
                     <div className='bg-gray-400 opacity-[0.8] py-2 px-5 rounded-b-lg relative'>
                       <p>Re: Label work</p>
                       <p className='text-sm'>Adam Qamrtan</p>
                       <p className='text-sm'>Yes that works....no problem no </p>
              <div className='bg-white font-semibold absolute top-1  right-2 p-2 rounded-md opacity-[3.05]'><i>Hey Boomerang!</i></div>
                     </div>
                 </div>
                 <div>
            <h1 className='text-[20px] font-bold pt-4 pb-2 xl:text-[18px]'>Complete tedious tasks with simple voice commands</h1>
                    <p className='text-sm'>Have to reschedule all your afternoon meetings? Need to find a client's phone number buried in an email thread? Boomerang's voice assistant gets the job done quickly and easily, hands-free.</p>
         

                 </div>
          </div>
        <div className=' bg-[#F2F4F6] rounded-lg p-4'>
          <div className='p-4 bg-[#301b98] text-white  rounded-md'>
            <div className='border-t-[1px] border-white  pt-1 flex items-center justify-between gap-x-6  xl:gap-x-0'><p className='text-[12px] xl:text-[10px]'>TURN ON AUTO-RESPONDER</p> <p className='text-3xl'><ion-icon name="toggle"></ion-icon></p> </div>
            <div className='border-t-[1px]  border-white   flex items-center justify-between gap-x-6      xl:gap-x-0'><p className='text-[12px] xl:text-[10px]'>TURN ON AUTO-RESPONDER</p> <p className='text-3xl text-blue-500 '><ion-icon name="toggle"></ion-icon></p> </div>
            <div className='border-t-[1px] border-white  pt-1 flex items-center justify-between gap-x-6  xl:gap-x-0 col-start-3 col-end-4'><p className='text-[12px] xl:text-[10px]'>TURN ON AUTO-RESPONDER</p> <p className='text-3xl text-blue-500 '><ion-icon name="toggle"></ion-icon></p> </div>
          </div>  
          <div>
            <h1 className='text-[20px] font-bold pt-4 pb-2 xl:text-[18px]'>Achieve peaceful productivity and reach Inbox Zero</h1>
            <p className='text-sm'> Pause your Inbox to prevent new emails from coming in so you can focus on what needs to get done. Boomerang also helps you clear out your Inbox by letting you snooze emails so they reappear in your Inbox only when you need them.</p>
          </div>
        </div>
        <div className=' bg-[#F2F4F6] rounded-lg p-4'>
          <div className=' rounded-md bg-gray-400'>
            <div className='w-11/12 mr-auto ml-auto'>
              <div className='bg-[#F78306] flex justify-between item-center text-white py-1 px-2'>
                <div className='text-sm xl:text-xs'> <p>Not very likely <span className='text-xs xl:text-[8px]'>to receive a response</span> </p></div> 
                <div className='opacity-[0.5]'><ion-icon name="close"></ion-icon></div>
              </div>
              <div className='bg-white text-black border-b-[1px] border-black font-bold'>
                <div className='flex justify-between px-2 pt-2 pb-1 items-center'>
                   <div className='flex items-center '>
                     <div className='text-sm xl:text-xs'>Subject Length </div>
                     <div className='pt-[3px] opacity-[0.5]'><ion-icon name="help-circle-outline"></ion-icon></div>
                   </div>
                  <div className='relative bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 ... h-[16px] w-[94px] rounded-md xl:w-16'>
                    <div className='bgg text-[10px] font-bold absolute -top-1 -left-1 text-center'>1</div>  
                  </div>
                  
                </div>
                <div className='flex justify-between px-2 pt-2 pb-1 items-center border-y-[1px] border-black'>
                  <div className='flex items-center '>
                    <div className='text-sm xl:text-xs'>Word count </div>
                    <div className='pt-[3px] opacity-[0.5]'><ion-icon name="help-circle-outline"></ion-icon></div>
                  </div>
                  <div className='relative bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 ... h-[16px] w-[94px] rounded-md xl:w-16'>
                    <div className='bgg text-[10px] font-bold absolute -top-1 -left-1 text-center'>29</div>
                  </div>

                </div>
                <div className='flex justify-between px-2 pt-2 pb-1items-center'>
                  <div className='flex items-center '>
                    <div className='text-sm xl:text-xs'>Question </div>
                    <div className='pt-[3px] opacity-[0.5]'><ion-icon name="help-circle-outline"></ion-icon></div>
                  </div>
                  <div className='relative bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 ... h-[16px] w-[94px] rounded-md '>
                    <div className='bgg text-[10px] font-bold absolute -top-1 -left-1 text-center'>0</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-[20px] font-bold pt-4 pb-2 xl:text-[18px]'>Access your favorite Boomerang features on the go</h1>
            <p className='text-sm'>Millions of people have used Boomerang to schedule and snooze emails since 2010. All your favorite Boomerang features, including Boomerang's AI Assistant Respondable and the newest Inbox Pause feature, are built into Boomerang for iPhone.</p>
           </div>
        </div>
        </div>
      <div className='flex justify-center'>  <button className='py-3 px-16 rounded-md bg-[#f22e06] font-bold tracking-[1px]  text-white text-center mt-12 sm:px-2'>Get Boomerang on iOS</button>
        </div>
    </section>
  )
}

export default cards
 import React from 'react'
 import Logo1 from '../Assest/images/logo2.png'
 import Logo2 from '../Assest/images/logo3.png'
 import Logo3 from '../Assest/images/logo4.png'

 function herotext() {
   return (
     <section>
       <div className='w-[45%] mr-auto ml-auto mt-12 xl:w-[55%] lg:w-[65%] md:w-[80%] sm:w-[93%] sm:text-center'>
               <h1 className='font-bold leading-10 text-[28px] pb-6 lg:text-2xl md:text-xl'>Boomerang's iPhone email app brings industry-standard features like send later, snooze, and Inbox Pause to iOS. But that's just the beginning.</h1>
               <p>Our email app also features a powerful voice assistant to let you quickly clear your schedule, retrieve important information from your Inbox, and more. And when you're not hands-free, an innovative gesture system helps you quickly get through your email so you can focus on the things that matter.</p>
            <div className='flex  justify-center gap-x-7 py-16'>
                <div><img src={Logo1} alt='picture'/> </div>
                <div><img src={Logo2} alt='picture'/> </div>
                <div><img src={Logo3} alt='picture'/> </div>
            </div>
       </div>

     </section>
   )
 }
 
 export default herotext
 
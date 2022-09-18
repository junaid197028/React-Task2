import React from 'react'
import Logo from '../Assest/images/headerLogo.png'

function header() {
  return (
    <section>
          <div className='flex gap-x-3 py-6 pl-32 shadoww w-full md:justify-center md:pl-0 '>
            <div><img src={Logo} alt='' /></div>
            <div><span className='font-bold'>Boomerange</span> for Gamil</div>
        </div>
    </section>
  )
}

export default header 
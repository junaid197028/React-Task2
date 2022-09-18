import React from 'react'
import  Header from './Component/header'
import Hero from './Component/hero'
import Herotext from './Component/herotext'
import Iphone from './Component/iphonebox'
import Cards from './Component/cards'
import Footer from './Component/footer'

export default function App() {
  return (
    <section className=' font-owwn max-w-[1426px] mr-auto ml-auto'> 
       <Header/>
       <Hero/>
      <Herotext/>
      <Iphone/>
      <Cards/>
      <Footer/> 
      
    </section>
  )
}

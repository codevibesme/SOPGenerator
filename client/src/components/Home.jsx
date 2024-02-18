import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
const Home = () => {
  return (
    <main className='relative w-full h-full '>
        {/* <Nav /> */}
        <section className= " wide:padding-r ">
            <Hero/>
        </section>
        <section className='sm:px-16 px-8 sm:py-24  bg-[#F4EEEE]'>
            <About />
        </section>
        <section className='p-10 bg-[#C5DFF8] shadow-lg shadow-slate-500 '>
            <Contact />
        </section>
        <section className='bg-[#00428a] padding-x padding-t pb-8 '>
            <Footer />
        </section>
    </main>
  )
}

export default Home
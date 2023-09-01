import React from 'react'

const About = () => {
  return(
  <section id='about' className='max-container'>
      <h3 className='text-center text-4xl font-bold font-montserrat text-[#0E21A0]'>
        About Us
      </h3>
      <h2 className='text-center text-2xl ont-semibold font-montserrat pt-4'>Why Choose Us?</h2>
      <p className='m-auto mt-4 max-w-lg font-serif f text-black text-center info-text'>
      We pride ourselves in helping customers achieve their immigration dreams.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        <img src='https://effizient.ca/assets/img/about-img.svg' alt='about' height={610} width={400} />
      </div>
      </section>)
}

export default About
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='max-container '>
    
      <div className='w-full h-full flex flex-col'>
        <h1 className='text-4xl text-center font-bold font-palanquin text-[#0E21A0] mb-12'>Contact Us</h1>
        <form className='flex flex-col w-full md:w-2/3  min-h-fit mx-auto p-5 md:p-10 bg-white rounded-xl shadow-lg shadow-blue-500'>
          <div className='flex w-full min-h-fit mb-4'>
            <input placeholder='Your Name' className='text-lg rounded-lg h-10 w-1/2 me-10 border focus:outline-none px-6'/>
            <input placeholder='Email' className='text-lg rounded-lg h-10 w-1/2 border focus:outline-none px-6'/>
          </div>
          <input placeholder='Your Subject' className='text-lg rounded-lg h-10 w-full me-10 border focus:outline-none px-6 mb-4'/>
          <textarea className="form-control border text-lg rounded-lg p-4 mb-6" name="message" rows="5" data-rule="required" required="" minlength="10" data-msg="Please write something for us" placeholder="Message"></textarea>
          <button type="submit" className='text-white bg-gradient-to-tr from-blue-400 to-blue-950 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-blue-700/80 mx-auto'>Submit your details</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact
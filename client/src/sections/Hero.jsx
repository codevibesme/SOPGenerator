import Button from "../components/Button";
import { bigcanada } from "../assets/images";
import Nav from "../components/Nav";
const Hero = () => {
  
  return (
    <section className="w-full min-h-screen bg-hero bg-cover bg-center">
    <Nav />
     <div className='w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen '
  >
    
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x '>
        <p className='text-xl font-montserrat text-[#007bff]'>
        Unlock Canadian Immigration Success
        </p>

<h1 className='mt-10 font-sans text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold '>
  <span className='xl:whitespace-nowrap relative z-10 pr-10'>
    Explore Our New 
  </span>
  <br />
  <span className='text-[#007bff] inline-block mt-3'>SOP</span> Generator
</h1>
<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
Elevate Canada immigration applications with precision using our SOP generator
</p>

<Button label='Generate SOP'  />
</div>
<div className='relative flex-1 flex justify-end items-center xl:min-h-screen max-xl:py-40 bg-primary  bg-cover bg-center'>
        <img
          src={bigcanada}
          alt='canada'
          width={610}
          height={502}
          className='object-contain relative z-10 rounded-t-full rounded-b-full'
        />
 </div>
    </div>
    </section>
  )
}

export default Hero
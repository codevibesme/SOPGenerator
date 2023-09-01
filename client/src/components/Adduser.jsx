
import Nav from './Nav.jsx';
import React from 'react'
import { addUser } from '../services/Api.js';
import { useState } from 'react';

const defaultvalue = {
    full_name:"",
    age:"",
    degree:"",
    email_address:"",
    Institute_of_higher_level_education:"",
    previous_study:"",
    work_experience:"",
    canada_institute:"",
    program_of_study_in_Canada:"",
    user_country:"",
    future_goals:"",
    English_Scores_Listening:"",
    English_Scores_Reading:"",
    English_Scores_Speaking:"",
    English_Scores_writing:"",
    first_tution_fee:"",
    first_tution_fee_paid:"",
    gic:"",
    gic_fee:"",
}


const Adduser = () => {
    const [user, setUser]= useState(defaultvalue);
    function onvalueChange(e) {
       
        setUser({...user, [e.target.name] : e.target.value})
        
    }
    const addUserdetails = async(e) =>{
       e.preventDefault();
       console.log(user);
        await addUser(user);

        
    }
    return(
      <>
        <Nav />
        <section className='relative bg-form bg-cover bg-center w-full h-full p-20'>
        <div className='rounded-2xl bg-white min-h-screen w-2/3 mx-auto shadow-lg shadow-gray-400/90 p-8'>
          <h1 className='text-4xl font-palanquin font-bold text-center mb-6'>Generate Your <span className='text-[#007bff]'>SOP</span> Now!</h1>
          <form onSubmit={addUserdetails} className='min-w-full h-screen overflow-auto p-5 flex flex-col'>
            <div className='w-full mb-4'>
              <p className='text-lg h-fit w-fit font-medium mb-2'>Email</p>
              <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
              <p className='text-lg h-fit w-fit font-medium mb-2'>Full Name</p>
              <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
              <p className='text-lg h-fit w-fit font-medium mb-2'>Age</p>
              <input type="number" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4 flex flex-col'>
              <p className='text-lg h-fit w-fit font-medium mb-2'>Highest Level of Education</p>
              <select className='peer rounded-md h-12 px-4 w-2/5 border border-green-950' onChange={(e) =>onvalueChange(e)}>
                <option defaultValue disabled value={'choose'}>
                    choose
                </option>
                <option  value={'Grade 12'}>
                    Grade 12
                </option>
                <option value={' Diploma'}>
                    Diploma
                </option>
                <option value={'Bachelors degree'}>
                    Bachelors degree
                </option>
                <option value={'Masters degree'}>
                Masters degree 
                </option>
                <option value={'PhD'}>
                PhD
                </option>
              </select>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>Institute where you completed your highest level of education</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>What did you study?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>
                  Do you have any relevant work experience?<br />
                  Write None if no work experience. Provide the following details if yes:<br />
                  1. Job Title <br />
                  2. Company Name <br />
                  3. Job duties <br />
                  Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.
                </p>
                <textarea onChange={(e)=>onvalueChange(e)} rows={10} cols={20} className='peer text-lg rounded-md h-10 w-full px-4 border resize border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>What institute did you get admitted to in Canada?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>What is your program of study in Canada?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>Which country are you applying from?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>What are your future goals?</p>
                <textarea onChange={(e)=>onvalueChange(e)} rows={10} cols={20} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Listening</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Reading</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Speaking</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Writing</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>Did you pay your first year tuition?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>How much tuition fee did you pay?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>Did you do a GIC?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>

            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>How much did you pay towards GIC?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            
            <div className='w-full mb-4'>
                <p className='text-lg h-fit w-fit font-medium mb-2'>What is your program of study in Canada?</p>
                <input onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
            </div>
            <div className='mt-4 flex justify-end'>
              <button type="submit" className='text-white bg-gradient-to-tr from-blue-400 to-blue-950 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-blue-700/80'>Submit your details</button>
            </div>
          </form>

        </div>

        </section>
      </>

    )
}
export default Adduser;
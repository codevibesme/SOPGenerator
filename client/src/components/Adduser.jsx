
import Nav from './Nav.jsx';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Footer from '../sections/Footer.jsx';
import { useNavigate } from 'react-router-dom';
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
    English_Scores_Writing:"",
    first_tution_fee:"",
    first_tution_fee_paid:"",
    gic:"",
    gic_fee:"",
}

const URL ="https://sopgenerator.onrender.com";

const Adduser = () => {
    const [isGen, setIsGen] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [user, setUser]= useState(defaultvalue);
    const [greeting, setGreeting] = useState("")
    const navigate = useNavigate();
    function onvalueChange(e) {
        setUser({...user, [e.target.name] : e.target.value})
        
    }
    const addUserdetails = async(e) =>{
        e.preventDefault();
        console.log(user);
        setIsLoading(true);
        setGreeting('Your SOP is being generated...')
        try {
            const response =  await axios.post(`${URL}/sop/generate`,user);
            
            if(response.data.message === "Sent"){
                setIsLoading(false);
                setIsGen(true);
                setGreeting(`Your SOP is ready and mailed at: ${user.email_address}`);
            } else {
                setIsLoading(false);
                setIsGen(true);
                setGreeting(`Failed to Generate SOP. Please try again...`);
            }
        } catch (error) {
            console.log(" while calling the adduser api",error.message);
        } 
    }
    return(
        <>
        <Nav />
        <section className='relative bg-form bg-cover bg-center w-full h-full md:p-20'>
        <div className='rounded-2xl bg-white min-h-fit w-full md:w-2/3  mx-auto shadow-lg shadow-gray-400/90 md:p-8'>
            {greeting === "" && (
              <h1 className='text-4xl font-palanquin font-bold text-center mb-6'> Generate Your <span className='text-[#007bff]'>SOP</span> Now! 🍁</h1>

            )}
            {greeting && 
              <h1 className='text-4xl font-palanquin font-bold text-center mb-6'>{greeting}</h1>
            }
          {isloading && (
            <div role="status" className='w-fit h-fit mx-auto'>
            <svg aria-hidden="true" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
          )}
          {!isloading && isGen && (
            <div className='flex flex-col text-2xl p-5'>
                <button onClick={()=>navigate("/")} className='text-white bg-gradient-to-tr from-blue-400 to-blue-950 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-blue-700/80 mx-auto'>Go to Home</button>
            </div>
          )}
          {!isloading && !isGen && (
                <form onSubmit={addUserdetails} className='min-w-full h-screen overflow-auto p-5 flex flex-col'>
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Email</p>
                  <input name="email_address" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Full Name</p>
                  <input name="full_name" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Age</p>
                  <input name="age" type="number" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4 flex flex-col'>
                  <p className='text-lg h-fit w-fit font-medium mb-2'>Highest Level of Education</p>
                  <select name="degree" className='peer rounded-md h-12 px-4 w-2/5 border border-green-950' onChange={(e) =>onvalueChange(e)}>
                    <option defaultValue value={'choose'}>
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
                    <input name="Institute_of_higher_level_education" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>What did you study?</p>
                    <input name="previous_study" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
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
                    <input name="work_experience" onChange={(e)=>onvalueChange(e)} rows={10} cols={20} className='peer text-lg rounded-md h-10 w-full px-4 border resize border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>What institute did you get admitted to in Canada?</p>
                    <input name="canada_institute" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>What is your program of study in Canada?</p>
                    <input name="program_of_study_in_Canada" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>Which country are you applying from?</p>
                    <input name="user_country" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>What are your future goals?</p>
                    <input name="future_goals" onChange={(e)=>onvalueChange(e)} rows={10} cols={20} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Listening</p>
                    <input type="number" name="English_Scores_Listening" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Reading</p>
                    <input type="number" name="English_Scores_Reading" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Speaking</p>
                    <input type="number" name="English_Scores_Speaking" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>English Scores - Writing</p>
                    <input type="number" name="English_Scores_Writing" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>Did you pay your first year tuition?</p>
                    <input name="first_tution_fee" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>How much tuition fee did you pay?</p>
                    <input name="first_tution_fee_paid" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
                
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>Did you do a GIC?</p>
                    <input name="gic" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='w-full mb-4'>
                    <p className='text-lg h-fit w-fit font-medium mb-2'>How much did you pay towards GIC?</p>
                    <input type="number" name="gic_fee" onChange={(e)=>onvalueChange(e)} className='peer text-lg rounded-md h-10 w-full px-4 border border-green-950 focus:outline-none '/>
                </div>
    
                <div className='mt-4 flex justify-end'>
                  <button type="submit" className='text-white bg-gradient-to-tr from-blue-400 to-blue-950 rounded-md h-12 w-fit px-4 hover:scale-105 hover:shadow-md hover:shadow-blue-700/80'>Submit your details</button>
                </div>
              </form>
          )}
        </div>
        </section>
        <section className='bg-black padding-x padding-t pb-8 '>
            <Footer />
        </section>
      </>

    )
}
export default Adduser;
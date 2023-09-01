
import Nav from './Nav.jsx';
import React from 'react'
import { addUser } from '../services/Api.js';
import { useState } from 'react';


//import OrderDetails from '../components/OrderDetails';

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
      
      <section className='relative bg-form bg-cover bg-center w-full h-full'>
      <Nav />
      <div className=' relative w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen padding padding-y'
      >
    
      {/* <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div> */}
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">Full name</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="full_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                  <input onChange={(e) => onvalueChange(e)} type="number" name="age" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Highest Level of education</label>
                  <select onChange={(e) => onvalueChange(e)} name='degree'>
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
                
  
                <div className="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="Institute where you complete your higher level of education" class="block text-sm font-medium text-gray-700">Institute where you complete your higher level of education</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="Institute_of_higher_level_education" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">What did you study</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="previous_study" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Write None if no work experience. Provide the following details if yes:
1. Job Title 
2. Company Name 
3. Job duties
Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="work_experience" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">What institute did you get admitted to in Canada?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="canada_institute" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">What is your program of study in Canada?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="program_of_study_in_Canada" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Which country are you applying from?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="user_country" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">What are your future goals?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="future_goals" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">English Scores - Listening</label>
                  <input onChange={(e) => onvalueChange(e)} type="number" name="English_Scores_Listening" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">English Scores - Reading</label>
                  <input onChange={(e) => onvalueChange(e)} type="number" name="English_Scores_Reading" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">English Scores - Speaking</label>
                  <input onChange={(e) => onvalueChange(e)} type="number" name="English_Scores_Speaking" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">English Scores - writing</label>
                  <input onChange={(e) => onvalueChange(e)} type="number" name="English_Scores_writing" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Did you pay your first year tuition?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="first_tution_fee" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">How much tuition fee did you pay?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="first_tution_fee_paid" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Did you do a GIC? </label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="gic" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">How much did you pay towards GIC?</label>
                  <input onChange={(e) => onvalueChange(e)} type="text" name="gic_fee" id="age" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e)=> addUserdetails(e)}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

</section>

    )
}
export default Adduser;
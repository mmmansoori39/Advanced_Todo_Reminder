import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


function Register() {
    const [inputData, setInputData] = useState({ name:'', email:'', password: '', confirmPassword:''} )

    function getInput(e){
        setInputData( (preValues)=>{
            return { ...preValues, [e.target.name]: e.target.value }
        } )
    }

    const navigate = useNavigate();
    const RegisterUserHandler = async(e)=>{
        e.preventDefault();
        if(inputData.name=='' || inputData.email =='' || inputData.password =='' || inputData.confirmPassword=='' ){
            toast.error("Please fill all input fields!");
        }else if(inputData.password.length< 6  || inputData.confirmPassword<6  ){
            toast.error("Password must be 6 characters!");
        }else if(inputData.confirmPassword  != inputData.confirmPassword  ){
            toast.error("Password not match !");
        }else{

            try {
                const RegistrationRoute = await fetch("http://localhost:4000/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputData)
                });
        
                const RegData = await RegistrationRoute.json();
                console.log(RegData);
    
                if (RegistrationRoute.ok) {
                    setInputData( { name:'', email:'', password: '', confirmPassword: '' });
                    toast.success("Registration successful. Login Now");
                    navigate("/login");                                                         //when registration is successful the navigate to login page
                } else {
                    // console.error(`Error: ${fetchRoute.status} - ${fetchRoute.statusText}`);
                    toast.error(RegData.message);
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("An unexpected error occurred");
            }

        }

    }


  return (
<div className='flex justify-center items-center p-8'>
        <div className=" main_container w-[400px] p-5 shadow-xl mt-12">
            <h1 className='text-center text-4xl text-green-400 font-bold mt-5'>TReminder</h1>
            <div className="mt-6">
                <h2 className='text-center text-2xl text-gray-300 font-bold mb-5 underline'>Register Now</h2>
                <form action="" onSubmit={RegisterUserHandler} className='text-center'>
                    <input onChange={getInput} name='name' value={inputData.name}  type="text" placeholder='Enter Name' className='registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100 ' />
                    <input onChange={getInput} name='email' value={inputData.email} type="email" placeholder='Enter Email' className='registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100' />
                    <input onChange={getInput} name='password' value={inputData.password} type="password" placeholder='Enter Password' className='registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100' />
                    <input onChange={getInput} name='confirmPassword' value={inputData.confirmPassword} type="password" placeholder='Conform Password' className='registerInput text-slate-500 font-bold w-full px-2 py-3 rounded mb-4 bg-slate-100' />
                    <button className='btn  px-7 py-1 rounded-[0.3rem] mt-3'>Submit</button>
                </form>
                <h4 className='text-center mt-4 text-teal-700' >Already have account? <Link to={'/login'} className='text-blue-700 hover:text-red-600' >Login Now</Link> </h4>       
            </div>

        </div>
    </div>
  )
}

export default Register;

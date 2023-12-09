import React, { useState } from 'react';
import img1 from "../../images/image1.png"
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { createToast, isEmail } from '../../Utiliti';

const Signup = () => {
const [input,setInput] = useState({
        email:"",
        fullName:"",
        userName:"",
        password:""
      })
//catch value
const handleInputChange = (e) =>{
  setInput((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value
  }))
}

const [cross,setCross]= useState({
    email:true,
    fullName:true,
    userName:true,
    password:true
  })
 

  //error
const handleError = (e) =>{
    if(e.target.value == ""){
        setCross((prev) => ({
            ...prev,
            [e.target.name]:false
        }))
    }else{
        setCross((prev) =>({
            ...prev,
            [e.target.name]:true
        }))
    }
   
}
//form submit
const handlaSubmit = (e) =>{
    e.preventDefault()
    if(!input.email || !input.fullName || !input.userName || !input.password){
        createToast("All fields are required")
    }else if(!isEmail(input.email)){
        createToast("Email is not valid")
        
    }else{
        createToast("Data Stable","success") 
    }
    }


  return (
  <>
     <div className="container mx-auto">
        <div className="login mt-20 h-screen flex flex-col md:flex-row items-center justify-center">
           
            <div className="login w-[400px]   ml-0">
                <div className="login_form   border-[1px] border-slate-300 py-4 px-10" >
                    <img className='w-[250px] h-32' src={img1} alt="" />
                    <p className='text-center font-medium text-slate-700'>Sign up to see photos and videos from your friends</p>
                    
                    <div className="login_fb ">
                       <Link  className='flex items-center justify-center gap-2 text-base text-white bg-sky-400 py-1 px-10 rounded-md mt-4' > 
                       <span><FaFacebookSquare /></span>
                       <span>Log in with Facebook</span>
                       </Link>
                    </div>

                    <div className='flex  justify-center items-center gap-3 mt-4'>
                       <div className='h-[0.5px] w-20 bg-slate-300'></div>
                        <span>OR</span>
                        <div className='h-[0.5px] w-20 bg-slate-300'></div>

                    </div>
                    
                    <form  onSubmit={handlaSubmit} className='flex flex-col gap-4 mt-4' action="">

                       <div className='relative'>
                       <input  className=' w-80 text-[12px] py-3 placeholder:text-slate-500 border-[1px] border-slate-300 outline-0 rounded-md pl-[14px]' type="text" placeholder='Phone number or email address'name='email' value={input.email} onChange={handleInputChange} onBlur={handleError} />
                        {cross.email ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)} 
                       </div>

                        <div className='relative'>
                        <input className=' w-80 text-[12px] py-3   placeholder:text-slate-500 border-[1px] border-slate-300 outline-0 rounded-md pl-[14px] placeholder' type="text" placeholder='Full Name' name='fullName' value={input.fullName} onChange={handleInputChange} onBlur={handleError} />
                        {cross.fullName ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)}
                        </div>

                       <div className='relative'>
                       <input className=' w-80 text-[12px] py-3  placeholder:text-slate-500 border-[1px] border-slate-300 outline-0 rounded-md pl-[14px] placeholder' type="text" placeholder='User Name' name='userName' value={input.userName}  onChange={handleInputChange} onBlur={handleError} />
                        {cross.userName ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)}
                       </div>

                       <div className='relative'>
                       <input className=' w-80 text-[12px] py-3  placeholder:text-slate-500 border-[1px] border-slate-300 outline-0 rounded-md pl-[14px] placeholder' type="text" placeholder='Password' name='password' value={input.password}  onChange={handleInputChange} onBlur={handleError} />
                        {cross.password ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)}
                       </div>

                        <div>
                            <p className='text-[12px] text-center'>People who use our service may have uploaded your contact information to Instagra<Link className='text-sky-900 font-medium'>Learn more</Link></p>
                        </div>
                        <div>
                            <p className='text-[12px] text-center'>By signing up, you agree to our  <Link className='text-sky-900 font-medium'>Terms, Privacy Policy</Link> and <Link className='text-sky-900 font-medium'>Cookies Policy</Link></p>
                        </div>
                        
                       <button className='w-full bg-sky-400 py-1 rounded-md text-white' type='submit'>Sign Up</button>
                    </form>
                    
                    
                </div>
               
                
            </div>
        </div>
    </div>
  </>
  )
}

export default Signup
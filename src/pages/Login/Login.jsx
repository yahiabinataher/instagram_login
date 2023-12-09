import React, { useState } from 'react';
import img1 from "../../images/image1.png"
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { createToast, isEmail, isMobail } from '../../Utiliti';


const Login = () => {
    const [input,setInput] = useState({
        email:"",
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
if(!input.email || !input.password){
    createToast("All fields are required")
}else if( !isEmail(input.email)){
    createToast("Email is not valid")
}
else{
    createToast("Data Stable","success")
}
}
   
  return (
    <>
    <div className="container mx-auto">
        <div className="login h-screen flex flex-col md:flex-row items-center justify-center">
            <div style={{ backgroundImage: `url("https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW")`}} className="login_img back  bg-no-repeat bg-contain w-[560px] h-[560px] relative flex justify-end ">
                
                <img className=' absolute mt-10 left-36 h-[450px] rounded-md' src="https://i.redd.it/xm1105y1kiu21.jpg" alt="" />
            </div>
            <div className="login w-[370px]   ml-0">
                <div className="login_form   border-[1px] border-slate-300 py-4 px-10" >
                    <img className='w-[250px] h-48' src={img1} alt="" />
                    <form action="" onSubmit={handlaSubmit} className='flex flex-col gap-4 -mt-8' >

                        <div className=' relative'>
                        <input  className='text-[12px] py-3 border-[1px] w-72 border-slate-300 outline-0 rounded-md pl-[14px]' type="text" name='email' value={input.email} onChange={handleInputChange} onBlur={handleError} placeholder='Phone number, username or email address' />
                         {cross.email ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)} 
                        </div>

                        <div className='relative'>
                        <input  className='  text-[12px] py-3 border-[1px] w-72 border-slate-300 outline-0 rounded-md pl-[14px]' type="text" name='password' value={input.password} onChange={handleInputChange} onBlur={handleError} placeholder='Password' />
                        {cross.password ? "" : (<span  className='absolute right-2 top-3 text-red-600 font-extrabold text-lg'><RxCross2 /></span>)}
                        
                        </div>

                        <button  className='w-full bg-sky-400 py-1 rounded-md text-white' type='submit'>Log in</button>
                    </form>
                    <div className='flex  justify-center items-center gap-3 mt-4'>
                       <div className='h-[0.5px] w-20 bg-slate-300'></div>
                        <span>OR</span>
                        <div className='h-[0.5px] w-20 bg-slate-300'></div>

                    </div>
                    <div className="login_fb ">
                       <Link  className='flex items-center justify-center gap-2 text-base text-sky-900'> 
                       <span><FaFacebookSquare /></span>
                       <span>Log in with Facebook</span>
                       </Link>
                    </div>
                    <div className='text-center'>
                    <Link className='text-sm'><span>Forgetten Your Password</span></Link>
                    </div>
                </div>
                <div className="login_box border-[1px] border-slate-300 py-4 px-6 text-center my-4">
                    <p>Dont have an acceout?<Link to="/signup" className='text-sky-700 font-lg'>Sign Up</Link></p>
                </div>
                <div className="login_apps text-center">
                    <p>Get the app.</p>
                    <div className='apps_img flex  justify-center items-center gap-4 mt-3 '>
                        <img className='w-28' src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                        <img className='w-28' src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default Login
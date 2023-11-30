import React from 'react'
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from "../SideBar/Language"

import {
    Typography,
    Avatar
  } from "@material-tailwind/react";
  
const User = () => {
  return (
    <div className="flex mt-2 gap-40 ">

    <div className="flex gap-3 hover:bg-gradient-to-tr from-[#660099] to-red-400 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full w-40" >

    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-15 h-10 rounded-full" />
        <a href="#">
           <Typography className="text-white text-lg font-sans mt-2" variant="h1">
             Mouhib
           </Typography>
         </a>
    </div>

      <div className="flex ml-40 gap-5 mt-3" style={{marginLeft:'auto'}}>
        <Language /> 
        <BsPersonHearts color="#660099" size={"24px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300'/>
        <MdOutlineSecurity color="#660099" size={"24px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300' />
      </div>

   
    </div>
  )
}

export default User

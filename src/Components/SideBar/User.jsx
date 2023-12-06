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
    <div className="flex mt-2 justify-between items-center -translate-y-5 gap-5">

    <div className="flex gap-2 hover:bg-[#421f27] hover:-translate-y-1 hover:scale-110 duration-300 rounded-full " >

    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-15 h-10 rounded-full" />
        <a href="#" >
           <Typography className="text-white text-md font-sans mt-2 paragrapheLimite1 " variant="h1">
             Mouhamed Mouhib Naffeti
           </Typography>
         </a>
    </div>

    <div className="flex gap-5 mt-3 translate-x-12 items-center" style={{ marginLeft: 'auto' }}>
        <BsPersonHearts color="#660099" size={"60"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 '/>
        <MdOutlineSecurity color="#660099" size={"60px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
        <Language /> 
      </div>

   
    </div>
  )
}

export default User

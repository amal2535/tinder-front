import React, {useContext} from 'react'
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from "../SideBar/Language"
import { SidebarContext } from '../../Context/SideBarContext';

import {
    Typography,
    Avatar
  } from "@material-tailwind/react";
  
const User = () => {
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen, profile, setLikesTabOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(true)
    setTinderComponentOpen(false)
    setTinderOpen(true)
    setUserOpen(false)
    setLikesTabOpen(false)
  }

  const handleLikesClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setTinderOpen(true)
    setUserOpen(false)
    setLikesTabOpen(true)
  }
  const name = profile.firstname
  const image = profile.images[0]
  return (
    <div className="flex justify-between items-center -translate-y-7 min-w-[27.5rem]" >

    <div className="flex gap-2 hover:bg-[#421f27] -translate-x-6 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full " onClick={handleClick} >

    <Avatar src={image} alt="avatar" className="w-10 h-10 rounded-full cursor-pointer" />
        <a href="#" >
           <Typography className="text-white text-md font-sans mt-2 paragrapheLimite1 " variant="h1">
             {name}
           </Typography>
         </a>
    </div>

    <div className="flex gap-5 mt-3 -translate-y-1 -translate-x-4 items-center" style={{ marginLeft: 'auto' }}>
        <BsPersonHearts color="#660099" size={"60"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' onClick={handleLikesClick}/>
        <MdOutlineSecurity color="#660099" size={"60px"} className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
        <Language /> 
      </div>

   
    </div>
  )
}

export default User

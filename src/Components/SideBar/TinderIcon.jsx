import React from 'react'
import { FaFire } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from './Language';

const TinderIcon = () => {
  return (
    <div className="flex items-center justify-between gap-40 mt-2 -translate-y-5">
      <a href="#">
        <FaFire className='w-10 h-10 animate-pulse ' style={{color:"#660099"}}/>
      </a>
      
      <div className="flex items-center gap-5 mt-3 translate-x-12">
        <BsPersonHearts color="#660099" size={"60"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110'/>
        <MdOutlineSecurity color="#660099" size={"60px"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110' />
        <Language /> 
      </div>

    </div>
  )
}

export default TinderIcon

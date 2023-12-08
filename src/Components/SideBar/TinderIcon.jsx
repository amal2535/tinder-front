import React, { useContext } from 'react'
import { FaFire } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Language from './Language';
import { SidebarContext } from '../../Context/SideBarContext';

const TinderIcon = () => {
  const { setTinderComponentOpen, setProfileComponentOpen, setPreferredLanguageOpen, setTinderOpen, setUserOpen, setLikesTabOpen } = useContext(SidebarContext)
  const handleClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(true)
    setTinderOpen(false)
    setUserOpen(true)
    setLikesTabOpen(false)
  }
  const handleLikesClick = () => {
    setPreferredLanguageOpen(false)
    setProfileComponentOpen(false)
    setTinderComponentOpen(false)
    setTinderOpen(false)
    setUserOpen(true)
    setLikesTabOpen(true)
  }
  return (
    <div className="flex items-center justify-between -translate-y-8 min-w-[27rem]">
      <a href="#" onClick={handleClick}>
        <FaFire className='w-10 h-10 animate-pulse ' style={{color:"#660099"}}/>
      </a>
      
      <div className="flex items-center gap-3 ml-5 mt-3 -translate-x-4">
        <BsPersonHearts color="#660099" size={"60"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110' onClick={handleLikesClick}/>
        <MdOutlineSecurity color="#660099" size={"60px"} className='transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110' />
        <Language /> 
      </div>

    </div>
  )
}

export default TinderIcon

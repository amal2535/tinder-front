import React from "react";
import User from "./User";
import Tabs from "./Tabs"
import Profil from "./Profil/Profil";
import TinderIcon from "./TinderIcon";

  export default  function Sidebar() {

    return (
      <div className="h-screen w-[25rem]">
        <div className="h-20 violet-sidebar p-4 ">
        
        <TinderIcon/>
       
          {/* 
           <User/> */ } 

        </div>
       
        {/*<div className='bg-black h-[290vh] '>
           <Profil/> 
          </div>+*/}
       
        {

            <div className="bg-[rgb(20,20,28)] h-screen -z-30 ">
              <Tabs/> 
            </div>
    
        }

        
      </div>
    

    );
  }
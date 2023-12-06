import React from "react";
import User from "./User";
import Tabs from "./Tabs"
import Profil from "./Profil/Profil";
import TinderIcon from "./TinderIcon";
import Email from "./Profil/Email";
import Phone from "./Profil/Phone";
import LookingFor from "./Profil/LookingFor";
import PreferredLanguage from "./Profil/PreferredLanguage";

  export default  function Sidebar() {

    return (
      <div className=" h-screen  w-[25.5rem] overflow-x-hidden overflow-y-scroll ">
        <div className="h-20 p-4 violet-sidebar ">
        
        
 
        <TinderIcon/>
       
          {/* 
             <User/>
              

            */ } 

        </div>
      
       
        {/*
           <div className='bg-black h-[270vh] '>
           <Profil/> 
          </div>
         <div className="bg-[rgb(20,20,28)] h-screen w-[25rem]  border-r-2 border-[#757575]">
              <Tabs/> 
            </div>
          
          */ }
          
          
         
        
      
      {/*
 
        */}
             <div className="h-screen bg-black ">
            <PreferredLanguage/>
        </div>
      </div>
    

    );
  }
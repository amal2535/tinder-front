import React, {useState, useContext, useEffect} from "react";
import User from "./User";
import Tabs from "./Tabs"
import Profil from "./Profil/Profil";
import TinderIcon from "./TinderIcon"
import PreferredLanguage from "./Profil/PreferredLanguage";
import { SidebarContext } from "../../Context/SideBarContext";
import LikesTab from "./LikesTab"

export default  function Sidebar() {
    
  const { tinderOpen, tinderComponentOpen, profileComponentOpen, userOpen, preferredLanguageOpen, LikesTabOpen, setLikesTabOpen } = useContext(SidebarContext)
    return (
      <div className=" w-[33.5rem] min-h-screen overflow-x-hidden overflow-y-scroll ">
        <div className="h-20 p-4 violet-sidebar "> 
          <div className="h-20 violet-sidebar1 p-4 min-w-[25.5rem] ">
            {
              tinderOpen &&
              <TinderIcon/>
            }
            {
              userOpen &&
              <User/> 
            }
          </div>

          </div>
          <div className="bg-black h-screen">
            {
              preferredLanguageOpen && 
              <PreferredLanguage/>
            }
            {
              tinderComponentOpen && 
              <div className="bg-black h-[270vh]">
                <Profil />
              </div>
            }
            {
              profileComponentOpen &&
                <Tabs/> 
            }
            {
              LikesTabOpen &&
                <LikesTab/> 
            }
          </div>
      </div>
    

    );
  }
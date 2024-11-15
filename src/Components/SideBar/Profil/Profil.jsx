import React, {useContext, useEffect, useState} from 'react'
import { List} from "@material-tailwind/react";
import { FaFire } from "react-icons/fa";
import Reglages from './Reglages';
import Decouverte from './Decouverte';
import Theme from './Theme';
import Preference from './PreferencesAffichage';
import Securite from './Securite';
import Bloquer from './Bloquer';
import Deconnexion from './Deconnexion';
import SupprimerCompte from './SupprimerCompte';
import { SidebarContext } from '../../../Context/SideBarContext';

const Profil = () => {
      const { profile, LocationData } = useContext(SidebarContext)
      console.log(LocationData)
      const email = profile.email
      const phone = profile.phone
      const LookingFor = profile.showme
      return (
      <div className="bg-black min-h-fit">
            {/***************Réglages*******************/}
                  <Reglages email={email} phone={phone} />
            {/***************Reglages et découverte ************/}
                  <Decouverte location={LocationData} LookingFor={LookingFor} />
            {/***************Bloquer contacts****************/}
                  <Bloquer/>
      
            {/***************Thème*******************/}
                  <Theme/>
            {/***************Préférence d'affichage*******************/}
                  <Preference/>
            {/***************Sécurité*******************/}
                  <Securite/>
            {/***************Déconnexion*******************/}
                  <Deconnexion/>
            {/************* Tinder version *******************/}
            <List className="justify-content-center items-center "  style={{ transform: "translateY(510px)" }}>
                        <FaFire className='w-8 h-8 ' style={{color:"#660099"}}/>
                        <span className='mt-3 text-white cursor-default'>Version 4.44.0</span>
                  </List>

            {/*************** Supprimer mon compte *******************/}
            <SupprimerCompte/>
      </div>
      )
}
export default Profil

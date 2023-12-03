import React, { useEffect, useContext, useState } from "react"
import { isAuthenticated } from "../../API/AuthApi"
import { CookieContext } from "../../../Context/CookieContext"
import { useNavigate } from "react-router-dom"
import FileBase from "react-file-base64"
import SideBar from "../../SideBar/SideBar"
import Conversation from "../../SideBar/Conversation"

export default function MainTinder(){
    const { cookies, setCookie } = useContext(CookieContext)
    const TinderToken = cookies['TinderJWT']
    const navigate = useNavigate()
    useEffect(()=>{
        const CheckUser = async () => {
            const res =  await isAuthenticated({TinderToken})
            if(res?.status !== 200){
                navigate("/")
                setCookie('TinderJWT', '', 0)
                setCookie('TinderEmail', '', 0)
            }
        }
        CheckUser()
    }, [TinderToken])
    return(
        <div className="flex flex-row overflow-y-hidden">
            <SideBar />
            <Conversation />
        </div>
    )
}
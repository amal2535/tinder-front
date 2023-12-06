import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signup from "./ui/Signup"
import Login from "./ui/Login";

const Landing = () => {
    const [SignOpen, setSignOpen] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="w-screen h-screen flex flex-col items-center justify-center tinder-font landing-bg">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="lg:text-9xl landing-text text-white transparent text-7xl">Swipe Right</h1><span className="lg:text-4xl text-2xl text-white landing-text lg:-translate-y-10 lg:-translate-x-0 -translate-y-5 ">&nbsp;®</span>
                </div>
                <button className="mt-12 signup-btn "><span className="m-1" onClick={()=>setSignOpen(true)}>Create Account</span></button>
                <button className="lg:hidden mt-10 login-btn-bg px-7 py-2 text-xl text-white w-52 rounded-3xl border-2 border-red-100 hover:animate-pulse" onClick={()=>setOpen(true)}>Log in</button>
            </div>
            <Footer />
            <Signup SignOpen={SignOpen} setSignOpen={setSignOpen} />
            <Login open={open} setOpen={setOpen} />
        </div>
    )
}

export default Landing
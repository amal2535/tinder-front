import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Landing = () => {

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="w-screen h-screen flex flex-col items-center justify-center tinder-font landing-bg">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="lg:text-9xl landing-text text-white transparent text-7xl">Swipe Right</h1><span className="lg:text-4xl text-2xl text-white landing-text lg:-translate-y-10 lg:-translate-x-0 -translate-y-5 ">&nbsp;®</span>
                </div>
                <button className="mt-12 signup-btn "><span className="m-1">Create Account</span></button>
                <button className="lg:hidden mt-10 login-btn-bg px-7 py-2 text-xl text-white w-52 rounded-3xl border-2 border-red-100 hover:animate-pulse">Log in</button>
            </div>
            <Footer />
        </div>
    )
}

export default Landing
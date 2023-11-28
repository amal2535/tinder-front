import React, { useState } from "react"
import Logo from "./Images/logo.png"
import SideBarLanding from "./ui/SideBarLanding"

const items = [
    "About",
    "FAQ",
    "Contact",
    "Security",
    "Policy"
]

const Navbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    return(
        <div className="fixed top-0 mb-8 w-full z-40 border-b pink-glassmorphism flex justify-around">
            <div className="flex">
                <img src={Logo} alt="" width={180} className="object-cover object-center w-32 translate-y-[2px]" />
                <div className=" hidden lg:flex flex-row items-center justify-between px-3 gap-10 ">
            { items.map((item, key)=>(
                      <h1 className="text-white font-semibold text-xl -translate-y-1 hover:cursor-pointer transition delay-150 hover:text-purple-900 hover:scale-[1.05]" key={key}> {item} </h1>
                )
                  ) }
            </div>
            </div>
            
            <div className="lg:flex hidden items-center justify-around gap-10 pl-12">
                <h1 className="flex text-xl font-semibold text-white gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                    </span>
                    Language
                </h1>
                <button className="bg-white text-black rounded-2xl px-7 py-1 font-semibold transition delay-75 text-lg hover:bg-gray-200 dark:bg-gray-900 border border-gray-400 dark:text-white dark:hover:bg-gray-800"> 
                    Log in
                </button>
            </div>
            <div className="lg:hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 -translate-y-1 transition delay-75 text-white cursor-pointer hover:text-purple-900" onClick={()=>setSideBarOpen(!sideBarOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
                <SideBarLanding SetSideOpen={setSideBarOpen} items={items} SideBarOpen={sideBarOpen} />
        </div>
    )
}

export default Navbar
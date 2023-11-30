import React from "react";
import ProfileNav from "../ui/ProfileNav"
import Footer from "../Footer";
export default function(){
    return (
        <div className="w-screen h-screen bg-gray-white overflow-x-hidden dark:bg-zinc-950">
            <ProfileNav />
            <div className="flex flex-col w-full h-full justify-center items-center">
                <h1 className="mt-5 text-black dark:text-white text-4xl font-semibold cursor-none "> Create Account </h1>
                <div className="w-full h-full flex lg:flex-row flex-col mt-7 gap-3 px-5 justify-center">
                    <div className="py-12 px-8 gap-8 items-center flex flex-col rounded-lg border border-gray-700">
                        <div className="flex gap-2">
                            <input type="text" className="border-2 rounded-lg border-white dark-border-black bg-gray-900 h-10 dark:text-white font-thin w-64"/>
                            <input type="text" className="border-2 rounded-lg border-white dark-border-black bg-gray-900 h-10 dark:text-white font-thin w-64" />
                        </div>
                        <input type="text" className="border-2 rounded-lg border-white dark-border-black bg-gray-900 h-10 dark:text-white font-thin w-[520px]" />
                    </div>

                    <div className="py-12 px-8 gap-8 items-center flex flex-col rounded-lg border border-gray-700">
                        <div className="flex gap-2">
                            <input type="text" className="border-2 rounded-lg border-white dark-border-black bg-gray-900 h-10 dark:text-white font-thin"/>
                            <input type="text" className="border-2 rounded-lg border-white dark-border-black bg-gray-800 h-10 dark:text-white font-thin" />
                        </div>
                        <input type="text" className="border-1 border-white dark-border-black" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
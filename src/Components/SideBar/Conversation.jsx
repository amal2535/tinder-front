import React from "react";

export default function Conversation (){
    return (
        <div className="flex flex-col bg-zinc-900 w-full h-screen ">
            <div className="flex justify-between items-center border-b-2 border-gray-700 shadow-slate-900 shadow-md h-20 px-8">
                <div className="flex gap-5 items-center">
                    <img src="https://picsum.photos/200" alt="" width={60} height={60} className="rounded-full" />
                    <p className="text-lg text-gray-300 font-bold cursor-default">
                        Amal Maatoug
                    </p>
                </div>
                <div>
                    <div className="border-2 border-gray-500 rounded-full p-[1px] cursor-pointer active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400 transition ease-in-out delay-300 hover:rotate-90 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
            </div>
            <div className="flex h-12">
                <div className="flex justify-between">
                    <input type="text" className="border-none outline-none bg-zinc-800 w-inherit text-white overflow-wrap-break-words" />
                    <button className="bg-red-200">SEND</button>
                </div>
            </div>
        </div>
    )
}

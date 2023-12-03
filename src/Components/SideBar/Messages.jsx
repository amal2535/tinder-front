import React from "react";

const Messages = () => {
    return(
        <div className="flex flex-col w-full">
            <div className="w-full h-24 flex items-center bg-zinc-800 hover:bg-zinc-700 hover:border-y hover:border-y-gray-400 hover:border-r-4 hover:border-r-red-700 px-2 gap-5 cursor-pointer">
                <div>
                    <img src="https://picsum.photos/200" alt="" width={70} height={70} className="rounded-full shadow-slate-500 shadow-md" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-200 font-bold text-lg">Amal Maatoug</p>
                    <p className="text-sm text-gray-300 ml-2">3ichti lkalba hedhi.</p>
                </div>
            </div>
            <div className="w-full h-24 flex items-center bg-zinc-800 hover:bg-zinc-700 hover:border-y hover:border-y-gray-400 hover:border-r-4 hover:border-r-red-700 px-2 gap-5 cursor-pointer">
                <div>
                    <img src="https://picsum.photos/200" alt="" width={70} height={70} className="rounded-full shadow-slate-500 shadow-md" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-200 font-bold text-lg">Mouhib Naffeti</p>
                    <p className="text-sm text-gray-300 ml-2">Wasa3 belk barka.</p>
                </div>
            </div>
            <div className="w-full h-24 flex items-center bg-zinc-800 hover:bg-zinc-700 hover:border-y hover:border-y-gray-400 hover:border-r-4 hover:border-r-red-700 px-2 gap-5 cursor-pointer">
                <div>
                    <img src="https://picsum.photos/200" alt="" width={70} height={70} className="rounded-full shadow-slate-500 shadow-md" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-200 font-bold text-lg">Haroun Toumi</p>
                    <p className="text-sm text-gray-300 ml-2">Wasa3 belk Amal.</p>
                </div>
            </div>
            <div className="w-full h-24 flex items-center bg-zinc-800 hover:bg-zinc-700 hover:border-y hover:border-y-gray-400 hover:border-r-4 hover:border-r-red-700 px-2 gap-5 cursor-pointer">
                <div>
                    <img src="https://picsum.photos/200" alt="" width={70} height={70} className="rounded-full shadow-slate-500 shadow-md" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-200 font-bold text-lg">Hsan Naffeti</p>
                    <p className="text-sm text-gray-300 ml-2">Rabi yberklk, Rabi yekrmk.</p>
                </div>
            </div>
        </div>
    )
}

export default Messages
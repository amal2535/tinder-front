import React, {useEffect, useState} from "react";
import ProfileNav from "../ui/ProfileNav"
import Footer from "../Footer";
import ImageInput from "../ui/ImageInput";

export default function Profile(){
export default function(){
    const [gender, setGender] = useState('')
    const [showMe, setShowMe] = useState('')
    const [about, setAbout] = useState('')
    const maxLength = 50
    const aboutChangeHandler = (e) => {
        setAbout(e.target.value)
        
    }

    const [Images, setImages] = useState([])

    const AddImage = (index) => {
        setImages([...Images, index])
    }

    useEffect(()=>{
        console.log(Images)
    }, [Images])

    const maxLettersAbout = maxLength - about.length

    return (
        <div className="bg-gray-white overflow-x-hidden dark:bg-zinc-950">
            <div className="flex flex-col w-full h-full items-center gap-4 mb-4">
                <h1 className="mt-4 text-black dark:text-white text-4xl font-semibold cursor-none "> Create Account </h1>
                <div className="w-full h-full flex lg:flex-row flex-col mt-4 gap-3 px-5 justify-center">
                    <div className="py-12 px-24 md:gap-8 gap-5 items-center flex flex-col rounded-lg border border-pink-700">
                        <div className="flex md:gap-2 gap-5 md:flex-row flex-col ">
                            <div className=" flex flex-col gap-2">
                                <label htmlFor="firstname" className="dark:text-white font-semibold text-lg">&nbsp; First Name </label>
                                <input type="text" className="border-2 rounded-lg h-12 border-purple-600 dark:bg-zinc-800 dark:text-white font-thin w-64" id="firstname"/>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Last Name </label>
                                <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-zinc-800 h-12 dark:text-white font-thin w-64" id="lastname"/>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Email </label>
                            <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-zinc-800 h-12 dark:text-white font-thin md:w-[520px] w-64" id="email"/>
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Birthday </label>
                            <input type="date" className="border-2 rounded-lg border-purple-600 dark:bg-zinc-800 h-12 dark:text-white font-thin md:w-[520px] w-64" id="email"/>
                        </div>
                        <div className=" flex flex-col gap-2 md:self-start md:pl-44 lg:pl-0">
                            <p className="dark:text-white font-semibold text-lg self-start">&nbsp; Gender </p>
                            <div className="flex gap-5 ">
                                <button className={`dark:text-gray-100 border ${gender === 'Male' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105 `} onClick={()=>setGender('Male')} > Male </button>
                                <button className={`dark:text-gray-100 border ${gender === 'Female' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>setGender('Female')} > Female </button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 md:self-start md:pl-44 lg:pl-0">
                            <p className="dark:text-white font-semibold text-lg self-start">&nbsp; Show me </p>
                            <div className="flex gap-5 ">
                                <button className={`dark:text-gray-100 border ${showMe === 'Males' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>setShowMe('Males')} > Males </button>
                                <button className={`dark:text-gray-100 border ${showMe === 'Females' ? 'bg-slate-600 border-white ' : 'dark:btn-light btn-dark'} py-2 px-8 rounded-3xl md:w-44 w-32 transition delay-200 hover:scale-105`} onClick={()=>setShowMe('Females')} > Females </button>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2">
                                <label htmlFor="lastname" className="dark:text-white font-semibold text-lg">&nbsp; Describe your self in few words <span className="font-thin dark:text-white">&nbsp;&nbsp;({maxLettersAbout})</span></label>
                                <input type="text" className="border-2 rounded-lg border-purple-600 dark:bg-zinc-800 h-12 dark:text-white font-thin md:w-[520px] w-64" maxLength={50} onChange={e=>aboutChangeHandler(e)} />
                        </div>
                    </div>

                    <div className="py-12 px-8 gap-24 items-center flex flex-col rounded-lg border border-pink-700">
                        <div className="flex gap-3">
                            <ImageInput Images={Images} AddImage={AddImage} index={0} />
                            <ImageInput Images={Images} AddImage={AddImage} index={1} />
                            <ImageInput Images={Images} AddImage={AddImage} index={2} />
                        </div>
                        <div className="flex gap-3">
                            <ImageInput Images={Images} AddImage={AddImage} index={3} />
                            <ImageInput Images={Images} AddImage={AddImage} index={4} />
                            <ImageInput Images={Images} AddImage={AddImage} index={5} />
                        </div> 
                    </div>

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
                <button className="bg-purple-700 px-6 py-2 text-lg font-semibold text-white rounded-3xl transition delay-100 hover:bg-purple-700/80 active:bg-purple-700 my-6">Create Profile</button>
            </div>
            <Footer />
        </div>
    )
}

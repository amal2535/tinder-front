import React, {useState} from "react";
import {format} from "timeago.js"
import InputEmoji from "react-input-emoji"

const messages = [
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "Hey, how are you?",
        "timestamp": "2023-12-03T09:45:23Z"
    },
    {
        "sender": "user2",
        "receiver": "user1",
        "message": "I'm doing well, thanks! How about you?",
        "timestamp": "2023-12-03T10:12:45Z"
    },
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "Not bad. Any plans for the weekend?",
        "timestamp": "2023-12-03T11:30:12Z"
    },
    {
        "sender": "user2",
        "receiver": "user1",
        "message": "I'm thinking of going hiking. You?",
        "timestamp": "2023-12-03T12:45:56Z"
    },
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "That sounds great! I might just relax at home.",
        "timestamp": "2023-12-03T14:20:37Z"
    },
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "Hey, how are you?",
        "timestamp": "2023-12-03T15:10:22Z"
    },
    {
        "sender": "user2",
        "receiver": "user1",
        "message": "I'm doing well, thanks! How about you?",
        "timestamp": "2023-12-03T12:28:11Z"
    },
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "Not bad. Any plans for the weekend?",
        "timestamp": "2023-12-03T13:40:59Z"
    },
    {
        "sender": "user2",
        "receiver": "user1",
        "message": "I'm thinking of going hiking. You?",
        "timestamp": "2023-12-03T12:55:43Z"
    },
    {
        "sender": "user1",
        "receiver": "user2",
        "message": "That sounds great! I might just relax at home.",
        "timestamp": "2023-12-03T08:15:18Z"
    }
]


export default function Conversation (){
    const [text, setText] = useState("");

    function handleOnEnter(text) {
    
      console.log("enter", text);
    }
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
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-8">
                {messages.map((message)=>{
                    const timestamp = new Date(message.timestamp)
                    return (
                        (
                            message.receiver === "user2" ?
                                <div className="ml-auto">
                                    <div className="bg-blue-600 rounded-l-md rounded-tr-md w-44 ml-auto mr-3 px-2 py-2">
                                        <p className="text-sm text-white">{message.message}</p>
                                    </div>
                                    <p className="text-xs text-white mt-2 mr-2">
                                        {format(timestamp.toUTCString())}
                                    </p>
                                </div>
                            :
                            <div className="">
                                    <div className="bg-gray-600 rounded-r-md rounded-tl-md w-44 ml-2 px-2 py-2">
                                        <p className="text-sm text-white">{message.message}</p>
                                    </div>
                                    <p className="text-xs text-white mt-2 mr-2 ml-2">
                                        {format(timestamp.toUTCString())}
                                    </p>
                                </div>
                        )
                    )
                })

                }
            </div>
            <div className="flex h-14">
                <div className="flex justify-between w-full border-t-2 border-slate-600">
                    {/*<input type="text" className="px-2 w-full outline-none bg-zinc-800 w-inherit text-gray-200 overflow-wrap-break-words border-t-2 border-t-slate-600 transition ease-in-out delay-100 focus-within:border-purple-600" placeholder="Type a message...." />*/}
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        keepOpened
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                    />
                    <button className="text-red-700 font-bold bg-inherit w-20 transition ease-in-out delay-100 hover:bg-zinc-800 active:bg-zinc-950">SEND</button>
                </div>
            </div>
        </div>
    )
}

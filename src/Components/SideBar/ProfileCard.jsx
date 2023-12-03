import React from "react"

const ProfileCard = ({ imageUrl, profileName }) => {
    return(
        <div className="flex flex-col rounded-lg overflow-hidden border-2 border-purple-800 transition delay-200 hover:scale-110 cursor-pointer">
            <div className="relative overflow-hidden h-[7rem] w-[7rem]">
                <img
                    src={`${imageUrl}`}
                    alt=""
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '5/5' }} // Adjust the aspect ratio as needed
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 font-semibold">
                    {profileName}
                </div>
        </div>
    </div>

    )
}

export default ProfileCard
import React from "react";

const ImageInput = ({image}) => {
    return (
        <div className={`${image ? 'border-dashed' : 'border-solid'} border-2 border-purple-700`}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            </div>
            <div></div>
        </div>
    )
}

export default ImageInput
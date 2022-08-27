import React from 'react'

export const DotIndicator = () => {
    return (
        <>
            <div className="relative">
                <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
            </div>
            <div className="relative">
                <img
                    className="w-10 h-10 rounded"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full" />
            </div>
            <div className="relative">
                <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
            </div>
            <div className="relative">
                <img
                    className="w-10 h-10 rounded"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt=""
                />
                <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
            </div>
        </>
    )
}

import React from 'react'

export const Video = () => {
    return (<video
        className="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
        controls
    >
        <source src="https://flowbite.com/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    )
}

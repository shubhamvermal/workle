import React from 'react'

export const Images = () => {
    return (
        <div>
            {/* Full circle  */}
            <img
                className="w-96 h-96 rounded-full"
                src="https://flowbite.com/docs/images/examples/image-4@2x.jpg"
                alt="description"
            />
            <br />

            {/* shadow and border radius */}
            <img
                className="max-w-xl h-auto rounded-lg shadow-xl dark:shadow-gray-800"
                src="https://flowbite.com/docs/images/examples/image-2@2x.jpg"
                alt="description"
            />
            {/* gray scale */}
            <img
                className="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="description"
            />


            {/* blur */}
            <img
                className="max-w-lg h-auto rounded-lg transition-all duration-300 blur-sm hover:blur-none"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="description"
            />

        </div>
    )
}

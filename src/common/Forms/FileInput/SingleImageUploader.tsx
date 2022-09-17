import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import ImageUploader from './ImageUploader'
import { image_server } from '../../../config/config'

type SingleImageUploaderTypes = {
    name?: string;
    label: ReactNode;
    className?: string;
    input?: any;
    imageSubmit?: any;
    onUpload?: any
    image?: any
    setPreview?: any;
}
const SingleImageUploader = (props: SingleImageUploaderTypes) => {
    const { label, className, name, imageSubmit, onUpload, image, setPreview } = props
    const [imagePath, setImagePath] = useState<any>(null)



    if(image){
        console.log("🚀 ~ file: SingleImageUploader.tsx ~ line 22 ~ SingleImageUploader ~ image", image)
        return <img className="w-32 h-32" alt={""} src={image}/>
    }


    return (
        <>
            <ImageUploader
                name={name}
                label={label}
                className={className}
                onChange={(val: any) => {
                    let formData = new FormData();
                    formData.append('images', val)
                    onUpload(formData)
                    setPreview(URL.createObjectURL(val))
                }}
                image={imagePath}
            />
        </>
    )
}

export default SingleImageUploader

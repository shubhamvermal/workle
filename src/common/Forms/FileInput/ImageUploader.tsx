import classNames from 'classnames'
import React, { ReactNode } from 'react'

type ImageUploaderTypes = {
    name?: string;
    label: ReactNode;
    className?: string;
    onChange?: any;
    rest?: any
    image?: any
}
const ImageUploader = (props: ImageUploaderTypes) => {
    const { label, className, onChange, image, ...rest } = props

    return (
        <div className={classNames("bg-blue-200 w-32 h-32 flex justify-center items-center border-2 border-blue-600 border-dashed relative", className)}>
            {image ?
                <img className={"w-32 h-32"} alt="" src={URL.createObjectURL(image)} /> :
                <span className={"text-blue-700"}>{label}</span>}
            <input
                accept="image/*"
                className={"w-32 h-32 absolute opacity-0"}
                type="file"
                onChange={(e: any)=>{
                    if(e.target.files[0]){
                        onChange(e.target.files[0])
                    }
                }}
                {...rest}
            />
        </div>
    )
}

export default ImageUploader

import classNames from 'classnames'
import React, { ReactNode } from 'react'

type ImageUploaderTypes = {
    name?: string;
    label: ReactNode;
    className?: string;
    input?: any
}
const ImageUploader = (props: ImageUploaderTypes) => {
    const { label, className, name, input } = props
    console.log("🚀 ~ file: ImageUploader.tsx ~ line 11 ~ ImageUploader ~ props", props)
    return (
        <div className={classNames("bg-blue-200 w-32 h-32 flex justify-center items-center border-2 border-blue-600 border-dashed relative", className)}>
            <span className={"text-blue-700"}>{label}</span>
            <input name={name} className={"w-32 h-32 absolute opacity-0"} type="file" {...input}/>
        </div>
    )
}

export default ImageUploader

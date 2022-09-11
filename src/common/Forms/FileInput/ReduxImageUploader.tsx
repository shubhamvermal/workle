import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import ImageUploader from './ImageUploader'

type ReduxImageUploaderTypes = {
    name?: string;
    label: ReactNode;
    className?: string;
    input?: any;
    imageSubmit?: any;
    onUpload?: any
}
const ReduxImageUploader = (props: ReduxImageUploaderTypes) => {
    const { label, className, name, imageSubmit, onUpload } = props
    const [image, setImage] = useState<any>(null)

    useEffect(() => {
        if (!!imageSubmit) {
            setImage(null)
        }
    }, [imageSubmit])

    return (
        <>
            <ImageUploader
                name={name}
                label={label}
                className={className}
                onChange={(val: any) => {
                    setImage(val)
                    let formData = new FormData();
                    formData.append('images', val)
                    onUpload(formData)
                }}
                image={image}
            />
        </>
    )
}

export default ReduxImageUploader

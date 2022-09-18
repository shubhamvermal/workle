import { ReactNode } from 'react'
import ImageUploader from './ImageUploader'

type MultiImageUploaderTypes = {
    name?: string;
    label: ReactNode;
    className?: string;
    input?: any;
    imageSubmit?: any;
    onUpload?: any
    image?: any
    setPreview?: any;
    type?: any
}
const MultiImageUploader = (props: MultiImageUploaderTypes) => {
    const { label, className, name, onUpload, setPreview } = props

    return (
        <>
            <ImageUploader
                name={name}
                label={label}
                className={className}
                onChange={(val: any) => {
                    console.log("🚀 ~ file: MultiImageUploader.tsx ~ line 29 ~ MultiImageUploader ~ val", val)
                    let formData = new FormData();
                    Object.keys(val).map((x: any, i: number)=> formData.append('images', val[i]))
                    onUpload(formData)
                    let arr: any = [];
                    Object.keys(val).map(x => arr.push(URL.createObjectURL(val[x])))
                    setPreview(arr)
                }}
                image={false}
                type="multiple"
                multiple="multiple"
            />
        </>
    )
}

export default MultiImageUploader

import React from 'react'

type ImagePreviewType = {
    src: string;
    id: string;
    onOutsideClick?: () => void
};

const ImagePreview = (props: ImagePreviewType) => {
    const {src, id, onOutsideClick} = props;
    return (
        <div className={"absolute z-[999] w-full h-full bg-[#000000b8] flex items-center justify-center"} onClick={()=> onOutsideClick && onOutsideClick()}>
            <img src={src} alt={""} loading={"lazy"}/>
        </div>
    )
}

export default ImagePreview

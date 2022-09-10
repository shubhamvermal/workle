import React, { useEffect, useState } from 'react'
import ImagePreview from '../common/Images/ImagePreview'
import ReactDOMServer from "react-dom/server";

const useImagePreviewer = () => {
    const [src, setSrc] = useState<any>("")

        // useEffect(() =>{
        //     document.getElementById('root')?.appendChild()
        // },[])
    useEffect(() => {
        // console.log('src====>', src?.target?.currentSrc)
    }, [src])

    const component = src?.target?.currentSrc ? <ImagePreview onOutsideClick={()=> setSrc(null)} src={src?.target?.currentSrc} id="" /> : <></>
        
    return [setSrc, component]
}

export default useImagePreviewer

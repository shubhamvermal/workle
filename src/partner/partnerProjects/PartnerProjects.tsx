import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LeftArrowIcon } from '../../assets/Icons'
import MultiImageUploader from '../../common/Forms/FileInput/MultiImageUploader'
// import ImagePreview from '../../common/Images/ImagePreview'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import { image_server } from '../../config/config'
import useImagePreviewer from '../../hooks/useImagePreviewer'
import { addPartnerProjects, getPartnerProjects } from '../../store/partner/actions/partnerProjects'

const PartnerProjects = () => {
    const dispatch = useDispatch();
    const [imgPrev, imagePreview]: any = useImagePreviewer()
    // const [profilePic, setProfilePic] = useState<any>(null);
    const [projects, setProjects] = useState<any>([]);
    const [projectsPrev, setProjectsPrev] = useState<any>([]);
    const navigate = useNavigate();


    const handleSaveAllImages = async () => {
        const picResponse = await dispatch(addPartnerProjects(projects));
        console.log("🚀 ~ file: PartnerProjects.tsx ~ line 24 ~ handleSaveAllImages ~ picResponse", picResponse)
    }

    useEffect(() => {
        (async () => {
            const res = await dispatch(getPartnerProjects())
            console.log("🚀 ~ file: PartnerProjects.tsx ~ line 30 ~ res", res)
            if (res.payload.success && res.payload.data) {
                let projectList = res.payload.data.map((img:any)=> image_server + img)
                setProjectsPrev(projectList)
            }
        })()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* header */}
            {imagePreview}
            <div className="bg-white p-4 dark:bg-gray-700 sticky top-0">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Projects</Heading4>
                    <Paragraph>Add projects Done by you</Paragraph>
                </div>
            </div>
            <hr />
            {/* body */}
            <div className={"flex flex-wrap gap-1 p-2"}>
                <MultiImageUploader
                    className={"w-[120px] h-[120px]"}
                    label={"Add Photos"}
                    onUpload={setProjects}
                    setPreview={setProjectsPrev}
                />
                {console.log("🚀 ~ file: PartnerProjects.tsx ~ line 56 ~ PartnerProjects ~ projects", projects)}
                {projectsPrev.map((img_url: any, index: number) => <img onClick={imgPrev.bind(this)} key={index} src={img_url} className={"w-[120px] h-[120px] bg-red-400"} alt={""} />)}
            </div>
            <div className={"h-12 flex justify-center items-center p-4 bg-white dark:bg-gray-700"}>
                <button onClick={handleSaveAllImages} className={"bg-blue-800 rounded-2xl text-white px-8 py-2 w-full"}>submit details</button>
            </div>
        </>
    )
}

export default PartnerProjects

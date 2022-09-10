import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftArrowIcon } from '../../assets/Icons'
import ImageUploader from '../../common/Forms/FileInput/ImageUploader'
import ImagePreview from '../../common/Images/ImagePreview'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import useImagePreviewer from '../../hooks/useImagePreviewer'

const projects: any = [
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7a0TCmJr37H6HlkUSLUWzFOWaKimDou_Lg&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdQfflN1Km7m0sQbV3qd7kxviMQkbB9s_Fw&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EzQRA0DyA_A7Lst0WkZ1tG87Gl5jOkIgbA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLq6XlurXTpjyfssVZsM5HZl29ZEiAi06rnA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwSxlArilCv741q4fQz5keyHnJBz2nP5s3Q&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqvXickWkpRpS-AES2jEWEra_URDGlVQvTA&usqp=CAU" },
];

const PartnerProjects = () => {
    const [imgPrev, imagePreview]: any = useImagePreviewer()
    const navigate = useNavigate();
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
                <ImageUploader className={"w-[120px] h-[120px]"} label={"Add Photos"} />
                {projects.map(({ id, img_url }: any, index: number) => <img onClick={imgPrev.bind(this)} key={index} src={img_url} className={"w-[120px] h-[120px] bg-red-400"} alt={""} />)}
            </div>
        </>
    )
}

export default PartnerProjects

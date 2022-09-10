import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftArrowIcon } from '../../assets/Icons'
import ImageUploader from '../../common/Forms/FileInput/ImageUploader'
import InputField from '../../common/Forms/InputFields/InputField'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import useImagePreviewer from '../../hooks/useImagePreviewer'


const certificates: any = [
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
    {id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU"},
]


const ProfessionalInfo = () => {
    const navigate = useNavigate();
    const [setImgPrev, imagePreview]: any = useImagePreviewer()



    return (
        <>
        {imagePreview}
            {/* header */}
            <div className="bg-white p-4 dark:bg-gray-700">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Professional Profile</Heading4>
                    <Paragraph>Enter your bla bla details</Paragraph>
                </div>
            </div>

            {/*  body */}
            <div className="p-4">
                <div>
                    <InputField
                        type={'text'}
                        label={'Username'}
                        placeholder={'John'}
                        name={'username'}
                        onChange={(e) => console.log('ee', e.target.value)}
                    />
                </div>

                <div className="flex gap-4 justify-between">
                    <div>
                        <InputField
                            type={'text'}
                            label={'phone number'}
                            placeholder={'+91 9876543210'}
                            name={'add2'}
                            onChange={(e) => console.log('ee', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputField
                            type={'date'}
                            label={'Date of Birth'}
                            placeholder={'20-01-1999'}
                            name={'pin'}
                            onChange={(e) => console.log('ee', e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <InputField
                        type={'text'}
                        label={'email'}
                        placeholder={'john@gmail.com'}
                        name={'state'}
                        onChange={(e) => console.log('ee', e.target.value)}
                    />
                </div>
                <div className="flex gap-4 justify-between">
                    <div>
                        <InputField
                            type={'text'}
                            label={'catagory'}
                            placeholder={'Choose Catagory'}
                            name={'catagory'}
                            onChange={(e) => console.log('ee', e.target.value)}
                        />
                    </div>
                    <div>
                        <InputField
                            type={'tel'}
                            label={'work'}
                            placeholder={'Choose Work'}
                            name={'tel'}
                            onChange={(e) => console.log('ee', e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <InputField
                        type={'text'}
                        label={'Work Experience'}
                        placeholder={'House/flatt no, building name'}
                        name={'add1'}
                        onChange={(e) => console.log('ee', e.target.value)}
                    />
                </div>
                <div>
                    <InputField
                        type={'text'}
                        label={'Graduate certificate'}
                        placeholder={'Enter'}
                        name={'city'}
                        onChange={(e) => console.log('ee', e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-auto p-3">
                    <ImageUploader className={"!min-w-[120px] !h-[100px]"} label={"Add Photo"} />
                    {certificates.map(({id, img_url}: any, index: number) =><img onClick={setImgPrev.bind(this)} className={"!min-w-[120px] !h-[100px]"} src={img_url} alt={""}/>)}
                </div>
            </div>

            {/* footer */}
            <div className={"h-12 flex justify-center items-center p-4 bg-white dark:bg-gray-700"}>
                <button className={"bg-blue-800 rounded-2xl text-white px-8 py-2 w-full"}>submit details</button>
            </div>

        </>
    )
}

export default ProfessionalInfo



// name
// catagory
// work
// experience
// phone number
// alternate number
// email
// highest schooling / degree / diploma certificate images